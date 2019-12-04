import { Component, OnInit, ViewChild } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";
import { ReviewsService } from "src/app/services/reviews.service";
import { Review } from "src/app/models/Review";

@Component({
  selector: "app-add-review",
  templateUrl: "./add-review.component.html",
  styleUrls: ["./add-review.component.scss"]
})
export class AddReviewComponent implements OnInit {
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

  @ViewChild("reviewForm", { static: false }) form: any;

  constructor(
    private reviewsService: ReviewsService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit({ value, valid }: { value: Review; valid: boolean }) {
    if (!valid) {
      // Show message
      this.flashMessagesService.show(
        "There was a problem with the submission, check the fields marked *",
        {
          cssClass: "alert-danger",
          timeout: 4000
        }
      );
    } else {
      // Add new client to firestore
      this.reviewsService.newReview(value);
      // Redirect to dashboard
      this.router.navigate(["/reviews"]);
    }
  }
}
