import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-form-list-image",
  templateUrl: "./form-list-image.component.html",
  styleUrls: ["./form-list-image.component.scss"]
})
export class FormListImageComponent implements OnInit {
  @Input() imgSrc: string;
  constructor() {}

  ngOnInit() {}
}
