import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
// import { ReactiveFormsModule } from "@angular/forms";
import { routes } from "./recipe-forms.routing";
import { SharedModule } from "src/app/shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AddRecipeDetailsComponent } from "./add-recipe-details/add-recipe-details.component";
import { AddRecipeCommentComponent } from "./add-recipe-comment/add-recipe-comment.component";
import { AddRecipeIngredientsComponent } from "./add-recipe-ingredients/add-recipe-ingredients.component";
import { AddRecipeStepsComponent } from "./add-recipe-steps/add-recipe-steps.component";
import { AddRecipeImageComponent } from "./add-recipe-image/add-recipe-image.component";
import { AddRecipeGalleryComponent } from './add-recipe-gallery/add-recipe-gallery.component';

@NgModule({
  declarations: [
    AddRecipeDetailsComponent,
    AddRecipeCommentComponent,
    AddRecipeIngredientsComponent,
    AddRecipeStepsComponent,
    AddRecipeImageComponent,
    AddRecipeGalleryComponent
  ],
  imports: [
    // CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ]
})
export class RecipeFormsModule {}
