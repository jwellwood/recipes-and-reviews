import { Component, OnInit } from "@angular/core";
import { BsDropdownConfig } from "ngx-bootstrap/dropdown";
import {
  faLeaf,
  faQuestion,
  faUserShield
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookSquare,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true }
    }
  ]
})
export class NavbarComponent implements OnInit {
  isAuth: boolean;
  authUser: string;

  admin = faUserShield;
  twitter = faTwitter;
  facebook = faFacebookSquare;
  instagram = faInstagram;
  leaf = faLeaf;
  question = faQuestion;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isAuth = true;
        this.authUser = auth.email;
      } else {
        this.isAuth = false;
      }
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
