import { Injectable } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  constructor(private flashMessage: FlashMessagesService) {}

  showAuthError(message: string) {
    this.flashMessage.show(message, {
      cssClass: "alert-danger",
      timeout: 4000
    });
  }

  showFormError() {
    this.flashMessage.show(
      "There was a problem with the submission. Check the fields marked *",
      {
        cssClass: "alert-danger",
        timeout: 4000
      }
    );
  }
}
