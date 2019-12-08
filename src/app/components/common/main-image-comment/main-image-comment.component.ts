import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-main-image-comment",
  templateUrl: "./main-image-comment.component.html",
  styleUrls: ["./main-image-comment.component.scss"]
})
export class MainImageCommentComponent implements OnInit {
  @Input() mainComment: string;
  constructor() {}

  ngOnInit() {}
}
