import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ReviewListComponent } from "./review-list.component";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterTestingModule } from "@angular/router/testing";
import { ReviewsModule } from "../reviews.module";
import { CoreModule } from "../../core/core.module";

describe("ReviewListComponent", () => {
  let component: ReviewListComponent;
  let fixture: ComponentFixture<ReviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ReviewsModule, CoreModule, RouterTestingModule, SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
