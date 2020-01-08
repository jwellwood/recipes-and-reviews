import { Component } from "@angular/core";
import {
  faInstagram,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "plantBP";
  socialLinks = [
    {
      title: "Instagram",
      icon: faInstagram,
      link: "https://www.instagram.com/plantbasedponch/"
    }
    // {
    //   title: "Facebook",
    //   icon: faFacebook,
    //   link: "https://www.facebook.com/"
    // },
    // { title: "Twitter", icon: faTwitter, link: "https://twitter.com/" }
  ];
}
