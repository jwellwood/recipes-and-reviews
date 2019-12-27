import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { RecipesService } from "src/app/core/services/recipes.service";
import { Recipe } from "src/app/shared/models/Recipe";
import { MessagesService } from "src/app/core/services/messages.service";

@Component({
  selector: "app-add-recipe-comment",
  templateUrl: "./add-recipe-comment.component.html",
  styleUrls: ["./add-recipe-comment.component.scss"]
})
export class AddRecipeCommentComponent implements OnInit {
  id: string;
  isUpdate: boolean = false;
  recipeCommentForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private recipesService: RecipesService,
    private messageService: MessagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.recipeCommentForm = this.createFormGroup(this.fb);
    this.route.params
      .pipe(
        switchMap((params: Params) => this.recipesService.getRecipe(this.id))
      )
      .subscribe((recipe: Recipe) => {
        if (recipe.tagLine || recipe.mainComment) {
          this.isUpdate = true;
          this.recipeCommentForm.patchValue({
            tagLine: recipe.tagLine,
            mainComment: recipe.mainComment
          });
        }
      });
  }
  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      tagLine: ["", [Validators.required, Validators.maxLength(100)]],
      mainComment: ["", [Validators.required, Validators.maxLength(5000)]]
    });
  }
  get tagLine() {
    return this.recipeCommentForm.get("tagLine");
  }
  get mainComment() {
    return this.recipeCommentForm.get("mainComment");
  }
  onUpdate() {
    const value: Recipe = Object.assign({}, this.recipeCommentForm.value);
    const valid: boolean = this.recipeCommentForm.valid;
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
    const value: Recipe = Object.assign({}, this.recipeCommentForm.value);
    const valid: boolean = this.recipeCommentForm.valid;
    if (!valid) {
      this.messageService.showFormError();
    } else {
      // Add new client to firestore
      this.recipesService.addRecipeData(this.id, value);
      this.router.navigate([`/recipes/${this.id}`]);
    }
  }
}
