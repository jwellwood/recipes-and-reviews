import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-review-ratings",
  templateUrl: "./review-ratings.component.html",
  styleUrls: ["./review-ratings.component.scss"]
})
export class ReviewRatingsComponent implements OnInit {
  @Input() ratings: [];
  constructor() {}

  ngOnInit() {}
}
