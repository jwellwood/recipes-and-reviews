import { Component, OnInit } from "@angular/core";
import { ReviewsService } from "src/app/services/reviews.service";
import { Review } from "src/app/models/Review";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: "app-reviews",
  templateUrl: "./reviews.component.html",
  styleUrls: ["./reviews.component.scss"]
})
export class ReviewsComponent implements OnInit {
  leaf = faLeaf;
  isAuth: boolean;
  reviews: Review[];
  overallRating: number = null;
  constructor(
    private reviewsService: ReviewsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
    this.reviewsService.getReviews().subscribe(reviews => {
      this.reviews = reviews;
      if (reviews != null) {
        reviews.map(review => {
          this.overallRating =
            (review.tasteRating +
              review.serviceRating +
              review.atmosphereRating) /
            3;
        });
      }
    });
  }
}
