import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddButtonComponent } from "./add-button.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("AddButtonComponent", () => {
  let component: AddButtonComponent;
  let fixture: ComponentFixture<AddButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddButtonComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
