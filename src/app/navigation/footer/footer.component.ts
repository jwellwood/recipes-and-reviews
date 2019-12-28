import { Component, OnInit, Input } from "@angular/core";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  @Input() socialLinks: any;
  // Icons
  leaf = faLeaf;
  constructor() {}

  ngOnInit() {}
}
