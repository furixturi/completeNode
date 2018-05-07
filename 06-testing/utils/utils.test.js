const expect = require("expect");
const utils = require("./utils");

it("should add two numbers", () => {
  const res = utils.add(33, 11);
  expect(res)
    .toBeA("number")
    .toBe(44);
});

it("should expect some values", () => {
  // To compare objects, do not use toBe, but use toEqual
  expect({ name: "Tuzi" }).toEqual({ name: "Tuzi" });
  expect({ a: 1, b: 2 }).toInclude({ a: 1 });
  expect([1, 2, 3]).toInclude(1);
});
