import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BackButtonComponent } from "./back-button.component";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("BackButtonComponent", () => {
  let component: BackButtonComponent;
  let fixture: ComponentFixture<BackButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [SharedModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
