import { AuthGuard } from "../../core/guards/auth.guard";
import { Routes } from "@angular/router";
// Components
import { AddRecipeDetailsComponent } from "./add-recipe-details/add-recipe-details.component";
import { AddRecipeCommentComponent } from "./add-recipe-comment/add-recipe-comment.component";
import { AddRecipeIngredientsComponent } from "./add-recipe-ingredients/add-recipe-ingredients.component";
import { AddRecipeStepsComponent } from "./add-recipe-steps/add-recipe-steps.component";
import { AddRecipeImageComponent } from "./add-recipe-image/add-recipe-image.component";
import { AddRecipeGalleryComponent } from "./add-recipe-gallery/add-recipe-gallery.component";
import { RemoveImageComponent } from "src/app/shared/utils/remove-image/remove-image.component";

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
    path: ":id/add-image",
    component: AddRecipeImageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":id/add-gallery",
    component: AddRecipeGalleryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":id/edit-gallery",
    component: RemoveImageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "add-recipe",
    component: AddRecipeDetailsComponent,
    canActivate: [AuthGuard]
  }
];
