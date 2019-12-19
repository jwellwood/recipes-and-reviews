import { Component, OnInit } from "@angular/core";
import { ReviewsService } from "src/app/services/reviews.service";
import { FormGroup, FormArray, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-add-review-gallery",
  templateUrl: "./add-review-gallery.component.html",
  styleUrls: ["./add-review-gallery.component.scss"]
})
export class AddReviewGalleryComponent implements OnInit {
  reviewGalleryForm: FormGroup;
  images: FormArray;

  constructor(
    private reviewService: ReviewsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.reviewGalleryForm = this.formBuilder.group({
      images: this.formBuilder.array([this.createImage()])
    });
  }

  createImage(): FormGroup {
    return this.formBuilder.group({
      imageUrl: "",
      caption: ""
    });
  }

  addField(): void {
    this.images = this.reviewGalleryForm.get("images") as FormArray;
    this.images.push(this.createImage());
  }

  removeField(): void {
    if (this.reviewGalleryForm.get("images")["controls"].length > 1) {
      this.reviewGalleryForm.get("images")["controls"].pop();
    }
  }
}
