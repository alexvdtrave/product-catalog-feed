import ProductDateRange from './ProductDateRange.mjs';
import ProductPrice from './ProductPrice.mjs';
import ProductInstallment from './ProductInstallment.mjs';
import ProductLoyaltyPoints from './ProductLoyaltyPoints.mjs';
import ProductShipping from './ProductShipping.mjs';
import ProductTax from './ProductTax.mjs';
import {
  UnitPricingMeasure,
  ShippingWeight,
  ShippingDimension,
} from './Units.mjs';

/**
 * Defines a product.
 */
export default class Product {
  static AVAILABILITY = {
    IN_STOCK: 'in stock',
    OUT_OF_STOCK: 'out of stock',
    PREORDER: 'preorder',
  };

  static CONDITION = {
    NEW: 'new',
    REFURBISHED: 'refurbished',
    USED: 'used',
  };

  static AGE_GROUP = {
    NEWBORN: 'newborn',
    INFANT: 'infant',
    TODDLER: 'toddler',
    KIDS: 'kids',
    ADULT: 'adult',
  };

  static GENDER = {
    MALE: 'male',
    FEMALE: 'female',
    UNISEX: 'unisex',
  };

  static SIZE_TYPE = {
    REGULAR: 'regular',
    PETITE: 'petite',
    PLUS: 'plus',
    BIG: 'big',
    TALL: 'tall',
    MATERNITY: 'maternity',
  };

  static SIZE_SYSTEM = {
    AU: 'AU',
    BR: 'BR',
    CN: 'CN',
    DE: 'DE',
    EU: 'EU',
    FR: 'FR',
    IT: 'IT',
    JP: 'JP',
    MEX: 'MEX',
    UK: 'UK',
    US: 'US',
  };

  static ADS_DESTINATION = {
    SHOPPING: 'Shopping',
    SHOPPING_ACTIONS: 'ShoppingActions',
    DISPLAY_ADS: 'DisplayAds',
  };

  id;

  title;

  description;

  link;

  imageLink;

  mobileLink;

  additionalImageLink;

  availability;

  googleProductCategory;

  productType;

  brand;

  gtin;

  mpn;

  identifierExists;

  condition;

  adult;

  multipack;

  isBundle;

  energyEfficiencyClass;

  minEnergyEfficiencyClass;

  maxEnergyEfficiencyClass;

  ageGroup;

  color;

  gender;

  material;

  pattern;

  size;

  sizeType;

  sizeSystem;

  itemGroupId;

  adwordsRedirect;

  customLabels = new Array(5);

  promotionId;

  includedDestination;

  excludedDestination;

  shippingLabel;

  minHandlingTime;

  maxHandlingTime;

  taxCategory;

  #availabilityDate;

  #expirationDate;

  #price;

  #salePrice;

  #salePriceEffectiveDate;

  #costOfGoodsSold;

  #unitPricingMeasure;

  #unitPricingBaseMeasure;

  #installment;

  #loyaltyPoints;

  #shipping;

  #shippingWeight;

  #shippingLength;

  #shippingWidth;

  #shippingHeight;

  #tax;

  /**
   * Creates an instance of Product with optional initial property values.
   * @param {Object} [init={}]
   */
  constructor(init = {}) {
    Object.assign(this, init);
  }

  /**
   * Gets a date when a product becomes available.
   * @returns {Date}
   */
  get availabilityDate() {
    return this.#availabilityDate;
  }

  /**
   * Sets a date when a product becomes available.
   * @param {Date} value
   */
  set availabilityDate(value) {
    if (!(value instanceof Date)) {
      throw new TypeError('availabilityDate expects instance of Date as argument.');
    }
    this.#availabilityDate = value;
  }

  /**
   * Gets a date when an item is not valid anymore.
   * @returns {Date}
   */
  get expirationDate() {
    return this.#expirationDate;
  }

  /**
   * Sets a date when an item is not valid anymore.
   * @param {Date} value
   */
  set expirationDate(value) {
    if (!(value instanceof Date)) {
      throw new TypeError('expirationDate expects instance of Date as argument.');
    }
    this.#expirationDate = value;
  }

  /**
   * Gets a product price.
   * @returns {ProductPrice}
   */
  get price() {
    return this.#price;
  }

  /**
   * Sets a product price.
   * @param {ProductPrice} value
   */
  set price(value) {
    if (!(value instanceof ProductPrice)) {
      throw new TypeError('price expects instance of ProductPrice as argument.');
    }
    this.#price = value;
  }

  /**
   * Gets an advertised sale price of an item.
   * @returns {ProductPrice}
   */
  get salePrice() {
    return this.#salePrice;
  }

  /**
   * Sets an advertised sale price of an item.
   * @param {ProductPrice} value
   */
  set salePrice(value) {
    if (!(value instanceof ProductPrice)) {
      throw new TypeError('salePrice expects instance of ProductPrice as argument.');
    }
    this.#salePrice = value;
  }

  /**
   * Gets a date range during which the sale price applies.
   * @returns {ProductDateRange}
   */
  get salePriceEffectiveDate() {
    return this.#salePriceEffectiveDate;
  }

  /**
   * Sets a date range during which the sale price applies.
   * @param {ProductDateRange} value
   */
  set salePriceEffectiveDate(value) {
    if (!(value instanceof ProductDateRange)) {
      throw new TypeError('salePriceEffectiveDate expects instance of ProductDateRange as argument.');
    }
    this.#salePriceEffectiveDate = value;
  }

