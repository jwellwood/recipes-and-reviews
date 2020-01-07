import { TestBed } from "@angular/core/testing";

import { MessagesService } from "./messages.service";
import { CoreModule } from "../core.module";

describe("MessagesService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [CoreModule]
    })
  );

  it("should be created", () => {
    const service: MessagesService = TestBed.get(MessagesService);
    expect(service).toBeTruthy();
  });
});
