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
import { ModalModule } from "ngx-bootstrap/modal";
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
import { RecipeCardFooterComponent } from "./components/recipe/recipe-card-footer/recipe-card-footer.component";
import { RecipeAvatarsComponent } from "./components/recipe/recipe-avatars/recipe-avatars.component";
import { AddRecipeDetailsComponent } from "./components/recipe/forms/add-recipe-details/add-recipe-details.component";
import { AddRecipeCommentComponent } from "./components/recipe/forms/add-recipe-comment/add-recipe-comment.component";
// Reviews
import { ReviewsComponent } from "./components/review/reviews/reviews.component";
import { ReviewDetailsComponent } from "./components/review/review-details/review-details.component";
import { ReviewRatingsComponent } from "./components/review/review-ratings/review-ratings.component";
import { AddReviewRatingsComponent } from "./components/review/forms/add-review-ratings/add-review-ratings.component";
import { AddReviewDetailsComponent } from "./components/review/forms/add-review-details/add-review-details.component";
import { AddReviewCommentComponent } from "./components/review/forms/add-review-comment/add-review-comment.component";
// Common
import { CarouselComponent } from "./components/common/carousel/carousel.component";
import { JumbotronComponent } from "./components/common/jumbotron/jumbotron.component";
import { TaglineComponent } from "./components/common/tagline/tagline.component";
import { CardTitleComponent } from "./components/common/card-title/card-title.component";
import { CardFooterComponent } from "./components/common/card-footer/card-footer.component";
import { MainCommentComponent } from "./components/common/main-comment/main-comment.component";
// Utils
import { BackButtonComponent } from "./components/utils/back-button/back-button.component";
import { EditButtonsComponent } from "./components/utils/edit-buttons/edit-buttons.component";
import { SpinnerComponent } from "./components/utils/spinner/spinner.component";
import { AddButtonComponent } from "./components/utils/add-button/add-button.component";
import { LoginComponent } from "./components/login/login.component";
import { ControlMessagesComponent } from "./components/utils/control-messages/control-messages.component";
import { FormLabelComponent } from "./components/utils/form-label/form-label.component";
import { FormWrapperComponent } from "./components/utils/form-wrapper/form-wrapper.component";
import { AddReviewImageComponent } from "./components/review/forms/add-review-image/add-review-image.component";
import { AddReviewGalleryComponent } from "./components/review/forms/add-review-gallery/add-review-gallery.component";
import { AddRecipeIngredientsComponent } from "./components/recipe/forms/add-recipe-ingredients/add-recipe-ingredients.component";
import { IngredientsListComponent } from "./components/recipe/ingredients-list/ingredients-list.component";
import { InputWrapperComponent } from "./components/utils/input-wrapper/input-wrapper.component";
import { SubmitButtonComponent } from "./components/utils/submit-button/submit-button.component";
import { AddRecipeStepsComponent } from "./components/recipe/forms/add-recipe-steps/add-recipe-steps.component";
import { InputButtonsComponent } from "./components/utils/input-buttons/input-buttons.component";
import { StepsListComponent } from "./components/recipe/steps-list/steps-list.component";
import { SubtitleComponent } from "./components/utils/subtitle/subtitle.component";
import { ImagePlaceholderComponent } from "./components/utils/image-placeholder/image-placeholder.component";
import { MainImageComponent } from "./components/common/main-image/main-image.component";
import { SharedModule } from "./shared/shared.module";

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
    MainCommentComponent,
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
    AddRecipeCommentComponent,
    AddReviewImageComponent,
    AddReviewGalleryComponent,
    AddRecipeIngredientsComponent,
    IngredientsListComponent,
    InputWrapperComponent,
    SubmitButtonComponent,
    AddRecipeStepsComponent,
    InputButtonsComponent,
    StepsListComponent,
    SubtitleComponent,
    ImagePlaceholderComponent,
    MainImageComponent
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
    CarouselModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
