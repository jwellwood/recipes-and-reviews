import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewCommentComponent } from './add-review-comment.component';

describe('AddReviewCommentComponent', () => {
  let component: AddReviewCommentComponent;
  let fixture: ComponentFixture<AddReviewCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
