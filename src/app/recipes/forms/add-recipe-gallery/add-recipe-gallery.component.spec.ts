import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddRecipeGalleryComponent } from "./add-recipe-gallery.component";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterTestingModule } from "@angular/router/testing";
import { CoreModule } from "src/app/core/core.module";

describe("AddRecipeGalleryComponent", () => {
  let component: AddRecipeGalleryComponent;
  let fixture: ComponentFixture<AddRecipeGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddRecipeGalleryComponent],
      imports: [SharedModule, RouterTestingModule, CoreModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
