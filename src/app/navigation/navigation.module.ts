import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
// Components
import { NavbarComponent } from "./navbar/navbar.component";
import { NavDropdownComponent } from "./nav-dropdown/nav-dropdown.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [NavbarComponent, NavDropdownComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    BrowserModule,
    BsDropdownModule.forRoot()
  ],
  exports: [NavbarComponent, NavDropdownComponent, FooterComponent]
})
export class NavigationModule {}
