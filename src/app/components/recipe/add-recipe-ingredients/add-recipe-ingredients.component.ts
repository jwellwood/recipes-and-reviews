import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";
import { RecipesService } from "src/app/services/recipes.service";
import { Recipe } from "src/app/models/Recipe";
import { MessagesService } from "src/app/services/messages.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-add-recipe-ingredients",
  templateUrl: "./add-recipe-ingredients.component.html",
  styleUrls: ["./add-recipe-ingredients.component.scss"]
})
export class AddRecipeIngredientsComponent implements OnInit {
  id: string;
  isUpdate: boolean;
  addIngredientsForm: FormGroup;
  ingredients: FormArray;
  // Icons
  minus = faMinusCircle;
  plus = faPlusCircle;
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessagesService,
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.addIngredientsForm = this.formBuilder.group({
      ingredients: this.formBuilder.array([this.createIngredientInput()])
    });
    this.route.params
      .pipe(
        switchMap((params: Params) => this.recipesService.getRecipe(this.id))
      )
      .subscribe((recipe: Recipe) => {
        if (
          recipe.ingredients &&
          this.addIngredientsForm.get("ingredients")["controls"].length > 0
        ) {
          this.isUpdate = true;
          this.addIngredientsForm.setControl(
            "ingredients",
            this.setExistingIngredients(recipe.ingredients)
          );
        }
      });
  }

  setExistingIngredients(ingredientsArr): FormArray {
    const formArray = new FormArray([]);
    ingredientsArr.forEach(ing => {
      formArray.push(
        this.formBuilder.group({
          name: ing.name,
          quantity: ing.quantity
        })
      );
    });
    return formArray;
  }

  createIngredientInput(): FormGroup {
    return this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      quantity: ["", [Validators.required, Validators.maxLength(50)]]
    });
  }

  get name() {
    return this.addIngredientsForm.get("name");
  }
  get type() {
    return this.addIngredientsForm.get("quantity");
  }

  onUpdate() {
    const value: Recipe = Object.assign({}, this.addIngredientsForm.value);
    const valid: boolean = this.addIngredientsForm.valid;
    console.log(value);
    if (!valid) {
      this.messageService.showFormError();
    } else {
      value.id = this.id;
      this.recipesService.updateRecipe(value);
      this.router.navigate([`/recipes/${this.id}`]);
    }
  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const value: Recipe = Object.assign({}, this.addIngredientsForm.value);
    const valid: boolean = this.addIngredientsForm.valid;
    if (!valid) {
      this.messageService.showFormError();
    } else {
      this.recipesService.addRecipeData(this.id, value);
      this.router.navigate([`/recipes/${this.id}`]);
    }
  }

  addField(e: any, index: number): void {
    e.preventDefault();
    this.ingredients = this.addIngredientsForm.get("ingredients") as FormArray;
    this.ingredients.insert(index + 1, this.createIngredientInput());
  }

  removeField(e: any, index: number): void {
    e.preventDefault();
    if (index) {
      const inputArray = <FormArray>this.addIngredientsForm.get("ingredients");
      inputArray.removeAt(index);
      inputArray.markAsTouched;
      inputArray.markAsDirty;
    }
  }
}
