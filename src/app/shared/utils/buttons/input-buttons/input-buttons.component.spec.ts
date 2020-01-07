import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InputButtonsComponent } from "./input-buttons.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

describe("InputButtonsComponent", () => {
  let component: InputButtonsComponent;
  let fixture: ComponentFixture<InputButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputButtonsComponent],
      imports: [FontAwesomeModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
