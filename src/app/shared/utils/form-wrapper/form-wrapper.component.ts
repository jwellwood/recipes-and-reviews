import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-form-wrapper",
  templateUrl: "./form-wrapper.component.html",
  styleUrls: ["./form-wrapper.component.scss"]
})
export class FormWrapperComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
