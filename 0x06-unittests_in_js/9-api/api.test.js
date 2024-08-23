#!/usr/bin/node
const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';
  let server;

  before((done) => {
    server = app
      .listen(7865, () => {
        done();
      })
      .on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
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

  it('should return status code 200 for index page', (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message for index page', (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return status code 200 when :id is a number', (done) => {
    request.get(`${baseUrl}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct message when :id is a number', (done) => {
    request.get(`${baseUrl}/cart/12`, (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when :id is NOT a number', (done) => {
    request.get(`${baseUrl}/cart/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return correct error message when :id is NOT a number', (done) => {
    request.get(`${baseUrl}/cart/hello`, (err, res, body) => {
      expect(body).to.equal('Not Found');
      done();
    });
  });
});
