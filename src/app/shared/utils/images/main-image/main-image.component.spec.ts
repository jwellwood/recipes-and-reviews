import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MainImageComponent } from "./main-image.component";
import { SharedModule } from "src/app/shared/shared.module";

describe("MainImageComponent", () => {
  let component: MainImageComponent;
  let fixture: ComponentFixture<MainImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
