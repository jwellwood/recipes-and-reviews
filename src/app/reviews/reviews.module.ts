import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./review.routing";
// Externals
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
// Components
import { ReviewComponent } from "./review/review.component";
import { ReviewListComponent } from "./review-list/review-list.component";
import { ReviewRatingsComponent } from "./review-ratings/review-ratings.component";
import { AddReviewCommentComponent } from "./forms/add-review-comment/add-review-comment.component";
import { AddReviewDetailsComponent } from "./forms/add-review-details/add-review-details.component";
import { AddReviewGalleryComponent } from "./forms/add-review-gallery/add-review-gallery.component";
import { AddReviewImageComponent } from "./forms/add-review-image/add-review-image.component";
import { AddReviewRatingsComponent } from "./forms/add-review-ratings/add-review-ratings.component";
// Modules
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ReviewComponent,
    ReviewRatingsComponent,
    ReviewListComponent,
    AddReviewCommentComponent,
    AddReviewDetailsComponent,
    AddReviewGalleryComponent,
    AddReviewImageComponent,
    AddReviewRatingsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    BsDatepickerModule.forRoot()
  ],
  exports: []
})
export class ReviewsModule {}
