const assert = require("assert");
const capitalize = require("../src/capitalize");

test("capitalize should capitalize the first letter of the string", () => {
  assert.strictEqual(capitalize("hello"), "Hello");
});

test("capitalize should return an empty string for an empty input", () => {
  assert.strictEqual(capitalize(""), "");
});
