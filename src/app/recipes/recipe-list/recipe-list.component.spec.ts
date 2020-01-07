import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RecipeListComponent } from "./recipe-list.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CoreModule } from "../../core/core.module";
import { RecipesModule } from "../recipes.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("RecipeListComponent", () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [SharedModule, CoreModule, RecipesModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
