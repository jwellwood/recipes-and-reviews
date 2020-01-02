import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { routes } from "./review-forms.routing";
import { AddReviewCommentComponent } from "./add-review-comment/add-review-comment.component";
import { AddReviewDetailsComponent } from "./add-review-details/add-review-details.component";
import { AddReviewGalleryComponent } from "./add-review-gallery/add-review-gallery.component";
import { AddReviewImageComponent } from "./add-review-image/add-review-image.component";
import { AddReviewRatingsComponent } from "./add-review-ratings/add-review-ratings.component";

@NgModule({
  declarations: [
    AddReviewCommentComponent,
    AddReviewDetailsComponent,
    AddReviewGalleryComponent,
    AddReviewImageComponent,
    AddReviewRatingsComponent
  ],
  imports: [
    // CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    BsDatepickerModule.forRoot()
  ]
})
export class ReviewFormsModule {}
