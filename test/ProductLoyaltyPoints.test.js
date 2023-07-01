/* eslint-disable no-undef */
const {
  ProductLoyaltyPoints,
} = require('../index');

describe('ProductLoyaltyPoints arguments validation', () => {
  it('valid data accepted in constructor', () => {
    const actual = new ProductLoyaltyPoints('EUR', 10, 0.5);

    expect(actual.name).toEqual('EUR');
    expect(actual.pointsValue).toEqual(10);
    expect(actual.ratio).toEqual(0.5);
  });

  it('default ratio is set when not specified in constructor', () => {
    const actual = new ProductLoyaltyPoints('EUR', 10);

    expect(actual.ratio).toEqual(1.0);
  });
});
