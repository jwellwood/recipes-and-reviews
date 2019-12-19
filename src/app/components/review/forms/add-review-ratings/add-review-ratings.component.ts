import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { ReviewsService } from "src/app/services/reviews.service";
import { Review } from "src/app/models/Review";
import { MessagesService } from "src/app/services/messages.service";

@Component({
  selector: "app-add-review-ratings",
  templateUrl: "./add-review-ratings.component.html",
  styleUrls: ["./add-review-ratings.component.scss"]
})
export class AddReviewRatingsComponent implements OnInit {
  id: string;
  isUpdate: boolean = false;
  reviewRatingForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private reviewsService: ReviewsService,
    private messageService: MessagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.reviewRatingForm = this.createFormGroup(this.fb);
    this.route.params
      .pipe(
        switchMap((params: Params) => this.reviewsService.getReview(this.id))
      )
      .subscribe((review: Review) => {
        if (
          review.tasteRating ||
          review.serviceRating ||
          review.atmosphereRating
        ) {
          this.isUpdate = true;
          this.reviewRatingForm.patchValue({
            tasteRating: review.tasteRating,
            serviceRating: review.serviceRating,
            atmosphereRating: review.atmosphereRating,
            tasteComment: review.tasteComment,
            serviceComment: review.serviceComment,
            atmosphereComment: review.atmosphereComment
          });
        }
      });
  }
  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      tasteRating: [
        0,
        [Validators.required, Validators.max(10), Validators.min(0)]
      ],
      serviceRating: [
        0,
        [Validators.required, Validators.max(10), Validators.min(0)]
      ],
      atmosphereRating: [
        0,
        [Validators.required, Validators.max(10), Validators.min(0)]
      ],
      tasteComment: ["", [Validators.maxLength(100)]],
      serviceComment: ["", [Validators.maxLength(100)]],
      atmosphereComment: ["", [Validators.maxLength(100)]]
    });
  }

  get tasteRating() {
    return this.reviewRatingForm.get("tasteRating");
  }
  get serviceRating() {
    return this.reviewRatingForm.get("serviceRating");
  }
  get atmosphereRating() {
    return this.reviewRatingForm.get("atmosphereRating");
  }
  get tasteComment() {
    return this.reviewRatingForm.get("tasteComment");
  }
  get serviceComment() {
    return this.reviewRatingForm.get("serviceComment");
  }
  get atmosphereComment() {
    return this.reviewRatingForm.get("atmosphereComment");
  }

  onUpdate() {
    const value: Review = Object.assign({}, this.reviewRatingForm.value);
    const valid: boolean = this.reviewRatingForm.valid;
    if (!valid) {
      this.messageService.showFormError();
    } else {
      // Add id to client
      value.id = this.id;
      this.reviewsService.updateReview(value);
      this.router.navigate([`/reviews/${this.id}`]);
    }
  }
  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const value: Review = Object.assign({}, this.reviewRatingForm.value);
    const valid: boolean = this.reviewRatingForm.valid;
    if (!valid) {
      this.messageService.showFormError();
    } else {
      // Add new client to firestore
      this.reviewsService.addReviewData(this.id, value);
      this.router.navigate([`/reviews/${this.id}`]);
    }
  }
}
