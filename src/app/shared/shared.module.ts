import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
// Externals
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CarouselModule } from "ngx-carousel-lib";
import { ModalModule } from "ngx-bootstrap/modal";
import { FlashMessagesModule } from "angular2-flash-messages";
// Pipes
import { GetRatingPipe } from "./pipes/get-rating.pipe";
// Pages
import { AboutComponent } from "./pages/about/about.component";
import { LandingComponent } from "./pages/landing/landing.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
// Shared Components
import { CardTitleComponent } from "./components/card-title/card-title.component";
import { JumbotronComponent } from "./components/jumbotron/jumbotron.component";
import { TaglineComponent } from "./components/tagline/tagline.component";
import { MainImageComponent } from "./components/main-image/main-image.component";
import { MainCommentComponent } from "./components/main-comment/main-comment.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { CardFooterComponent } from "./components/card-footer/card-footer.component";
// Util Components
import { AddButtonComponent } from "./utils/add-button/add-button.component";
import { BackButtonComponent } from "./utils/back-button/back-button.component";
import { EditButtonsComponent } from "./utils/edit-buttons/edit-buttons.component";
import { SubmitButtonComponent } from "./utils/submit-button/submit-button.component";
import { InputButtonsComponent } from "./utils/input-buttons/input-buttons.component";
import { ImagePlaceholderComponent } from "./utils/image-placeholder/image-placeholder.component";
import { InputWrapperComponent } from "./utils/input-wrapper/input-wrapper.component";
import { ControlMessagesComponent } from "./utils/control-messages/control-messages.component";
import { FormLabelComponent } from "./utils/form-label/form-label.component";
import { FormWrapperComponent } from "./utils/form-wrapper/form-wrapper.component";
import { SubtitleComponent } from "./utils/subtitle/subtitle.component";
import { SpinnerComponent } from "./utils/spinner/spinner.component";

@NgModule({
  declarations: [
    GetRatingPipe,
    CardFooterComponent,
    CardTitleComponent,
    CarouselComponent,
    JumbotronComponent,
    MainCommentComponent,
    MainImageComponent,
    NotFoundComponent,
    TaglineComponent,
    AddButtonComponent,
    BackButtonComponent,
    ControlMessagesComponent,
    EditButtonsComponent,
    FormLabelComponent,
    FormWrapperComponent,
    ImagePlaceholderComponent,
    InputButtonsComponent,
    InputWrapperComponent,
    SpinnerComponent,
    SubmitButtonComponent,
    SubtitleComponent,
    LandingComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FlashMessagesModule,
    CarouselModule,
    ModalModule.forRoot()
  ],
  exports: [
    // Pipes
    GetRatingPipe,
    // Modules
    CommonModule,
    ModalModule,
    ReactiveFormsModule,
    // Pages
    LandingComponent,
    AboutComponent,
    NotFoundComponent,
    // Components
    CardTitleComponent,
    CardFooterComponent,
    CarouselComponent,
    JumbotronComponent,
    MainCommentComponent,
    MainImageComponent,
    TaglineComponent,
    AddButtonComponent,
    BackButtonComponent,
    ControlMessagesComponent,
    EditButtonsComponent,
    FormLabelComponent,
    FormWrapperComponent,
    ImagePlaceholderComponent,
    InputButtonsComponent,
    InputWrapperComponent,
    SubmitButtonComponent,
    SubtitleComponent,
    SpinnerComponent
  ]
})
export class SharedModule {}
