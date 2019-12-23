import { Component, OnInit, Output } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Review } from "src/app/models/Review";
import { ReviewsService } from "src/app/services/reviews.service";
import { AuthService } from "src/app/services/auth.service";
import { Rating } from "src/app/models/Rating";

@Component({
  selector: "app-review-details",
  templateUrl: "./review-details.component.html",
  styleUrls: ["./review-details.component.scss"]
})
export class ReviewDetailsComponent implements OnInit {
  isAuth: boolean;
  id: string;
  review: Review;
  ratings: Rating[];
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
      }
      if (review.ratings) {
        this.ratings = review.ratings.map(rating => ({
          title: rating.title,
          score: rating.score,
          comment: rating.comment
        }));
        const allRatings = this.ratings.map(rating => +rating.score);
        this.overallRating =
          allRatings.reduce((acc, cur) => acc + cur, 0) / this.ratings.length;
      }
    });
    this.buttons = [
      { title: "details", link: `/reviews/${this.id}/edit-details` },
      { title: "comment", link: `/reviews/${this.id}/add-comment` },
      { title: "ratings", link: `/reviews/${this.id}/add-rating` },
      { title: "images", link: `/reviews/${this.id}/add-image` },
      { title: "gallery", link: `/reviews/${this.id}/add-gallery` }
    ];
  }

  onDelete() {
    if (confirm("Are you sure?")) {
      this.reviewsService.deleteReview(this.review);
      this.router.navigate(["/reviews"]);
    }
  }
}
