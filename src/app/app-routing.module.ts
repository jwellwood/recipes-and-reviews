import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// App
import { LandingComponent } from "./components/landing/landing.component";
import { AboutComponent } from "./components/about/about.component";
import { NotFoundComponent } from "./components/navigation/not-found/not-found.component";
// Recipes
import { RecipesComponent } from "./components/recipe/recipes/recipes.component";
import { AddRecipeComponent } from "./components/recipe/add-recipe/add-recipe.component";
import { EditRecipeComponent } from "./components/recipe/edit-recipe/edit-recipe.component";
import { RecipeDetailsComponent } from "./components/recipe/recipe-details/recipe-details.component";
// Reviews
import { ReviewsComponent } from "./components/review/reviews/reviews.component";
import { AddReviewComponent } from "./components/review/add-review/add-review.component";
import { ReviewDetailsComponent } from "./components/review/review-details/review-details.component";
import { EditReviewComponent } from "./components/review/edit-review/edit-review.component";

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
