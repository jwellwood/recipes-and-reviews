import { TestBed } from "@angular/core/testing";

import { RecipesService } from "./recipes.service";
import { CoreModule } from "../core.module";

describe("RecipesService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [CoreModule]
    })
  );

  it("should be created", () => {
    const service: RecipesService = TestBed.get(RecipesService);
    expect(service).toBeTruthy();
  });
});
