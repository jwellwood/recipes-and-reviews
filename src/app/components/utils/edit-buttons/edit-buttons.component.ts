import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-edit-buttons",
  templateUrl: "./edit-buttons.component.html",
  styleUrls: ["./edit-buttons.component.scss"]
})
export class EditButtonsComponent implements OnInit {
  @Input() baseRoute: string;
  @Input() id: string;
  @Output() onDeletion: EventEmitter<any> = new EventEmitter();
  trash = faTrash;
  constructor() {}

  ngOnInit() {}

  onDeleteItem() {
    this.onDeletion.emit();
  }
}
