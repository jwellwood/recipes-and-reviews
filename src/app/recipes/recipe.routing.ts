import { Routes } from "@angular/router";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeComponent } from "./recipe/recipe.component";

export const routes: Routes = [
  {
    path: ":id",
    component: RecipeComponent
  },
  { path: "", component: RecipeListComponent }
];
