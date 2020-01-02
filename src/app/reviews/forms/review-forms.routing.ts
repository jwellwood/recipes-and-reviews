import { AuthGuard } from "../../core/guards/auth.guard";
import { Routes } from "@angular/router";
// Components
import { AddReviewDetailsComponent } from "./add-review-details/add-review-details.component";
import { AddReviewCommentComponent } from "./add-review-comment/add-review-comment.component";
import { AddReviewRatingsComponent } from "./add-review-ratings/add-review-ratings.component";
import { AddReviewImageComponent } from "./add-review-image/add-review-image.component";
import { AddReviewGalleryComponent } from "./add-review-gallery/add-review-gallery.component";

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
  }
];
