import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { ReviewsService } from "src/app/services/reviews.service";
import { Review } from "src/app/models/Review";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-add-review-comment",
  templateUrl: "./add-review-comment.component.html",
  styleUrls: ["./add-review-comment.component.scss"]
})
export class AddReviewCommentComponent implements OnInit {
  id: string;
  isUpdate: boolean = false;
  reviewCommentForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private reviewsService: ReviewsService,
    private flashMessage: FlashMessagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.reviewCommentForm = this.createFormGroup(this.fb);
    this.route.params
      .pipe(
        switchMap((params: Params) => this.reviewsService.getReview(this.id))
      )
      .subscribe((review: Review) => {
        if (review.tagLine || review.mainComment) {
          this.isUpdate = true;
          this.reviewCommentForm.patchValue({
            tagLine: review.tagLine,
            mainComment: review.mainComment
          });
        }
      });
  }
  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      tagLine: ["", [Validators.required, Validators.maxLength(100)]],
      mainComment: ["", [Validators.required, Validators.maxLength(5000)]]
    });
  }
  get tagLine() {
    return this.reviewCommentForm.get("tagLine");
  }
  get mainComment() {
    return this.reviewCommentForm.get("mainComment");
  }
  onUpdate() {
    const value: Review = Object.assign({}, this.reviewCommentForm.value);
    const valid: boolean = this.reviewCommentForm.valid;
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
    const value: Review = Object.assign({}, this.reviewCommentForm.value);
    const valid: boolean = this.reviewCommentForm.valid;
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
      this.reviewsService.addReviewData(this.id, value);
      this.router.navigate([`/reviews/${this.id}`]);
    }
  }
}
