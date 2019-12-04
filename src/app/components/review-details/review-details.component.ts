import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Review } from "src/app/models/Review";
import { ReviewsService } from "src/app/services/reviews.service";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-review-details",
  templateUrl: "./review-details.component.html",
  styleUrls: ["./review-details.component.scss"]
})
export class ReviewDetailsComponent implements OnInit {
  id: string;
  review: Review;
  ratings: any = [];
  overallRating: number = 0;

  trash = faTrash;

  constructor(
    private reviewsService: ReviewsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
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
    });
  }

  onDelete() {
    if (confirm("Are you sure?")) {
      this.reviewsService.deleteReview(this.review);
      this.router.navigate(["/reviews"]);
    }
  }
}
