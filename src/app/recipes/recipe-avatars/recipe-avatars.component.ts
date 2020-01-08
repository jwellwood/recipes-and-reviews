import { Component, OnInit, Input } from "@angular/core";
import {
  faUserAlt,
  faSeedling,
  faClock
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-recipe-avatars",
  templateUrl: "./recipe-avatars.component.html",
  styleUrls: ["./recipe-avatars.component.scss"]
})
export class RecipeAvatarsComponent implements OnInit {
  @Input() data: [];
  // Icons
  people = faUserAlt;
  seedling = faSeedling;
  clock = faClock;

  constructor() {}

  ngOnInit() {}
}
