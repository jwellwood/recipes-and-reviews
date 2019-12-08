import { Component, OnInit } from "@angular/core";
import { ReviewsService } from "src/app/services/reviews.service";
import { Review } from "src/app/models/Review";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-reviews",
  templateUrl: "./reviews.component.html",
  styleUrls: ["./reviews.component.scss"]
})
export class ReviewsComponent implements OnInit {
  leaf = faLeaf;
  reviews: Review[];
  overallRating: number = null;
  constructor(private reviewsService: ReviewsService) {}

  ngOnInit() {
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
