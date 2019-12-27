import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { RecipesService } from "src/app/core/services/recipes.service";
import { Recipe } from "src/app/shared/models/Recipe";
import { MessagesService } from "src/app/core/services/messages.service";

@Component({
  selector: "app-add-recipe-details",
  templateUrl: "./add-recipe-details.component.html",
  styleUrls: ["./add-recipe-details.component.scss"]
})
export class AddRecipeDetailsComponent implements OnInit {
  id: string;
  isUpdate: boolean = false;
  recipeDetailsForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private recipesService: RecipesService,
    private messageService: MessagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.recipeDetailsForm = this.createFormGroup(this.fb);
    this.route.params
      .pipe(
        switchMap((params: Params) => this.recipesService.getRecipe(this.id))
      )
      .subscribe((recipe: Recipe) => {
        if (recipe) {
          this.isUpdate = true;
          this.recipeDetailsForm.patchValue({
            name: recipe.name,
            type: recipe.type,
            prepTime: recipe.prepTime,
            servesNumber: recipe.servesNumber,
            healthRating: recipe.healthRating
          });
        }
      });
  }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      type: ["", Validators.required],
      prepTime: [
        0,
        [Validators.required, Validators.max(999), Validators.min(1)]
      ],
      servesNumber: [
        0,
        [Validators.required, Validators.max(99), Validators.min(1)]
      ],
      healthRating: [
        0,
        [Validators.required, Validators.max(10), Validators.min(1)]
      ]
    });
  }

  get name() {
    return this.recipeDetailsForm.get("name");
  }
  get type() {
    return this.recipeDetailsForm.get("type");
  }
  get prepTime() {
    return this.recipeDetailsForm.get("prepTime");
  }
  get servesNumber() {
    return this.recipeDetailsForm.get("servesNumber");
  }
  get healthRating() {
    return this.recipeDetailsForm.get("healthRating");
  }

  onUpdate() {
    const value: Recipe = Object.assign({}, this.recipeDetailsForm.value);
    const valid: boolean = this.recipeDetailsForm.valid;
    if (!valid) {
      this.messageService.showFormError();
    } else {
      // Add id to client
      value.id = this.id;
      this.recipesService.updateRecipe(value);
      this.router.navigate([`/recipes/${this.id}`]);
    }
  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const value: Recipe = Object.assign({}, this.recipeDetailsForm.value);
    const valid: boolean = this.recipeDetailsForm.valid;
    if (!valid) {
      this.messageService.showFormError();
    } else {
      // Add new client to firestore
      this.recipesService.newRecipe(value);
      this.router.navigate(["/recipes"]);
    }
  }
}
