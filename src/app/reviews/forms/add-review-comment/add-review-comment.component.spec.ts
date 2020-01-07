import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddReviewCommentComponent } from "./add-review-comment.component";
import { ReviewFormsModule } from "../review-forms.module";
import { CoreModule } from "src/app/core/core.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("AddReviewCommentComponent", () => {
  let component: AddReviewCommentComponent;
  let fixture: ComponentFixture<AddReviewCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [CoreModule, ReviewFormsModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
