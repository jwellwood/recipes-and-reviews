import { Component, OnInit } from "@angular/core";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { ReviewsService } from "src/app/services/reviews.service";
import { Review } from "src/app/models/Review";
import { AuthService } from "src/app/services/auth.service";
import { GetRatingPipe } from "src/app/pipes/get-rating.pipe";

@Component({
  selector: "app-reviews",
  templateUrl: "./reviews.component.html",
  styleUrls: ["./reviews.component.scss"]
})
export class ReviewsComponent implements OnInit {
  isAuth: boolean;
  reviews: Review[];
  // Icons
  leaf = faLeaf;
  defaultImg: string = "../../../../../../assets/images/placeholder.png";

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
    });
  }

  getOverallRating(review: Review) {
    console.log("getting");
    const scores = review.ratings.map(rating => +rating.score);
    return scores.reduce((acc, cur) => acc + cur, 0) / review.ratings.length;
  }
}
