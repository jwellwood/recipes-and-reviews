import { Component, OnInit } from "@angular/core";
import { Review } from "src/app/models/Review";
import { ReviewsService } from "src/app/services/reviews.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-edit-review",
  templateUrl: "./edit-review.component.html",
  styleUrls: ["./edit-review.component.scss"]
})
export class EditReviewComponent implements OnInit {
  id: string;
  review: Review = {
    name: "",
    website: "",
    dateOfReview: "",
    dateVisited: null,
    // Location
    city: "",
    country: "",
    // Comments
    tagLine: "",
    mainComment: "",
    tasteComment: "",
    serviceComment: "",
    atmosphereComment: "",
    // Ratings
    tasteRating: 0,
    serviceRating: 0,
    atmosphereRating: 0
  };

  pattern = "^(?:[0-9]|0[0-9]|10)$";

  constructor(
    private reviewsService: ReviewsService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.reviewsService.getReview(this.id).subscribe(review => {
      if (review != null) {
        this.review = review;
        this.review.dateVisited = review.dateVisited.toDate();
      }
    });
  }

  onSubmit({ value, valid }: { value: Review; valid: boolean }) {
    if (!valid) {
      // Show message
      this.flashMessage.show("There was a problem with the submission", {
        cssClass: "alert-danger",
        timeout: 4000
      });
    } else {
      // Add id to client
      value.id = this.id;
      // update client
      this.reviewsService.updateReview(value);
      this.router.navigate([`/reviews/${this.id}`]);
    }
  }
}
