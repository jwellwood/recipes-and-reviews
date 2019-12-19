import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-ingredients-list",
  templateUrl: "./ingredients-list.component.html",
  styleUrls: ["./ingredients-list.component.scss"]
})
export class IngredientsListComponent implements OnInit {
  @Input() ingredients: any;
  constructor() {}

  ngOnInit() {
    console.log(this.ingredients);
  }
}
