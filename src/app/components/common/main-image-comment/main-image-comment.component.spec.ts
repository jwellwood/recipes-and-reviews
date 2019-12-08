import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImageCommentComponent } from './main-image-comment.component';

describe('MainImageCommentComponent', () => {
  let component: MainImageCommentComponent;
  let fixture: ComponentFixture<MainImageCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainImageCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainImageCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
