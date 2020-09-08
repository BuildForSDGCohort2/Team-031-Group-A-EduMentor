/* eslint-disable import/no-dynamic-require */
import require from "supertest";
import app from "./index";

describe("Testing API calls", () => {
  describe("Testing user route", () => {
    it("should create a user", () => {
      require(app)
        .post("/user/signup")
        .field("email", "test@test.com")
        .field("password", "testingAbc")
        .expect(200);
    });
  });
});
