import { Component, OnInit, Output } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Review } from "../../shared/models/Review";
import { ReviewsService } from "src/app/core/services/reviews.service";
import { AuthService } from "src/app/core/auth/auth.service";
import { Rating } from "../../shared/models/Rating";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.scss"]
})
export class ReviewComponent implements OnInit {
  isAuth: boolean;
  id: string;
  review: Review;
  ratings: Rating[];
  buttons: any = [];
  // Icons
  trash = faTrash;

  constructor(
    private reviewsService: ReviewsService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
    this.reviewsService.getReview(this.id).subscribe(review => {
      if (review != null) {
        this.review = review;
        this.buttons = [
          {
            title: "Details",
            link: `/reviews/${this.id}/edit-details`,
            isEdit: review.id ? true : false
          },
          {
            title: "Comment",
            link: `/reviews/${this.id}/add-comment`,
            isEdit: review.mainComment ? true : false
          },
          {
            title: "Ratings",
            link: `/reviews/${this.id}/add-rating`,
            isEdit: review.ratings ? true : false
          },
          {
            title: "Cover Image",
            link: `/reviews/${this.id}/add-image`,
            isEdit: review.mainImage ? true : false
          },
          {
            title: "Gallery",
            link: `/reviews/${this.id}/add-gallery`,
            isEdit: review.imageList ? true : false
          }
        ];
      }
      if (review.ratings) {
        this.ratings = review.ratings.map(rating => ({
          title: rating.title,
          score: rating.score,
          comment: rating.comment
        }));
      }
    });
  }

  onDelete() {
    if (
      confirm(
        "You will lose all data for this review permanently. Are you sure?"
      )
    ) {
      this.reviewsService.deleteReview(this.review);
      this.router.navigate(["/reviews"]);
    }
  }
}
