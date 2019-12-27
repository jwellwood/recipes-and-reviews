import { AuthGuard } from "../core/guards/auth.guard";
import { Routes } from "@angular/router";
import { ReviewListComponent } from "./review-list/review-list.component";
import { ReviewComponent } from "./review/review.component";
import { AddReviewDetailsComponent } from "./forms/add-review-details/add-review-details.component";
import { AddReviewCommentComponent } from "./forms/add-review-comment/add-review-comment.component";
import { AddReviewRatingsComponent } from "./forms/add-review-ratings/add-review-ratings.component";
import { AddReviewImageComponent } from "./forms/add-review-image/add-review-image.component";
import { AddReviewGalleryComponent } from "./forms/add-review-gallery/add-review-gallery.component";

export const routes: Routes = [
  {
    path: ":id/add-comment",
    component: AddReviewCommentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":id/add-rating",
    component: AddReviewRatingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":id/add-image",
    component: AddReviewImageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":id/add-gallery",
    component: AddReviewGalleryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":id/edit-details",
    component: AddReviewDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "add-review",
    component: AddReviewDetailsComponent,
    pathMatch: "full",
    canActivate: [AuthGuard]
  },
  {
    path: ":id",
    component: ReviewComponent
  },
  { path: "", component: ReviewListComponent }
];