  /**
   * Gets costs associated with the sale of a single product.
   * @returns {ProductPrice}
   */
  get costOfGoodsSold() {
    return this.#costOfGoodsSold;
  }

  /**
   * Sets costs associated with the sale of a single product.
   * @param {ProductPrice} value
   */
  set costOfGoodsSold(value) {
    if (!(value instanceof ProductPrice)) {
      throw new TypeError('costOfGoodsSold expects instance of ProductPrice as argument.');
    }
    this.#costOfGoodsSold = value;
  }

  /**
   * Gets a measure and dimension of a product.
   * @returns {UnitPricingMeasure}
   */
  get unitPricingMeasure() {
    return this.#unitPricingMeasure;
  }

  /**
   * Sets a measure and dimension of a product.
   * @param {UnitPricingMeasure} value
   */
  set unitPricingMeasure(value) {
    if (!(value instanceof UnitPricingMeasure)) {
      throw new TypeError('unitPricingMeasure expects instance of UnitPricingMeasure as argument.');
    }
    this.#unitPricingMeasure = value;
  }

  /**
   * Gets a unit pricing base measure.
   * @returns {UnitPricingMeasure}
   */
  get unitPricingBaseMeasure() {
    return this.#unitPricingBaseMeasure;
  }

  /**
   * Sets a unit pricing base measure.
   * @param {UnitPricingMeasure} value
   */
  set unitPricingBaseMeasure(value) {
    if (!(value instanceof UnitPricingMeasure)) {
      throw new TypeError('unitPricingBaseMeasure expects instance of UnitPricingMeasure as argument.');
    }
    this.#unitPricingBaseMeasure = value;
  }

  /**
   * Gets a monthly installment plan for a product.
   * @returns {ProductInstallment}
   */
  get installment() {
    return this.#installment;
  }

  /**
   * Sets a monthly installment plan for a product.
   * @param {ProductInstallment} value
   */
  set installment(value) {
    if (!(value instanceof ProductInstallment)) {
      throw new TypeError('installment expects instance of ProductInstallment as argument.');
    }
    this.#installment = value;
  }

  /**
   * Gets a loyalty points program information for a product.
   * @returns {ProductLoyaltyPoints}
   */
  get loyaltyPoints() {
    return this.#loyaltyPoints;
  }

  /**
   * Sets a loyalty points program information for a product.
   * @param {ProductLoyaltyPoints} value
   */
  set loyaltyPoints(value) {
    if (!(value instanceof ProductLoyaltyPoints)) {
      throw new TypeError('loyaltyPoints expects instance of ProductLoyaltyPoints as argument.');
    }
    this.#loyaltyPoints = value;
  }

  /**
   * Gets shipping details of a product.
   * @returns {ProductShipping|Array}
   */
  get shipping() {
    return this.#shipping;
  }

  /**
   * Sets shipping details of a product.
   * @param {ProductShipping|Array} value
   */
  set shipping(value) {
    if (!(value instanceof ProductShipping) && !(value instanceof Array)) {
      throw new TypeError('shipping expects instance of ProductShipping or Array as argument.');
    }
    this.#shipping = value;
  }

  /**
   * Gets a weight of a product used for shipping.
   * @returns {ShippingWeight}
   */
  get shippingWeight() {
    return this.#shippingWeight;
  }

  /**
   * Sets a weight of a product used for shipping.
   * @param {ShippingWeight} value
   */
  set shippingWeight(value) {
    if (!(value instanceof ShippingWeight)) {
      throw new TypeError('shippingWeight expects instance of ShippingWeight as argument.');
    }
    this.#shippingWeight = value;
  }

  /**
   * Gets a length of a product used for shipping.
   * @returns {ShippingDimension}
   */
  get shippingLength() {
    return this.#shippingLength;
  }

  /**
   * Sets a length of a product used for shipping.
   * @param {ShippingDimension} value
   */
  set shippingLength(value) {
    if (!(value instanceof ShippingDimension)) {
      throw new TypeError('shippingLength expects instance of ShippingDimension as argument.');
    }
    this.#shippingLength = value;
  }

  /**
   * Gets a width of a product used for shipping.
   * @returns {ShippingDimension}
   */
  get shippingWidth() {
    return this.#shippingWidth;
  }

  /**
   * Sets a width of a product used for shipping.
   * @param {ShippingDimension} value
   */
  set shippingWidth(value) {
    if (!(value instanceof ShippingDimension)) {
      throw new TypeError('shippingWidth expects instance of ShippingDimension as argument.');
    }
    this.#shippingWidth = value;
  }

  /**
   * Gets a height of a product used for shipping.
   * @returns {ShippingDimension}
   */
  get shippingHeight() {
    return this.#shippingHeight;
  }

  /**
   * Sets a height of a product used for shipping.
   * @param {ShippingDimension} value
   */
  set shippingHeight(value) {
    if (!(value instanceof ShippingDimension)) {
      throw new TypeError('shippingHeight expects instance of ShippingDimension as argument.');
    }
    this.#shippingHeight = value;
  }

  /**
   * Gets a tax rate of a product.
   * @returns {ProductTax|Array}
   */
  get tax() {
    return this.#tax;
  }

  /**
   * Sets a tax rate of a product.
   * @param {ProductTax|Array} value
   */
  set tax(value) {
    if (!(value instanceof ProductTax) && !(value instanceof Array)) {
      throw new TypeError('tax expects instance of ProductTax or Array as argument.');
    }
    this.#tax = value;
  }
}
