import { Component, OnInit } from "@angular/core";
import { AuthService } from "../core/auth/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  isAuth: boolean;
  authUser: string;
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
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
