import { Component, OnInit, Input } from "@angular/core";
import {
  faUserFriends,
  faHeart,
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
  people = faUserFriends;
  heart = faHeart;
  clock = faClock;

  constructor() {}

  ngOnInit() {}
}
