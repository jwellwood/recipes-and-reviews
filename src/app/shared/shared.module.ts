import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GetRatingPipe } from "../pipes/get-rating.pipe";

@NgModule({
  declarations: [GetRatingPipe],
  exports: [GetRatingPipe],
  imports: [CommonModule]
})
export class SharedModule {}
