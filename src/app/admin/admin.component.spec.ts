import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdminComponent } from "./admin.component";
import { SharedModule } from "../shared/shared.module";
import { CoreModule } from "../core/core.module";
import { AdminModule } from "./admin.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("AdminComponent", () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AdminModule, SharedModule, RouterTestingModule, CoreModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
