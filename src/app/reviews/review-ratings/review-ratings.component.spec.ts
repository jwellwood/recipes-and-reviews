import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ReviewRatingsComponent } from "./review-ratings.component";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("ReviewRatingsComponent", () => {
  let component: ReviewRatingsComponent;
  let fixture: ComponentFixture<ReviewRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewRatingsComponent],
      imports: [SharedModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
