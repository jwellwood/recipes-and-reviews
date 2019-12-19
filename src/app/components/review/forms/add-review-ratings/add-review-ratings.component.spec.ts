import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewRatingsComponent } from './add-review-ratings.component';

describe('AddReviewRatingsComponent', () => {
  let component: AddReviewRatingsComponent;
  let fixture: ComponentFixture<AddReviewRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
