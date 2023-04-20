import { createAddingCustomEventReplyJSON } from "../src/admob/adding-customevent-replay";

describe("createAddingCustomEventReplyJSON function", () => {
  it("should return an error message if the title is empty", () => {
    const result = createAddingCustomEventReplyJSON("", "some TSV");
    expect(result).toEqual({ error: "Title cannot be null or empty" });
  });
  
  it("should return an object with the correct structure if the title is not null or empty", () => {
    const tsv = `label\t10\tmapping1\tjp.fluct.Hoge\t{"hoge1":"fuga1"}
    label\t10\tmapping2\tjp.fluct.Hoge\t{"hoge1":"fuga1"}
    label\t10\tmapping3\tjp.fluct.Hoge\t{"hoge1":"fuga1"}`;

    const result = createAddingCustomEventReplyJSON("some title", tsv);

    expect(result).toHaveProperty("title", "some title");
    expect(result).toHaveProperty("steps");
    console.log(result);
  });
});
