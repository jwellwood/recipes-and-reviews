import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewDetailsComponent } from './add-review-details.component';

describe('AddReviewDetailsComponent', () => {
  let component: AddReviewDetailsComponent;
  let fixture: ComponentFixture<AddReviewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
