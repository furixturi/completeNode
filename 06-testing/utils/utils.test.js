const utils = require("./utils");

it("should add two numbers", () => {
  const res = utils.add(33, 11);
  if(res !== 44) throw new Error(`Expect value to be 44 but got ${res}`);
});
