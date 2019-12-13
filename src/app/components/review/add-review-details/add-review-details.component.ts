import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { ReviewsService } from "src/app/services/reviews.service";
import { Review } from "src/app/models/Review";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-add-review-details",
  templateUrl: "./add-review-details.component.html",
  styleUrls: ["./add-review-details.component.scss"]
})
export class AddReviewDetailsComponent implements OnInit {
  id: string;
  isUpdate: boolean = false;
  reviewDetailsForm: FormGroup;
  pattern = "^(?:[0-9]|0[0-9]|10)$";
  bsConfig = {
    isAnimated: true,
    dateInputFormat: "DD-MM-YYYY",
    containerClass: "theme-blue"
  };
  constructor(
    public fb: FormBuilder,
    private reviewsService: ReviewsService,
    private flashMessage: FlashMessagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.reviewDetailsForm = this.createFormGroup(this.fb);
    this.route.params
      .pipe(
        switchMap((params: Params) => this.reviewsService.getReview(this.id))
      )
      .subscribe((review: Review) => {
        if (review) {
          this.isUpdate = true;
          this.reviewDetailsForm.patchValue({
            name: review.name,
            website: review.website,
            dateVisited: review.dateVisited.toDate(),
            city: review.city,
            country: review.country
          });
        }
      });
  }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      website: ["", Validators.maxLength(30)],
      dateVisited: ["", Validators.required],
      city: ["", [Validators.required, Validators.maxLength(20)]],
      country: ["", Validators.maxLength(20)]
    });
  }

  get name() {
    return this.reviewDetailsForm.get("name");
  }
  get website() {
    return this.reviewDetailsForm.get("website");
  }
  get dateVisited() {
    return this.reviewDetailsForm.get("dateVisited");
  }
  get city() {
    return this.reviewDetailsForm.get("city");
  }
  get country() {
    return this.reviewDetailsForm.get("country");
  }

  onUpdate() {
    const value: Review = Object.assign({}, this.reviewDetailsForm.value);
    const valid: boolean = this.reviewDetailsForm.valid;
    if (!valid) {
      this.flashMessage.show("There was a problem with the submission", {
        cssClass: "alert-danger",
        timeout: 4000
      });
    } else {
      // Add id to client
      value.id = this.id;
      this.reviewsService.updateReview(value);
      this.router.navigate([`/reviews/${this.id}`]);
    }
  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const value: Review = Object.assign({}, this.reviewDetailsForm.value);
    const valid: boolean = this.reviewDetailsForm.valid;
    if (!valid) {
      this.flashMessage.show(
        "There was a problem with the submission, check the fields marked *",
        {
          cssClass: "alert-danger",
          timeout: 4000
        }
      );
    } else {
      // Add new client to firestore
      this.reviewsService.newReview(value);
      this.router.navigate(["/reviews"]);
    }
  }
}
