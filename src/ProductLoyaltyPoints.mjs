/**
 * Defines how many and what type of loyalty points a user receives when buying a product.
 */
export default class ProductLoyaltyPoints {
  name;

  pointsValue;

  #ratio;

  /**
   * Creates an instance of ProductLoyaltyPoints.
   * @param {String} name Name of a loyalty points program
   * @param {Number} pointsValue Number of loyalty points a user receives when purchasing a product
   * @param {Number} ratio A ratio of a point when converted to currency
   */
  constructor(name, pointsValue, ratio) {
    this.name = name;
    this.pointsValue = pointsValue;
    this.ratio = ratio;
  }

  /**
   * Gets a ratio of a point when converted to currency
   * @returns {Number}
   */
  get ratio() {
    return this.#ratio;
  }

  /**
   * Sets a ratio of a point when converted to currency
   * @param {Number} value
   */
  set ratio(value) {
    this.#ratio = value ?? 1.0;
  }
}
