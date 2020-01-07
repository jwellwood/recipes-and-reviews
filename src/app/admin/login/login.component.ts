import { Component, OnInit } from "@angular/core";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "../../core/auth/auth.service";
import { Router } from "@angular/router";
import { User } from "../../shared/models/User";
import { MessagesService } from "src/app/core/services/messages.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  // email: string;
  // password: string;
  loginForm: FormGroup;
  isSubmitted: boolean = false;
  // Icons
  unlock = faUnlock;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessagesService
  ) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(["/"]);
      }
    });
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }

  onSubmit() {
    this.isSubmitted = true;
    // Make sure to create a deep copy of the form-model
    const value: User = Object.assign({}, this.loginForm.value);
    const valid: boolean = this.loginForm.valid;
    if (!valid) {
      this.messageService.showFormError();
    } else {
      this.authService.login(value.email, value.password);
      this.router.navigate(["/"]);
    }
  }
}
