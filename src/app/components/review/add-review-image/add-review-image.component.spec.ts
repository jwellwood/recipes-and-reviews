import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewImageComponent } from './add-review-image.component';

describe('AddReviewImageComponent', () => {
  let component: AddReviewImageComponent;
  let fixture: ComponentFixture<AddReviewImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
