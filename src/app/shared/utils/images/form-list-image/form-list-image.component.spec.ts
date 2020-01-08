import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormListImageComponent } from "./form-list-image.component";
import { SharedModule } from "src/app/shared/shared.module";

describe("FormListImageComponent", () => {
  let component: FormListImageComponent;
  let fixture: ComponentFixture<FormListImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormListImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
