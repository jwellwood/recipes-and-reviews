import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-main-comment",
  templateUrl: "./main-comment.component.html",
  styleUrls: ["./main-comment.component.scss"]
})
export class MainCommentComponent implements OnInit {
  @Input() mainComment: string;
  constructor() {}

  ngOnInit() {}
}
