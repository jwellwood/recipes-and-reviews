import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ImagePlaceholderComponent } from "./image-placeholder.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

describe("ImagePlaceholderComponent", () => {
  let component: ImagePlaceholderComponent;
  let fixture: ComponentFixture<ImagePlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImagePlaceholderComponent],
      imports: [FontAwesomeModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
