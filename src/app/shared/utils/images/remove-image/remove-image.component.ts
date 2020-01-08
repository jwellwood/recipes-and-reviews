import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { switchMap } from "rxjs/operators";
// Firebase
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from "firebase/app";
import "firebase/firestore";
// Internal
import { Review } from "src/app/shared/models/Review";
import { Recipe } from "src/app/shared/models/Recipe";
import { ReviewsService } from "src/app/core/services/reviews.service";
import { RecipesService } from "src/app/core/services/recipes.service";

@Component({
  selector: "app-remove-image",
  templateUrl: "./remove-image.component.html",
  styleUrls: ["./remove-image.component.scss"]
})
export class RemoveImageComponent implements OnInit {
  @Input() imageType: string;
  id: string;
  images: any = [];

  constructor(
    private reviewsService: ReviewsService,
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router,
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    // Get images for reviews
    if (this.imageType === "reviews") {
      this.route.params
        .pipe(
          switchMap((params: Params) => this.reviewsService.getReview(this.id))
        )
        .subscribe((review: Review) => {
          if (review.imageList) {
            this.images = review.imageList;
          }
        });
    }
    // Get images for recipes
    if (this.imageType === "recipes") {
      this.route.params
        .pipe(
          switchMap((params: Params) => this.recipesService.getRecipe(this.id))
        )
        .subscribe((recipe: Recipe) => {
          if (recipe.imageList) {
            this.images = recipe.imageList;
          }
        });
    }
  }

  onRemoveImage(downloadUrl: string, path: string) {
    // Remove from storage
    this.storage.storage.refFromURL(downloadUrl).delete();
    // Remove from DB
    const docRef = this.db.collection(this.imageType).doc(this.id);
    docRef.update({
      imageList: firebase.firestore.FieldValue.arrayRemove({
        url: downloadUrl,
        path: path
      })
    });
  }

  onSubmit() {
    this.router.navigate([`/${this.imageType}/${this.id}`]);
  }
}
