import data from "./data/harrypotter/harry.js";
import { sortDataUp } from "./data.js";

const character = data.characters;
describe("Sort characters A-Z", () => {
  it("characters", () => {
    expect(typeof sortDataUp).toBe("Sorted");
  });

  it("returns `characters`", () => {
    expect(sortDataUp()).toBe("Sort Characters");
  });
});

describe("anotherExample", () => {
  it("is a function", () => {
    expect(typeof anotherExample).toBe("function");
  });

  it("returns `anotherExample`", () => {
    expect(anotherExample()).toBe("OMG");
  });
});

/*describe("", () => {
  it("is a function", () => {
    expect(typeof example).toBe("function");
  });

  it("returns `example`", () => {
    expect(example()).toBe("example");
  });
});

describe("anotherExample", () => {
  it("is a function", () => {
    expect(typeof anotherExample).toBe("function");
  });

  it("returns `anotherExample`", () => {
    expect(anotherExample()).toBe("OMG");
  });
});*/
