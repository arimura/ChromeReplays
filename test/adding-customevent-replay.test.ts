import { createAddingCustomEventReplyJSON } from "../src/admob/adding-customevent-replay";

describe("createAddingCustomEventReplyJSON function", () => {
  it("should return an error message if the title is empty", () => {
    const result = createAddingCustomEventReplyJSON("", "some TSV");
    expect(result).toEqual({ error: "Title cannot be null or empty" });
  });
});
