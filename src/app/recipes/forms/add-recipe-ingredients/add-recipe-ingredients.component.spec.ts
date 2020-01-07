import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddRecipeIngredientsComponent } from "./add-recipe-ingredients.component";
import { RecipeFormsModule } from "../recipe-forms.module";
import { SharedModule } from "../../../shared/shared.module";
import { CoreModule } from "src/app/core/core.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("AddRecipeIngredientsComponent", () => {
  let component: AddRecipeIngredientsComponent;
  let fixture: ComponentFixture<AddRecipeIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        RecipeFormsModule,
        SharedModule,
        CoreModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
