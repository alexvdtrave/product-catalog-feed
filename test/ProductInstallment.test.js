/* eslint-disable no-undef,no-new */
const {
  ProductPrice,
  ProductInstallment,
} = require('../index');

describe('ProductInstallment arguments validation', () => {
  it('valid data accepted in constructor', () => {
    const actual = new ProductInstallment(6, new ProductPrice(30, 'EUR'));

    expect(actual.months).toEqual(6);
    expect(actual.amount).toBeInstanceOf(ProductPrice);
  });

  it('throws error if price is not provided in constructor', () => {
    expect(() => {
      new ProductInstallment(6, {});
    }).toThrow(Error);
  });
});
