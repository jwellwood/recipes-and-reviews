import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddReviewGalleryComponent } from "./add-review-gallery.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CoreModule } from "../../../core/core.module";
import { ReviewFormsModule } from "../review-forms.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("AddReviewGalleryComponent", () => {
  let component: AddReviewGalleryComponent;
  let fixture: ComponentFixture<AddReviewGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        SharedModule,
        CoreModule,
        ReviewFormsModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
