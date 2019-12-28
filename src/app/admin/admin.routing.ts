import { Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { LoginComponent } from "./login/login.component";

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: AdminComponent }
];
