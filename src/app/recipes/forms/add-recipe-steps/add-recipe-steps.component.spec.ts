import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddRecipeStepsComponent } from "./add-recipe-steps.component";
import { RecipeFormsModule } from "../recipe-forms.module";
import { CoreModule } from "../../../core/core.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("AppRecipeStepsComponent", () => {
  let component: AddRecipeStepsComponent;
  let fixture: ComponentFixture<AddRecipeStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [RecipeFormsModule, CoreModule, RouterTestingModule]
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
