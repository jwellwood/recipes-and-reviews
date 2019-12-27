import { Pipe, PipeTransform } from "@angular/core";
import { Rating } from "../models/Rating";

@Pipe({
  name: "getRating"
})
export class GetRatingPipe implements PipeTransform {
  transform(value: any, args?: any[]): any {
    return this.getOverallRating(value);
  }

  getOverallRating(ratings: Rating[]) {
    const scores = ratings.map(score => +score.score);
    const total = scores.reduce((acc, cum) => acc + cum, 0);
    return total / scores.length;
  }
}
