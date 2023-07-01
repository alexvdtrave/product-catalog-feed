/* eslint-disable no-undef */
const {
  ProductTax,
} = require('../index');

describe('ProductTax arguments validation', () => {
  it('valid data accepted', () => {
    const actual = new ProductTax();
    actual.country = 'US';
    actual.region = 'MA';
    actual.rate = 5.00;
    actual.taxShip = true;

    expect(actual.country).toEqual('US');
    expect(actual.region).toEqual('MA');
    expect(actual.rate).toEqual(5.00);
    expect(actual.taxShip).toEqual(true);
  });
});
