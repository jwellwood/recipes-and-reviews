import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  TemplateRef
} from "@angular/core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: "app-edit-buttons",
  templateUrl: "./edit-buttons.component.html",
  styleUrls: ["./edit-buttons.component.scss"]
})
export class EditButtonsComponent implements OnInit {
  @Input() link: string;
  @Input() id: string;
  @Input() buttons: [];
  @Output() onDeletion: EventEmitter<any> = new EventEmitter();
  // Icons
  trash = faTrash;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  closeModal() {
    this.modalRef.hide();
  }

  onDeleteItem() {
    this.onDeletion.emit();
  }
}
