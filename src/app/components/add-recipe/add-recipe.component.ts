import { Component, OnInit, ViewChild } from "@angular/core";
import { Recipe } from "src/app/models/Recipe";
import { RecipesService } from "src/app/services/recipes.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-recipe",
  templateUrl: "./add-recipe.component.html",
  styleUrls: ["./add-recipe.component.scss"]
})
export class AddRecipeComponent implements OnInit {
  recipe: Recipe = {
    name: "",
    tagLine: "",
    mainComment: "",
    type: "",
    servesNumber: 0,
    healthRating: 0,
    ingredientsTotal: 0,
    prepTime: 0,
    ingredients: []
  };

  pattern = "^(?:[0-9]|0[0-9]|10)$";
  timePattern = "^([1-9][0-9]{0,2})$";

  @ViewChild("recipeForm", { static: false }) form: any;
  constructor(
    private recipesService: RecipesService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit() {}

  onAddIngredient() {}
  onRemoveIngredient() {}
  onAddStep() {}
  onRemoveStep() {}
  onAddPhoto() {}
  onRemovePhoto() {}

  onSubmit({ value, valid }: { value: Recipe; valid: boolean }) {
    if (!valid) {
      // Show message
      this.flashMessagesService.show(
        "There was a problem with the submission, check the fields marked *",
        {
          cssClass: "alert-danger",
          timeout: 4000
        }
      );
    } else {
      // Add new client to firestore
      this.recipesService.newRecipe(value);
      // Redirect to dashboard
      this.router.navigate(["/recipes"]);
    }
  }
}
