#!/usr/bin/node
const request = require("request");
const { expect } = require("chai");
const app = require("./api");

describe("Index page", () => {
  const baseUrl = "http://localhost:7865";
  let server;

  before((done) => {
    server = app
      .listen(7865, () => {
        done();
      })
      .on("error", (err) => {
        if (err.code === "EADDRINUSE") {
          done();
        } else {
          throw err;
        }
      });
  });

  after((done) => {
    if (server && server.listening) {
      server.close(done);
    } else {
      done();
    }
  });

  it("should return status code 200", (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("should return the correct message", (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });
});
