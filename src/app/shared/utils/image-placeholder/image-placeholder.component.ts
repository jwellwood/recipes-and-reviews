import { Component, OnInit } from "@angular/core";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-image-placeholder",
  templateUrl: "./image-placeholder.component.html",
  styleUrls: ["./image-placeholder.component.scss"]
})
export class ImagePlaceholderComponent implements OnInit {
  leaf = faLeaf;
  constructor() {}

  ngOnInit() {}
}
