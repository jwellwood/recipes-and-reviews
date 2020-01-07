import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EditButtonsComponent } from "./edit-buttons.component";
import { SharedModule } from "src/app/shared/shared.module";

describe("EditButtonsComponent", () => {
  let component: EditButtonsComponent;
  let fixture: ComponentFixture<EditButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
