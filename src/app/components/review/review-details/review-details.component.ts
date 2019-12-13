import { Component, OnInit, Output } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Review } from "src/app/models/Review";
import { ReviewsService } from "src/app/services/reviews.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-review-details",
  templateUrl: "./review-details.component.html",
  styleUrls: ["./review-details.component.scss"]
})
export class ReviewDetailsComponent implements OnInit {
  isAuth: boolean;
  id: string;
  review: Review;
  ratings: any = [];
  overallRating: number = 0;
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
        this.ratings = [
          {
            type: "Taste",
            value: review.tasteRating,
            comment: review.tasteComment
          },
          {
            type: "Service",
            value: review.serviceRating,
            comment: review.serviceComment
          },
          {
            type: "Atmosphere",
            value: review.atmosphereRating,
            comment: review.atmosphereComment
          }
        ];
        const allRatings = this.ratings.map(rating => rating.value);
        this.overallRating =
          allRatings.reduce((acc, cur) => acc + cur, 0) / this.ratings.length;
      }
      this.buttons = [
        { title: "details", link: `/reviews/edit/${this.id}` },
        { title: "comment", link: `/reviews/${this.id}/add-comment` },
        { title: "ratings", link: `/reviews/${this.id}/add-rating` }
      ];
    });
  }

  onDelete() {
    if (confirm("Are you sure?")) {
      this.reviewsService.deleteReview(this.review);
      this.router.navigate(["/reviews"]);
    }
  }
}
