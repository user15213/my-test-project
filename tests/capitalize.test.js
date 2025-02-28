const capitalize = require("../src/capitalize");

test("capitalize should capitalize the first letter of the string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalize should return an empty string for an empty input", () => {
  expect(capitalize("")).toBe("");
});
