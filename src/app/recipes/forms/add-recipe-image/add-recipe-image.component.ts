import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { switchMap, finalize } from "rxjs/operators";
import { AngularFireStorage } from "@angular/fire/storage";
// Internal
import { Recipe } from "src/app/shared/models/Recipe";
import { RecipesService } from "src/app/core/services/recipes.service";
import { MessagesService } from "src/app/core/services/messages.service";

@Component({
  selector: "app-add-recipe-image",
  templateUrl: "./add-recipe-image.component.html",
  styleUrls: ["./add-recipe-image.component.scss"]
})
export class AddRecipeImageComponent implements OnInit {
  id: string;
  isUpdate: boolean = false;
  recipeImageForm: FormGroup;
  imgSrc: string;
  selectedImage: any = null;
  downloadUrl: string;
  isSubmitted: boolean = false;
  constructor(
    public fb: FormBuilder,
    private recipesService: RecipesService,
    private messageService: MessagesService,
    private route: ActivatedRoute,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.recipeImageForm = this.createFormGroup(this.fb);
    this.route.params
      .pipe(
        switchMap((params: Params) => this.recipesService.getRecipe(this.id))
      )
      .subscribe((recipe: Recipe) => {
        if (recipe.mainImage) {
          this.isUpdate = true;
          this.imgSrc = recipe.mainImage;
          this.downloadUrl = recipe.mainImage;
        }
      });
  }

  // ****************************** Form and Getters ***********************************
  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      mainImage: ["", [Validators.required]]
    });
  }
  get mainImage() {
    return this.recipeImageForm.get("mainImage");
  }

  // ****************************** Event Functions ***********************************

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.selectedImage = null;
    }
  }

  onSubmit() {
    this.isSubmitted = true;
    // Create a deep copy
    let value: Recipe = Object.assign({}, this.recipeImageForm.value);
    const valid: boolean = this.recipeImageForm.valid;
    if (!valid) {
      this.messageService.showFormError();
    } else {
      // Remove previous image from storage
      if (this.downloadUrl) {
        this.storage.storage.refFromURL(this.downloadUrl).delete();
      }
      // Create file path and file ref
      const filePath = `recipes/${this.id}/${
        this.selectedImage.name
      }_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      // Upload the file
      this.storage
        .upload(filePath, this.selectedImage)
        .snapshotChanges()
        .pipe(
          // Once uploaded, save it to database (per docs on angularfire)
          finalize(() => {
            fileRef.getDownloadURL().subscribe(url => {
              value.mainImage = url;
              this.recipesService.addRecipeData(this.id, value);
            });
          })
        )
        .subscribe();
      // Go back to recipe
      this.router.navigate([`/recipes/${this.id}`]);
    }
  }
}
