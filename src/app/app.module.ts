import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
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
import { AngularFireStorageModule } from "@angular/fire/storage";

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
import { RecipeDetailsComponent } from "./components/recipe/recipe-details/recipe-details.component";
import { RecipeCardFooterComponent } from "./components/utils/recipe-card-footer/recipe-card-footer.component";
import { RecipeAvatarsComponent } from "./components/utils/recipe-avatars/recipe-avatars.component";
import { AddRecipeDetailsComponent } from "./components/recipe/add-recipe-details/add-recipe-details.component";
import { AddRecipeCommentComponent } from "./components/recipe/add-recipe-comment/add-recipe-comment.component";
// Reviews
import { ReviewsComponent } from "./components/review/reviews/reviews.component";
import { ReviewDetailsComponent } from "./components/review/review-details/review-details.component";
import { ReviewRatingsComponent } from "./components/utils/review-ratings/review-ratings.component";
import { AddReviewRatingsComponent } from "./components/review/add-review-ratings/add-review-ratings.component";
import { AddReviewDetailsComponent } from "./components/review/add-review-details/add-review-details.component";
import { AddReviewCommentComponent } from "./components/review/add-review-comment/add-review-comment.component";
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
import { AddButtonComponent } from "./components/utils/add-button/add-button.component";
import { LoginComponent } from "./components/login/login.component";
import { ControlMessagesComponent } from "./components/utils/control-messages/control-messages.component";
import { FormLabelComponent } from "./components/utils/form-label/form-label.component";
import { FormWrapperComponent } from "./components/utils/form-wrapper/form-wrapper.component";

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
    RecipeCardFooterComponent,
    RecipeAvatarsComponent,
    // Reviews
    ReviewsComponent,
    ReviewDetailsComponent,
    AddReviewRatingsComponent,
    AddReviewDetailsComponent,
    AddReviewCommentComponent,
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
    EditButtonsComponent,
    BackButtonComponent,
    AddButtonComponent,
    LoginComponent,
    ControlMessagesComponent,
    FormLabelComponent,
    FormWrapperComponent,
    AddRecipeDetailsComponent,
    AddRecipeCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, "pbponch"),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
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
