import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit {
  images = [];
  constructor() {}

  ngOnInit() {
    this.images = [
      { url: "https://picsum.photos/400", alt: "recipe image" },
      { url: "https://picsum.photos/400", alt: "recipe image" },
      { url: "https://picsum.photos/400", alt: "recipe image" },
      { url: "https://picsum.photos/400", alt: "recipe image" }
    ];
  }
}
