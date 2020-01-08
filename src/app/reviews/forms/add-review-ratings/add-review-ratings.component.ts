import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
// Internal
import { Review } from "src/app/shared/models/Review";
import { ReviewsService } from "src/app/core/services/reviews.service";
import { MessagesService } from "src/app/core/services/messages.service";

@Component({
  selector: "app-add-review-ratings",
  templateUrl: "./add-review-ratings.component.html",
  styleUrls: ["./add-review-ratings.component.scss"]
})
export class AddReviewRatingsComponent implements OnInit {
  id: string;
  isUpdate: boolean;
  addRatingsForm: FormGroup;
  ratings: FormArray;

  constructor(
    public formBuilder: FormBuilder,
    private reviewsService: ReviewsService,
    private messageService: MessagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.addRatingsForm = this.formBuilder.group({
      ratings: this.formBuilder.array([this.createRatingInput()])
    });
    this.route.params
      .pipe(
        switchMap((params: Params) => this.reviewsService.getReview(this.id))
      )
      .subscribe((review: Review) => {
        if (
          review.ratings &&
          this.addRatingsForm.get("ratings")["controls"].length > 0
        ) {
          this.isUpdate = true;
          this.addRatingsForm.setControl(
            "ratings",
            this.setExistingRatings(review.ratings)
          );
        }
      });
  }

  setExistingRatings(ratingsArr): FormArray {
    const formArray = new FormArray([]);
    ratingsArr.forEach(rating => {
      formArray.push(
        this.formBuilder.group({
          title: rating.title,
          score: rating.score,
          comment: rating.comment
        })
      );
    });
    return formArray;
  }

  // ****************************** Form and getters ***********************************

  createRatingInput(): FormGroup {
    return this.formBuilder.group({
      title: ["", [Validators.required, Validators.maxLength(50)]],
      score: [0, [Validators.required, Validators.max(10), Validators.min(0)]],
      comment: ["", Validators.maxLength(150)]
    });
  }

  get title() {
    return this.addRatingsForm.get("title");
  }
  get score() {
    return this.addRatingsForm.get("score");
  }
  get comment() {
    return this.addRatingsForm.get("comment");
  }

  // ****************************** Event functions ***********************************

  onUpdate() {
    // Create a deep copy
    const value: Review = Object.assign({}, this.addRatingsForm.value);
    const valid: boolean = this.addRatingsForm.valid;
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
    const value: Review = Object.assign({}, this.addRatingsForm.value);
    const valid: boolean = this.addRatingsForm.valid;
    if (!valid) {
      this.messageService.showFormError();
    } else {
      this.reviewsService.addReviewData(this.id, value);
      this.router.navigate([`/reviews/${this.id}`]);
    }
  }

  addField(e: any, index: number): void {
    e.preventDefault();
    this.ratings = this.addRatingsForm.get("ratings") as FormArray;
    this.ratings.insert(index + 1, this.createRatingInput());
  }

  removeField(e: any, index: number): void {
    e.preventDefault();
    if (index) {
      const inputArray = <FormArray>this.addRatingsForm.get("ratings");
      inputArray.removeAt(index);
      inputArray.markAsTouched;
      inputArray.markAsDirty;
    }
  }
}
