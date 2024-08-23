#!/usr/bin/node
// 3-payment.test.js
const sinon = require("sinon");
const { expect } = require("chai");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", function () {
  let calculateNumberSpy;

  beforeEach(() => {
    calculateNumberSpy = sinon.spy(Utils, "calculateNumber");
  });

  afterEach(() => {
    calculateNumberSpy.restore();
  });

  it("should call Utils.calculateNumber with correct arguments", function () {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.firstCall.args).to.deep.equal(["SUM", 100, 20]);
  });
});
