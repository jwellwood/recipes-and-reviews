import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeGalleryComponent } from './add-recipe-gallery.component';

describe('AddRecipeGalleryComponent', () => {
  let component: AddRecipeGalleryComponent;
  let fixture: ComponentFixture<AddRecipeGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecipeGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
