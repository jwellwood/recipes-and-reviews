import { Component, OnInit, Input } from "@angular/core";
import { faLeaf, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { BsDropdownConfig } from "ngx-bootstrap/dropdown";

@Component({
  selector: "app-nav-dropdown",
  templateUrl: "./nav-dropdown.component.html",
  styleUrls: ["./nav-dropdown.component.scss"],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true }
    }
  ]
})
export class NavDropdownComponent implements OnInit {
  @Input() isAuth: boolean;
  @Input() socialLinks: any;
  links = [];
  // Icons
  leaf = faLeaf;
  question = faQuestion;
  constructor() {}

  ngOnInit() {
    this.links = [
      { title: "Home", link: "/" },
      { title: "Recipes", link: "/recipes" },
      { title: "Reviews", link: "/reviews" }
    ];
  }
}
