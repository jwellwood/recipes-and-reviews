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
// Shared Components
import { CardTitleComponent } from "./components/card-title/card-title.component";
import { JumbotronComponent } from "./components/jumbotron/jumbotron.component";
import { TaglineComponent } from "./components/tagline/tagline.component";
import { MainCommentComponent } from "./components/main-comment/main-comment.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { CardFooterComponent } from "./components/card-footer/card-footer.component";
import { FormLabelComponent } from "./components/form-label/form-label.component";
import { SubtitleComponent } from "./components/subtitle/subtitle.component";
// Util Components
import { AddButtonComponent } from "./utils/buttons/add-button/add-button.component";
import { BackButtonComponent } from "./utils/buttons/back-button/back-button.component";
import { EditButtonsComponent } from "./utils/buttons/edit-buttons/edit-buttons.component";
import { SubmitButtonComponent } from "./utils/buttons/submit-button/submit-button.component";
import { InputButtonsComponent } from "./utils/buttons/input-buttons/input-buttons.component";
import { MainImageComponent } from "./utils/images/main-image/main-image.component";
import { MainListImageComponent } from "./utils/images/main-list-image/main-list-image.component";
import { GalleryImageComponent } from "./utils/images/gallery-image/gallery-image.component";
import { FormListImageComponent } from "./utils/images/form-list-image/form-list-image.component";
import { ImagePlaceholderComponent } from "./utils/images/image-placeholder/image-placeholder.component";
import { InputWrapperComponent } from "./utils/wrappers/input-wrapper/input-wrapper.component";
import { ControlMessagesComponent } from "./utils/control-messages/control-messages.component";
import { FormWrapperComponent } from "./utils/wrappers/form-wrapper/form-wrapper.component";
import { SpinnerComponent } from "./utils/spinner/spinner.component";
import { UploaderComponent } from "./utils/images/uploader/uploader.component";
import { RemoveImageComponent } from "./utils/images/remove-image/remove-image.component";
import { PageWrapperComponent } from "./utils/wrappers/page-wrapper/page-wrapper.component";

@NgModule({
  declarations: [
    GetRatingPipe,
    CardFooterComponent,
    CardTitleComponent,
    CarouselComponent,
    JumbotronComponent,
    MainCommentComponent,
    TaglineComponent,
    AddButtonComponent,
    BackButtonComponent,
    ControlMessagesComponent,
    EditButtonsComponent,
    FormLabelComponent,
    FormWrapperComponent,
    InputButtonsComponent,
    InputWrapperComponent,
    SpinnerComponent,
    SubmitButtonComponent,
    SubtitleComponent,
    PageWrapperComponent,
    // Images
    MainImageComponent,
    MainListImageComponent,
    GalleryImageComponent,
    FormListImageComponent,
    UploaderComponent,
    RemoveImageComponent,
    ImagePlaceholderComponent
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
    // Components
    CardTitleComponent,
    CardFooterComponent,
    CarouselComponent,
    JumbotronComponent,
    MainCommentComponent,
    TaglineComponent,
    FormLabelComponent,
    SubtitleComponent,
    // Utils
    AddButtonComponent,
    BackButtonComponent,
    EditButtonsComponent,
    SubmitButtonComponent,
    InputButtonsComponent,
    FormWrapperComponent,
    InputWrapperComponent,
    ControlMessagesComponent,
    SpinnerComponent,
    PageWrapperComponent,
    // Images
    MainImageComponent,
    MainListImageComponent,
    GalleryImageComponent,
    FormListImageComponent,
    UploaderComponent,
    RemoveImageComponent,
    ImagePlaceholderComponent
  ]
})
export class SharedModule {}
