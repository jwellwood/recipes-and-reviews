import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RecipeComponent } from "./recipe.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CoreModule } from "../../core/core.module";
import { RecipesModule } from "../recipes.module";
import { RouterTestingModule } from "@angular/router/testing";
describe("RecipeComponent", () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [SharedModule, CoreModule, RecipesModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
