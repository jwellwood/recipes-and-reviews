import { TestBed } from "@angular/core/testing";
import { ReviewsService } from "./reviews.service";
import { CoreModule } from "../core.module";

describe("ReviewsService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [CoreModule]
    })
  );

  it("should be created", () => {
    const service: ReviewsService = TestBed.get(ReviewsService);
    expect(service).toBeTruthy();
  });
});
