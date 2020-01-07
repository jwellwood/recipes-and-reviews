import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddReviewRatingsComponent } from "./add-review-ratings.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ReviewFormsModule } from "../review-forms.module";
import { CoreModule } from "src/app/core/core.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("AddReviewRatingsComponent", () => {
  let component: AddReviewRatingsComponent;
  let fixture: ComponentFixture<AddReviewRatingsComponent>;

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
    fixture = TestBed.createComponent(AddReviewRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
