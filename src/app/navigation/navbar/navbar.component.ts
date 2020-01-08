import { Component, OnInit, Input } from "@angular/core";
import { faLeaf, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "src/app/core/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  @Input() socialLinks: any;
  isAuth: boolean;
  authUser: string;
  links = [];
  // Icons
  admin = faUserShield;
  leaf = faLeaf;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isAuth = true;
        this.authUser = auth.email;
      } else {
        this.isAuth = false;
      }
    });
    this.links = [
      { title: "Recipes", link: "recipes" },
      { title: "Reviews", link: "reviews" }
    ];
  }
}
