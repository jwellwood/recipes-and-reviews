import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FlashMessagesModule } from "angular2-flash-messages";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-carousel-lib";
// Internal imports
// App
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//
import { LandingComponent } from "./components/landing/landing.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NavDropdownComponent } from "./components/nav-dropdown/nav-dropdown.component";
import { AboutComponent } from "./components/about/about.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ErrorMessagesComponent } from "./components/error-messages/error-messages.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
// Recipes
import { RecipesComponent } from "./components/recipes/recipes.component";
import { AddRecipeComponent } from "./components/add-recipe/add-recipe.component";
import { EditRecipeComponent } from "./components/edit-recipe/edit-recipe.component";
import { RecipeDetailsComponent } from "./components/recipe-details/recipe-details.component";
// Reviews
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { AddReviewComponent } from "./components/add-review/add-review.component";
import { ReviewDetailsComponent } from "./components/review-details/review-details.component";
import { EditReviewComponent } from "./components/edit-review/edit-review.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavDropdownComponent,
    FooterComponent,
    SpinnerComponent,
    CarouselComponent,
    ErrorMessagesComponent,
    NotFoundComponent,
    LandingComponent,
    AboutComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    ReviewsComponent,
    ReviewDetailsComponent,
    AddReviewComponent,
    EditReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, "pbponch"),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FlashMessagesModule.forRoot(),
    FontAwesomeModule,
    BsDatepickerModule.forRoot(),
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
