import ProductPrice from './ProductPrice.mjs';

/**
 * Defines product shipping information.
 */
export default class ProductShipping {
  country;

  region;

  postalCode;

  locationId;

  locationGroupName;

  service;

  #price;

  /**
   * Creates an instance of ProductShipping class.
   * @param {ProductPrice} price Shipping cost
   */
  constructor(price) {
    this.price = price;
  }

  /**
   * Gets a shipping cost.
   * @returns {ProductPrice}
   */
  get price() {
    return this.#price;
  }

  /**
   * Sets a shipping cost.
   * @param {ProductPrice} value
   */
  set price(value) {
    if (!(value instanceof ProductPrice)) {
      throw new TypeError('price expects instance of ProductPrice as argument.');
    }
    this.#price = value;
  }
}
