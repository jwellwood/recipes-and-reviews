import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewGalleryComponent } from './add-review-gallery.component';

describe('AddReviewGalleryComponent', () => {
  let component: AddReviewGalleryComponent;
  let fixture: ComponentFixture<AddReviewGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
