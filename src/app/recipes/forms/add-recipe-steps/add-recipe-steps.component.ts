import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { switchMap } from "rxjs/operators";
// Internal
import { Recipe } from "src/app/shared/models/Recipe";
import { RecipesService } from "src/app/core/services/recipes.service";
import { MessagesService } from "src/app/core/services/messages.service";

@Component({
  selector: "app-add-recipe-steps",
  templateUrl: "./add-recipe-steps.component.html",
  styleUrls: ["./add-recipe-steps.component.scss"]
})
export class AddRecipeStepsComponent implements OnInit {
  id: string;
  isUpdate: boolean;
  addStepsForm: FormGroup;
  steps: FormArray;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessagesService,
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.addStepsForm = this.formBuilder.group({
      steps: this.formBuilder.array([this.createStepInput()])
    });
    this.route.params
      .pipe(
        switchMap((params: Params) => this.recipesService.getRecipe(this.id))
      )
      .subscribe((recipe: Recipe) => {
        if (
          recipe.steps &&
          this.addStepsForm.get("steps")["controls"].length > 0
        ) {
          this.isUpdate = true;
          this.addStepsForm.setControl(
            "steps",
            this.setExistingSteps(recipe.steps)
          );
        }
      });
  }

  setExistingSteps(stepsArr): FormArray {
    const formArray = new FormArray([]);
    stepsArr.forEach(step => {
      formArray.push(
        this.formBuilder.group({
          title: step.title,
          text: step.text
        })
      );
    });
    return formArray;
  }

  // ****************************** Form and getters ***********************************

  createStepInput(): FormGroup {
    return this.formBuilder.group({
      title: ["", Validators.maxLength(50)],
      text: ["", [Validators.required, Validators.maxLength(150)]]
    });
  }

  get title() {
    return this.addStepsForm.get("title");
  }
  get text() {
    return this.addStepsForm.get("text");
  }

  // ****************************** Event Functions ***********************************

  onUpdate() {
    const value: Recipe = Object.assign({}, this.addStepsForm.value);
    const valid: boolean = this.addStepsForm.valid;
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
    const value: Recipe = Object.assign({}, this.addStepsForm.value);
    const valid: boolean = this.addStepsForm.valid;
    if (!valid) {
      this.messageService.showFormError();
    } else {
      this.recipesService.addRecipeData(this.id, value);
      this.router.navigate([`/recipes/${this.id}`]);
    }
  }

  addField(e: any, index: number): void {
    e.preventDefault();
    this.steps = this.addStepsForm.get("steps") as FormArray;
    this.steps.insert(index + 1, this.createStepInput());
  }

  removeField(e: any, index: number): void {
    e.preventDefault();
    if (index) {
      const inputArray = <FormArray>this.addStepsForm.get("steps");
      inputArray.removeAt(index);
      inputArray.markAsTouched;
      inputArray.markAsDirty;
    }
  }
}
