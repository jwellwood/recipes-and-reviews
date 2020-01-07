import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AddReviewDetailsComponent } from "./add-review-details.component";
import { SharedModule } from "../../../shared/shared.module";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { ReviewFormsModule } from "../review-forms.module";
import { CoreModule } from "src/app/core/core.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("AddReviewDetailsComponent", () => {
  let component: AddReviewDetailsComponent;
  let fixture: ComponentFixture<AddReviewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        RouterTestingModule,
        CoreModule,
        ReviewFormsModule,
        SharedModule,
        BsDatepickerModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
