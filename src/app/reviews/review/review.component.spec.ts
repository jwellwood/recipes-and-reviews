import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ReviewComponent } from "./review.component";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "../../shared/shared.module";
import { ReviewsModule } from "../../reviews/reviews.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("ReviewComponent", () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [CoreModule, ReviewsModule, SharedModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
