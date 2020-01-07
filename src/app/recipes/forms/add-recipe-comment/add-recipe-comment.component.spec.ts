import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddRecipeCommentComponent } from "./add-recipe-comment.component";
import { RecipeFormsModule } from "../recipe-forms.module";
import { CoreModule } from "../../../core/core.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("AddRecipeCommentComponent", () => {
  let component: AddRecipeCommentComponent;
  let fixture: ComponentFixture<AddRecipeCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [RecipeFormsModule, CoreModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
