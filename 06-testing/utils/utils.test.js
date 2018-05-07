const expect = require('expect');
const utils = require("./utils");

it("should add two numbers", () => {
  const res = utils.add(33, 11);
  expect(res).toBeA('number').toBe(44);
});
