import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddRecipeDetailsComponent } from "./add-recipe-details.component";
import { RecipeFormsModule } from "../recipe-forms.module";
import { CoreModule } from "../../../core/core.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("AddRecipeDetailsComponent", () => {
  let component: AddRecipeDetailsComponent;
  let fixture: ComponentFixture<AddRecipeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [RouterTestingModule, RecipeFormsModule, CoreModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
