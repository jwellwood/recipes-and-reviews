import { AuthGuard } from "../core/guards/auth.guard";
import { Routes } from "@angular/router";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { AddRecipeDetailsComponent } from "./forms/add-recipe-details/add-recipe-details.component";
import { AddRecipeCommentComponent } from "./forms/add-recipe-comment/add-recipe-comment.component";
import { AddRecipeIngredientsComponent } from "./forms/add-recipe-ingredients/add-recipe-ingredients.component";
import { AddRecipeStepsComponent } from "./forms/add-recipe-steps/add-recipe-steps.component";

export const routes: Routes = [
  {
    path: ":id/edit-details",
    component: AddRecipeDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":id/add-comment",
    component: AddRecipeCommentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":id/add-ingredients",
    component: AddRecipeIngredientsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":id/add-steps",
    component: AddRecipeStepsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "add-recipe",
    component: AddRecipeDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":id",
    component: RecipeComponent
  },
  { path: "", component: RecipeListComponent }
];
