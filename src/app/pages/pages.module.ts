import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "./about/about.component";
import { LandingComponent } from "./landing/landing.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AboutComponent, LandingComponent, NotFoundComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [AboutComponent, LandingComponent, NotFoundComponent]
})
export class PagesModule {}
