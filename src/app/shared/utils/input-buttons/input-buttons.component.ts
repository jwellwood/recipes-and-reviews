import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-input-buttons",
  templateUrl: "./input-buttons.component.html",
  styleUrls: ["./input-buttons.component.scss"]
})
export class InputButtonsComponent implements OnInit {
  @Input() index: number;
  // These match what is found in the parent component (onAdd)="addField($event, i)" etc
  @Output() onAdd = new EventEmitter<any>();
  @Output() onRemove = new EventEmitter<any>();

  // Icons
  minus = faMinusCircle;
  plus = faPlusCircle;
  constructor() {}

  ngOnInit() {}

  onAddClick(event) {
    this.onAdd.emit(event);
  }
  onRemoveClick(event) {
    this.onRemove.emit(event);
  }
}
