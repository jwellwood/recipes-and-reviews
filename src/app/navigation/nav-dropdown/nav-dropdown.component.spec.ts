import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavDropdownComponent } from "./nav-dropdown.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule } from "@angular/router";

describe("NavDropdownComponent", () => {
  let component: NavDropdownComponent;
  let fixture: ComponentFixture<NavDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavDropdownComponent],
      imports: [FontAwesomeModule, RouterModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
