import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RecipeCardFooterComponent } from "./recipe-card-footer.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

describe("RecipeCardFooterComponent", () => {
  let component: RecipeCardFooterComponent;
  let fixture: ComponentFixture<RecipeCardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeCardFooterComponent],
      imports: [FontAwesomeModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
