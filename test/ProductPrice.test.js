/* eslint-disable no-undef */
const {
  ProductPrice,
} = require('../index');

describe('ProductPrice arguments validation', () => {
  it('valid price and currency accepted in constructor', () => {
    const price = new ProductPrice(10, 'EUR');

    expect(price.price).toEqual(10);
    expect(price.currency).toEqual('EUR');
  });
});
