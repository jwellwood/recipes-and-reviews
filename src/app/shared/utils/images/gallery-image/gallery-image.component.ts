import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-gallery-image",
  templateUrl: "./gallery-image.component.html",
  styleUrls: ["./gallery-image.component.scss"]
})
export class GalleryImageComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() index: number;
  @Input() arrLength: number;

  constructor() {}

  ngOnInit() {
    this.index += 1;
  }
}
