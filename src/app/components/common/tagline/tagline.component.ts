import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tagline",
  templateUrl: "./tagline.component.html",
  styleUrls: ["./tagline.component.scss"]
})
export class TaglineComponent implements OnInit {
  @Input() text: string;
  constructor() {}

  ngOnInit() {}
}
