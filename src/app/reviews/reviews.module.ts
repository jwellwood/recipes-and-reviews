import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./review.routing";
// Externals
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
// Components
import { ReviewComponent } from "./review/review.component";
import { ReviewListComponent } from "./review-list/review-list.component";
import { ReviewRatingsComponent } from "./review-ratings/review-ratings.component";
// Modules
import { SharedModule } from "../shared/shared.module";
import { ReviewFormsModule } from "./forms/review-forms.module";

@NgModule({
  declarations: [ReviewComponent, ReviewRatingsComponent, ReviewListComponent],
  imports: [
    ReviewFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  exports: []
})
export class ReviewsModule {}
