import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddReviewImageComponent } from "./add-review-image.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ReviewFormsModule } from "../review-forms.module";
import { CoreModule } from "src/app/core/core.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("AddReviewImageComponent", () => {
  let component: AddReviewImageComponent;
  let fixture: ComponentFixture<AddReviewImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        SharedModule,
        ReviewFormsModule,
        CoreModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
