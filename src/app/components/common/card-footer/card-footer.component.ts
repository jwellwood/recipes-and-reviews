import { Component, OnInit, Input } from "@angular/core";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-card-footer",
  templateUrl: "./card-footer.component.html",
  styleUrls: ["./card-footer.component.scss"]
})
export class CardFooterComponent implements OnInit {
  @Input() footerText: string;
  // Icons
  leaf = faLeaf;
  constructor() {}

  ngOnInit() {}
}
