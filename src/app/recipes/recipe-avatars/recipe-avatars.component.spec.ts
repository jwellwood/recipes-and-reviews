import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RecipeAvatarsComponent } from "./recipe-avatars.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

describe("RecipeAvatarsComponent", () => {
  let component: RecipeAvatarsComponent;
  let fixture: ComponentFixture<RecipeAvatarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeAvatarsComponent],
      imports: [FontAwesomeModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAvatarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
