import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListImageComponent } from './main-list-image.component';

describe('MainListImageComponent', () => {
  let component: MainListImageComponent;
  let fixture: ComponentFixture<MainListImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainListImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
