import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FlashMessagesModule } from "angular2-flash-messages";
import { environment } from "../../environments/environment";
// Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule } from "@angular/fire/storage";
// Core Components

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebase, "pbponch"),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    // Externals
    FontAwesomeModule,
    FlashMessagesModule.forRoot()
  ],
  exports: [RouterModule, FormsModule]
})
export class CoreModule {}
