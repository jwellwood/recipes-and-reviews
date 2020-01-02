import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Review } from "../../shared/models/Review";

@Injectable({
  providedIn: "root"
})
export class ReviewsService {
  reviewsCollection: AngularFirestoreCollection<Review>;
  reviewDoc: AngularFirestoreDocument<Review>;
  reviews: Observable<Review[]>;
  review: Observable<Review>;

  constructor(private db: AngularFirestore) {
    this.reviewsCollection = this.db.collection("reviews");
  }

  getReviews(): Observable<Review[]> {
    this.reviews = this.reviewsCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Review;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
    return this.reviews;
  }

  getReview(id: string): Observable<Review> {
    this.reviewDoc = this.db.doc<Review>(`reviews/${id}`);
    this.review = this.reviewDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Review;
          data.id = action.payload.id;
          return data;
        }
      })
    );
    return this.review;
  }
  // This is used to create a new document

  newReview(review: Review) {
    this.reviewsCollection.add(review);
  }

  // This is used to add data to existing documents

  addReviewData(id: string, review: Review) {
    this.reviewDoc = this.db.doc(`reviews/${id}`);
    this.reviewDoc.set(
      {
        ...review
      },
      { merge: true }
    );
  }

  updateReview(review: Review) {
    this.reviewDoc = this.db.doc(`reviews/${review.id}`);
    this.reviewDoc.update(review);
  }

  deleteReview(review: Review) {
    // TODO Delete any associated images

    // Delete from DB
    this.reviewDoc = this.db.doc(`reviews/${review.id}`);
    this.reviewDoc.delete();
  }
}
