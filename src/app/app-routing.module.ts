import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// App
import { LandingComponent } from "./shared/pages/landing/landing.component";
import { AboutComponent } from "./shared/pages/about/about.component";
import { NotFoundComponent } from "./shared/pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: "reviews",
    loadChildren: () =>
      import("./reviews/reviews.module").then(m => m.ReviewsModule)
  },
  {
    path: "recipes",
    loadChildren: () =>
      import("./recipes/recipes.module").then(m => m.RecipesModule)
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
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
