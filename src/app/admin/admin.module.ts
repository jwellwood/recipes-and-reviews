import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FlashMessagesModule } from "angular2-flash-messages";
import { LoginComponent } from "./login/login.component";
import { routes } from "./admin.routing";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [AdminComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    FormsModule,
    FlashMessagesModule,
    SharedModule
  ]
})
export class AdminModule {}
