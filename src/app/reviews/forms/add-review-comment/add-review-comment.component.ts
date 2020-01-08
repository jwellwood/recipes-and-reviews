import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
// Internal
import { Review } from "src/app/shared/models/Review";
import { ReviewsService } from "src/app/core/services/reviews.service";
import { MessagesService } from "src/app/core/services/messages.service";

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
    private messageService: MessagesService,
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
  // ****************************** Form and getters ***********************************

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      tagLine: ["", [Validators.required, Validators.maxLength(150)]],
      mainComment: ["", [Validators.required, Validators.maxLength(2000)]]
    });
  }
  get tagLine() {
    return this.reviewCommentForm.get("tagLine");
  }
  get mainComment() {
    return this.reviewCommentForm.get("mainComment");
  }
  // ****************************** Event Functions ***********************************

  onUpdate() {
    // Create a deep copy
    const value: Review = Object.assign({}, this.reviewCommentForm.value);
    const valid: boolean = this.reviewCommentForm.valid;
    if (!valid) {
      this.messageService.showFormError();
    } else {
      value.id = this.id;
      this.reviewsService.updateReview(value);
      this.router.navigate([`/reviews/${this.id}`]);
    }
  }
  onSubmit() {
    // Create a deep copy
    const value: Review = Object.assign({}, this.reviewCommentForm.value);
    const valid: boolean = this.reviewCommentForm.valid;
    if (!valid) {
      this.messageService.showFormError();
    } else {
      this.reviewsService.addReviewData(this.id, value);
      this.router.navigate([`/reviews/${this.id}`]);
    }
  }
}
