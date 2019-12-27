import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddRecipeStepsComponent } from "./add-recipe-steps.component";

describe("AppRecipeStepsComponent", () => {
  let component: AddRecipeStepsComponent;
  let fixture: ComponentFixture<AddRecipeStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddRecipeStepsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
