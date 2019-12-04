import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./components/landing/landing.component";
import { AboutComponent } from "./components/about/about.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { AddReviewComponent } from "./components/add-review/add-review.component";
import { ReviewDetailsComponent } from "./components/review-details/review-details.component";
import { EditReviewComponent } from "./components/edit-review/edit-review.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AddRecipeComponent } from "./components/add-recipe/add-recipe.component";
import { EditRecipeComponent } from "./components/edit-recipe/edit-recipe.component";
import { RecipeDetailsComponent } from "./components/recipe-details/recipe-details.component";

const routes: Routes = [
  {
    path: "",
    component: LandingComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "recipes",
    component: RecipesComponent
  },
  {
    path: "recipes/add-recipe",
    component: AddRecipeComponent
  },
  {
    path: "recipes/edit/:id",
    component: EditRecipeComponent
  },
  {
    path: "recipes/:id",
    component: RecipeDetailsComponent
  },
  {
    path: "reviews",
    component: ReviewsComponent
  },
  {
    path: "reviews/add-review",
    component: AddReviewComponent
  },
  {
    path: "reviews/:id",
    component: ReviewDetailsComponent
  },
  {
    path: "reviews/edit/:id",
    component: EditReviewComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
