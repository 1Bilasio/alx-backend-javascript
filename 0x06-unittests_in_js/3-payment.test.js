const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with SUM type', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    assert(calculateNumberSpy.calledWith('SUM', 100, 20));

    calculateNumberSpy.restore();
  });
});
