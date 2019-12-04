import { Component, OnInit } from "@angular/core";
import { faLeaf, faStar, faQuestion } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookSquare,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: "app-nav-dropdown",
  templateUrl: "./nav-dropdown.component.html",
  styleUrls: ["./nav-dropdown.component.scss"]
})
export class NavDropdownComponent implements OnInit {
  twitter = faTwitter;
  facebook = faFacebookSquare;
  instagram = faInstagram;
  leaf = faLeaf;
  star = faStar;
  question = faQuestion;
  constructor() {}

  ngOnInit() {}
}
