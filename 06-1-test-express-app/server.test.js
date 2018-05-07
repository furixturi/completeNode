const request = require("supertest");
const expect = require("expect");
const app = require("./server").app;

it("should return 404 Page not found", done => {
  request(app)
    .get("/")
    .expect(404)
    .expect(res => {
      expect(res.body).toMatchObject({
        // error: "Page not found",
        name: "Todo App v1.0"
      });
    })
    .end(done);
});
