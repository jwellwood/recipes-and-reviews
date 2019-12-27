import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeCommentComponent } from './add-recipe-comment.component';

describe('AddRecipeCommentComponent', () => {
  let component: AddRecipeCommentComponent;
  let fixture: ComponentFixture<AddRecipeCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecipeCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
