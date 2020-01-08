import { Component, OnInit, Input } from "@angular/core";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-image-placeholder",
  templateUrl: "./image-placeholder.component.html",
  styleUrls: ["./image-placeholder.component.scss"]
})
export class ImagePlaceholderComponent implements OnInit {
  @Input()
  leaf = faLeaf;
  constructor() {}

  ngOnInit() {}
}
