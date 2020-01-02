import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./recipe.routing";
// Externals
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
// Components
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { IngredientsListComponent } from "./ingredients-list/ingredients-list.component";
import { RecipeAvatarsComponent } from "./recipe-avatars/recipe-avatars.component";
import { RecipeCardFooterComponent } from "./recipe-card-footer/recipe-card-footer.component";
import { StepsListComponent } from "./steps-list/steps-list.component";
// Modules
import { SharedModule } from "../shared/shared.module";
import { RecipeFormsModule } from "./forms/recipe-forms.module";

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    IngredientsListComponent,
    RecipeAvatarsComponent,
    RecipeCardFooterComponent,
    StepsListComponent
  ],
  imports: [
    RecipeFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  exports: []
})
export class RecipesModule {}
