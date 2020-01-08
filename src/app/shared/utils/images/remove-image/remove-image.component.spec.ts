import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RemoveImageComponent } from "./remove-image.component";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "../../../shared.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("RemoveImageComponent", () => {
  let component: RemoveImageComponent;
  let fixture: ComponentFixture<RemoveImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [CoreModule, SharedModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
