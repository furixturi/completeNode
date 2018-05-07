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

// Mocha knows it is async as long as a done callback is passed in
it("should add two numbers asynchronously", (done) => {
  const res = utils.asyncAdd(1, 2, sum => {
    expect(sum)
      .toBeA("number")
      .toBe(3);
    done();
  });
});
