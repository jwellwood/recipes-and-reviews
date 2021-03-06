import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NotFoundComponent } from "./not-found.component";
import { SharedModule } from "../../shared/shared.module";
import { RouterTestingModule } from "@angular/router/testing";
import { PagesModule } from "../pages.module";

describe("NotFoundComponent", () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [PagesModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
