import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddRecipeImageComponent } from "./add-recipe-image.component";
import { RecipeFormsModule } from "../recipe-forms.module";
import { CoreModule } from "../../../core/core.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("AddRecipeImageComponent", () => {
  let component: AddRecipeImageComponent;
  let fixture: ComponentFixture<AddRecipeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [RouterTestingModule, RecipeFormsModule, CoreModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
