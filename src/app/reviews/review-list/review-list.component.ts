import { Component, OnInit } from "@angular/core";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { ReviewsService } from "src/app/core/services/reviews.service";
import { Review } from "src/app/shared/models/Review";
import { AuthService } from "src/app/core/auth/auth.service";

@Component({
  selector: "app-review-list",
  templateUrl: "./review-list.component.html",
  styleUrls: ["./review-list.component.scss"]
})
export class ReviewListComponent implements OnInit {
  isAuth: boolean;
  reviews: Review[];
  introText: string =
    "Looking for reviews? You've found just the place! Restaurants, cafes, bars... all tried and tested";
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
}
