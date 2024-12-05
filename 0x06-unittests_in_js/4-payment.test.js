const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and call console.log', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    assert(calculateNumberStub.calledWith('SUM', 100, 20));
    assert(calculateNumberStub.returned(10));
    assert(consoleSpy.calledWith('The total is: 10'));

    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
