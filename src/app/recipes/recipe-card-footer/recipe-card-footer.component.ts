import { Component, OnInit, Input } from "@angular/core";
@Component({
  selector: "app-recipe-card-footer",
  templateUrl: "./recipe-card-footer.component.html",
  styleUrls: ["./recipe-card-footer.component.scss"]
})
export class RecipeCardFooterComponent implements OnInit {
  @Input() data: [];
  constructor() {}

  ngOnInit() {}
}
