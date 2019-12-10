import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { environment } from "../environments/environment";
import { FlashMessagesModule } from "angular2-flash-messages";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-carousel-lib";
// Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

// Internal imports
// App
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingComponent } from "./components/landing/landing.component";
import { AboutComponent } from "./components/about/about.component";
// Navs
import { NavbarComponent } from "./components/navigation/navbar/navbar.component";
import { NavDropdownComponent } from "./components/navigation/nav-dropdown/nav-dropdown.component";
import { FooterComponent } from "./components/navigation/footer/footer.component";
import { NotFoundComponent } from "./components/navigation/not-found/not-found.component";
// Recipes
import { RecipesComponent } from "./components/recipe/recipes/recipes.component";
import { AddRecipeComponent } from "./components/recipe/add-recipe/add-recipe.component";
import { EditRecipeComponent } from "./components/recipe/edit-recipe/edit-recipe.component";
import { RecipeDetailsComponent } from "./components/recipe/recipe-details/recipe-details.component";
import { RecipeCardFooterComponent } from "./components/recipe/recipe-card-footer/recipe-card-footer.component";
import { RecipeAvatarsComponent } from "./components/recipe/recipe-avatars/recipe-avatars.component";
// Reviews
import { ReviewsComponent } from "./components/review/reviews/reviews.component";
import { AddReviewComponent } from "./components/review/add-review/add-review.component";
import { ReviewDetailsComponent } from "./components/review/review-details/review-details.component";
import { EditReviewComponent } from "./components/review/edit-review/edit-review.component";
import { ReviewRatingsComponent } from "./components/review/review-ratings/review-ratings.component";
// Common
import { CarouselComponent } from "./components/common/carousel/carousel.component";
import { JumbotronComponent } from "./components/common/jumbotron/jumbotron.component";
import { TaglineComponent } from "./components/common/tagline/tagline.component";
import { CardTitleComponent } from "./components/common/card-title/card-title.component";
import { CardFooterComponent } from "./components/common/card-footer/card-footer.component";
import { MainImageCommentComponent } from "./components/common/main-image-comment/main-image-comment.component";
// Utils
import { BackButtonComponent } from "./components/utils/back-button/back-button.component";
import { EditButtonsComponent } from "./components/utils/edit-buttons/edit-buttons.component";
import { SpinnerComponent } from "./components/utils/spinner/spinner.component";
import { ErrorMessagesComponent } from "./components/utils/error-messages/error-messages.component";
import { AddButtonComponent } from "./components/utils/add-button/add-button.component";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
  declarations: [
    // App
    AppComponent,
    LandingComponent,
    AboutComponent,
    // Nav
    NavbarComponent,
    NavDropdownComponent,
    FooterComponent,
    NotFoundComponent,
    // Recipes
    RecipesComponent,
    RecipeDetailsComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    RecipeCardFooterComponent,
    RecipeAvatarsComponent,
    // Reviews
    ReviewsComponent,
    ReviewDetailsComponent,
    AddReviewComponent,
    EditReviewComponent,
    ReviewRatingsComponent,
    // Common (recipes and reviews)
    CarouselComponent,
    JumbotronComponent,
    MainImageCommentComponent,
    TaglineComponent,
    CardTitleComponent,
    CardFooterComponent,
    // Utils
    SpinnerComponent,
    ErrorMessagesComponent,
    EditButtonsComponent,
    BackButtonComponent,
    AddButtonComponent,
    LoginComponent
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
