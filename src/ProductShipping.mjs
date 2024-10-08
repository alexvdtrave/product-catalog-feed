import ProductPrice from './ProductPrice.mjs';

/**
 * Defines product shipping information.
 */
export default class ProductShipping {
  #country;

  #region;

  #postalCode;

  #locationId;

  #locationGroupName;

  #service;

  #price;

  /**
   * Creates an instance of ProductShipping class.
   * @param {ProductPrice} price Shipping cost
   */
  constructor(price) {
    this.price = price;
  }

  /**
   * Gets a country that an item can be delivered to.
   * Must be an ISO 3166-1 country code (e.g., CH).
   * @returns {String}
   */
  get country() {
    return this.#country;
  }

  /**
   * Sets a country that an item can be delivered to.
   * Must be an ISO 3166-1 country code (e.g., CH).
   * @param {String} value Country code
   */
  set country(value) {
    this.#country = value;
  }

  /**
   * Gets a state, territory, or prefecture.
   * Must be an ISO 3166-1 country code without country prefix (e.g., CA, NSW, 03)
   * @returns {String}
   */
  get region() {
    return this.#region;
  }

  /**
   * Sets a state, territory, or prefecture.
   * Must be an ISO 3166-1 country code without country prefix (e.g., CA, NSW, 03)
   * @param {String} value Country code without country prefix
   */
  set region(value) {
    this.#region = value;
  }

  /**
   * Gets a postal code or postal code range.
   * @returns {String}
   */
  get postalCode() {
    return this.#postalCode;
  }

  /**
   * Sets a postal code or postal code range.
   * @param {String} value
   */
  set postalCode(value) {
    this.#postalCode = value;
  }

  /**
   * Gets a numeric criteria ID of a location defined by Google Ads API.
   * @returns {String}
   */
  get locationId() {
    return this.#locationId;
  }

  /**
   * Sets a numeric criteria ID of a location defined by Google Ads API.
   * @param {String} value
   */
  set locationId(value) {
    this.#locationId = value;
  }

  /**
   * Gets a location group that can be set up hrough Merchant Center settings.
   * @returns {String}
   */
  get locationGroupName() {
    return this.#locationGroupName;
  }

  /**
   * Sets a location group that can be set up hrough Merchant Center settings.
   * @returns {String}
   */
  set locationGroupName(value) {
    this.#locationGroupName = value;
  }

  /**
   * Gets a service class or shipping speed.
   * @returns {String}
   */
  get service() {
    return this.#service;
  }

  /**
   * Sets a service class or shipping speed.
   * @param {String} value
   */
  set service(value) {
    this.#service = value;
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
      throw new Error('price expects instance of ProductPrice as argument.');
    }
    this.#price = value;
  }
}
