import { Pipe, PipeTransform } from "@angular/core";
import { Rating } from "../models/Rating";

@Pipe({
  name: "getRating"
})
export class GetRatingPipe implements PipeTransform {
  transform(value: any, args?: any[]): any {
    return this.getOverallRating(value);
  }

  getOverallRating(rating: Rating[]) {
    console.log(rating);
    return 10;
  }
}
