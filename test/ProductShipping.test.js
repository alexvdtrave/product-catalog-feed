/* eslint-disable no-undef,no-new */
const {
  ProductPrice,
  ProductShipping,
} = require('../index');

describe('ProductShipping arguments validation', () => {
  it('valid data accepted in constructor', () => {
    const actual = new ProductShipping(new ProductPrice(30, 'EUR'));

    expect(actual.price).toBeInstanceOf(ProductPrice);
  });

  it('throws error if price is not provided in constructor', () => {
    expect(() => {
      new ProductShipping(6, {});
    }).toThrow(Error);
  });
});
