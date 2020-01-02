import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-input-wrapper",
  templateUrl: "./input-wrapper.component.html",
  styleUrls: ["./input-wrapper.component.scss"]
})
export class InputWrapperComponent implements OnInit {
  @Input() width: string;
  @Input() labelText: string;
  @Input() inputTitle: string;
  @Input() labelFor: string;
  @Input() validation: any;
  constructor() {}

  ngOnInit() {}
}
