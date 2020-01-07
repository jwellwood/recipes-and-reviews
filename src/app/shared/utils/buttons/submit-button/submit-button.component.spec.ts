import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SubmitButtonComponent } from "./submit-button.component";
import { CoreModule } from "../../../../core/core.module";
import { SharedModule } from "src/app/shared/shared.module";

describe("SubmitButtonComponent", () => {
  let component: SubmitButtonComponent;
  let fixture: ComponentFixture<SubmitButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [CoreModule, SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
