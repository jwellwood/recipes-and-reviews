import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-main-list-image",
  templateUrl: "./main-list-image.component.html",
  styleUrls: ["./main-list-image.component.scss"]
})
export class MainListImageComponent implements OnInit {
  @Input() imgSrc: string;
  constructor() {}

  ngOnInit() {}
}
