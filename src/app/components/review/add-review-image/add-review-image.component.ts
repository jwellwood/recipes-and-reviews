import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { switchMap, finalize } from "rxjs/operators";
import { ReviewsService } from "src/app/services/reviews.service";
import { Review } from "src/app/models/Review";
import { AngularFireStorage } from "@angular/fire/storage";
import { MessagesService } from "src/app/services/messages.service";

@Component({
  selector: "app-add-review-image",
  templateUrl: "./add-review-image.component.html",
  styleUrls: ["./add-review-image.component.scss"]
})
export class AddReviewImageComponent implements OnInit {
  id: string;
  isUpdate: boolean = false;
  reviewImageForm: FormGroup;
  imgSrc: string = "../../../../assets/images/placeholder.png";
  selectedImage: any = null;
  isSubmitted: boolean = false;

  constructor(
    public fb: FormBuilder,
    private reviewsService: ReviewsService,
    private messageService: MessagesService,
    private route: ActivatedRoute,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.reviewImageForm = this.createFormGroup(this.fb);
    this.route.params
      .pipe(
        switchMap((params: Params) => this.reviewsService.getReview(this.id))
      )
      .subscribe((review: Review) => {
        console.log(review);
        if (review.mainImage) {
          this.isUpdate = true;
          this.imgSrc = review.mainImage;
        }
      });
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = "../../../../assets/images/placeholder.png";
      this.selectedImage = null;
    }
  }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      mainImage: ["", [Validators.required]]
    });
  }
  get mainImage() {
    return this.reviewImageForm.get("mainImage");
  }

  onSubmit() {
    this.isSubmitted = true;
    // Create a deep copy of the form-model
    let value: Review = Object.assign({}, this.reviewImageForm.value);
    const valid: boolean = this.reviewImageForm.valid;
    if (!valid) {
      this.messageService.showFormError();
    } else {
      // Create file path and file ref
      const filePath = `reviews/${this.id}/${
        this.selectedImage.name
      }_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      // Upload the file
      this.storage
        .upload(filePath, this.selectedImage)
        .snapshotChanges()
        .pipe(
          // Once uploaded, save it to database (per docs on angularfire)
          finalize(() => {
            fileRef.getDownloadURL().subscribe(url => {
              value.mainImage = url;
              this.reviewsService.addReviewData(this.id, value);
            });
          })
        )
        .subscribe(data => console.log(data));
      // Go back to review
      this.router.navigate([`/reviews/${this.id}`]);
    }
  }
}
