import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
// Externals
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
// Components
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { AddRecipeCommentComponent } from "./forms/add-recipe-comment/add-recipe-comment.component";
import { AddRecipeDetailsComponent } from "./forms/add-recipe-details/add-recipe-details.component";
import { AddRecipeIngredientsComponent } from "./forms/add-recipe-ingredients/add-recipe-ingredients.component";
import { AddRecipeStepsComponent } from "./forms/add-recipe-steps/add-recipe-steps.component";
import { IngredientsListComponent } from "./ingredients-list/ingredients-list.component";
import { RecipeAvatarsComponent } from "./recipe-avatars/recipe-avatars.component";
import { RecipeCardFooterComponent } from "./recipe-card-footer/recipe-card-footer.component";
import { StepsListComponent } from "./steps-list/steps-list.component";
// Modules
import { SharedModule } from "../shared/shared.module";
import { routes } from "./recipe.routing";

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    AddRecipeDetailsComponent,
    AddRecipeCommentComponent,
    AddRecipeIngredientsComponent,
    AddRecipeStepsComponent,
    IngredientsListComponent,
    RecipeAvatarsComponent,
    RecipeCardFooterComponent,
    StepsListComponent
  ],
  imports: [SharedModule, RouterModule.forChild(routes), FontAwesomeModule],
  exports: []
})
export class RecipesModule {}
