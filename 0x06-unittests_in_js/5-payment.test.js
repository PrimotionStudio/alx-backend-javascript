#!/usr/bin/node
// 5-payment.test.js
const sinon = require("sinon");
const { expect } = require("chai");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./5-payment");

describe("sendPaymentRequestToApi", function () {
  let consoleLogSpy;

  beforeEach(() => {
    // Spy on console.log
    consoleLogSpy = sinon.spy(console, "log");
  });

  afterEach(() => {
    // Restore the original console.log
    consoleLogSpy.restore();
  });

  it("should log the correct message when called with 100 and 20", function () {
    sendPaymentRequestToApi(100, 20);
    // Verify the console log was called with the correct message
    expect(consoleLogSpy.calledOnceWithExactly("The total is: 120")).to.be.true;
  });

  it("should log the correct message when called with 10 and 10", function () {
    sendPaymentRequestToApi(10, 10);
    // Verify the console log was called with the correct message
    expect(consoleLogSpy.calledOnceWithExactly("The total is: 20")).to.be.true;
  });
});
