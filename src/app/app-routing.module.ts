import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// App
import { LandingComponent } from "./components/landing/landing.component";
import { AboutComponent } from "./components/about/about.component";
import { NotFoundComponent } from "./components/navigation/not-found/not-found.component";
import { LoginComponent } from "./components/login/login.component";
// Recipes
import { RecipesComponent } from "./components/recipe/recipes/recipes.component";
import { RecipeDetailsComponent } from "./components/recipe/recipe-details/recipe-details.component";
import { AddRecipeDetailsComponent } from "./components/recipe/add-recipe-details/add-recipe-details.component";
import { AddRecipeCommentComponent } from "./components/recipe/add-recipe-comment/add-recipe-comment.component";
// Reviews
import { ReviewsComponent } from "./components/review/reviews/reviews.component";
import { ReviewDetailsComponent } from "./components/review/review-details/review-details.component";
import { AddReviewDetailsComponent } from "./components/review/add-review-details/add-review-details.component";
import { AddReviewCommentComponent } from "./components/review/add-review-comment/add-review-comment.component";
import { AddReviewRatingsComponent } from "./components/review/add-review-ratings/add-review-ratings.component";
// Guard
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "recipes/edit/:id",
    component: AddRecipeDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "recipes/:id/add-comment",
    component: AddRecipeCommentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "reviews/:id/add-comment",
    component: AddReviewCommentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "reviews/:id/add-rating",
    component: AddReviewRatingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "reviews/edit/:id",
    component: AddReviewDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "recipes/add-recipe",
    component: AddRecipeDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "recipes/:id",
    component: RecipeDetailsComponent
  },
  {
    path: "reviews/add-review",
    component: AddReviewDetailsComponent,
    pathMatch: "full",
    canActivate: [AuthGuard]
  },
  {
    path: "reviews/:id",
    component: ReviewDetailsComponent
  },
  // Main base routes
  {
    path: "reviews",
    component: ReviewsComponent
  },
  {
    path: "recipes",
    component: RecipesComponent
  },
  // General routes
  { path: "login", component: LoginComponent },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "",
    component: LandingComponent
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
