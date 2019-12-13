import { Component, OnInit } from "@angular/core";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  // Icons
  unlock = faUnlock;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(["/"]);
      }
    });
  }

  onSubmit() {
    this.authService
      .login(this.email, this.password)
      .then(res => {
        this.router.navigate(["/"]);
      })
      .catch(err => {
        this.flashMessage.show(err.message, {
          cssClass: "alert-danger",
          timeout: 4000
        });
      });
  }
}
