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
        s;
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

  it("should return status code 200 for index page", (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("should return the correct message for index page", (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });
});

describe("Cart page", () => {
  const baseUrl = "http://localhost:7865";

  it("should return status code 200 when :id is a number", (done) => {
    request.get(`${baseUrl}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("should return correct message when :id is a number", (done) => {
    request.get(`${baseUrl}/cart/12`, (err, res, body) => {
      expect(body).to.equal("Payment methods for cart 12");
      done();
    });
  });

  it("should return status code 404 when :id is NOT a number", (done) => {
    request.get(`${baseUrl}/cart/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it("should return correct error message when :id is NOT a number", (done) => {
    request.get(`${baseUrl}/cart/hello`, (err, res, body) => {
      expect(body).to.equal("Not Found");
      done();
    });
  });
});

describe("Available payments", () => {
  const baseUrl = "http://localhost:7865";

  it("should return status code 200 for /available_payments", (done) => {
    request.get(`${baseUrl}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("should return the correct payment methods for /available_payments", (done) => {
    request.get(`${baseUrl}/available_payments`, (err, res, body) => {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe("Login", () => {
  const baseUrl = "http://localhost:7865";

  it("should return status code 200 for valid /login request", (done) => {
    request.post(
      {
        url: `${baseUrl}/login`,
        body: JSON.stringify({ userName: "Betty" }),
        headers: { "Content-Type": "application/json" },
      },
      (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        done();
      }
    );
  });

  it("should return the correct message for valid /login request", (done) => {
    request.post(
      {
        url: `${baseUrl}/login`,
        body: JSON.stringify({ userName: "Betty" }),
        headers: { "Content-Type": "application/json" },
      },
      (err, res, body) => {
        expect(body).to.equal("Welcome Betty");
        done();
      }
    );
  });

  it("should return status code 400 for invalid /login request", (done) => {
    request.post(
      {
        url: `${baseUrl}/login`,
        body: JSON.stringify({}),
        headers: { "Content-Type": "application/json" },
      },
      (err, res, body) => {
        expect(res.statusCode).to.equal(400);
        done();
      }
    );
  });
});
