/* eslint-disable no-undef */

const {
  Product,
  ProductPrice,
  UnitPricingMeasure,
  ProductInstallment,
  ProductDateRange,
  ProductLoyaltyPoints,
  ProductShipping,
  ShippingWeight,
  ShippingDimension,
  ProductTax,
} = require('../index');

describe('Product arguments validation', () => {
  it('price throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    expect(() => {
      actual.price = {};
    }).toThrow(Error);
  });

  it('price accepts when assigned an instance of Date.', () => {
    const actual = new Product();
    actual.price = new ProductPrice(10, 'EUR');

    expect(actual.price).toBeInstanceOf(ProductPrice);
  });

  it('salePrice throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    expect(() => {
      actual.salePrice = {};
    }).toThrow(Error);
  });

  it('salePrice accepts when assigned an instance of Date.', () => {
    const actual = new Product();
    actual.salePrice = new ProductPrice(10, 'EUR');

    expect(actual.salePrice).toBeInstanceOf(ProductPrice);
  });

  it('costOfGoodsSold throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    expect(() => {
      actual.costOfGoodsSold = {};
    }).toThrow(Error);
  });

  it('costOfGoodsSold accepts when assigned an instance of Date.', () => {
    const actual = new Product();
    actual.costOfGoodsSold = new ProductPrice(10, 'EUR');

    expect(actual.costOfGoodsSold).toBeInstanceOf(ProductPrice);
  });

  it('availabilityDate throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    expect(() => {
      actual.availabilityDate = {};
    }).toThrow(Error);
  });

  it('availabilityDate accepts when assigned an instance of Date.', () => {
    const actual = new Product();
    actual.availabilityDate = new Date('2016-02-24T13:00-0800');

    expect(actual.availabilityDate).toBeInstanceOf(Date);
  });

  it('expirationDate throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    expect(() => {
      actual.expirationDate = {};
    }).toThrow(Error);
  });

  it('expirationDate accepts when assigned an instance of Date.', () => {
    const actual = new Product();
    actual.expirationDate = new Date('2016-02-24T13:00-0800');

    expect(actual.expirationDate).toBeInstanceOf(Date);
  });

  it('salePriceEffectiveDate throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    expect(() => {
      actual.salePriceEffectiveDate = {};
    }).toThrow(Error);
  });

  it('salePriceEffectiveDate accepts when assigned an instance of ProductDateRange.', () => {
    const actual = new Product();
    actual.salePriceEffectiveDate = new ProductDateRange(new Date('2016-02-24T13:00-0800'), new Date('2016-02-29T15:30-0800'));

    expect(actual.salePriceEffectiveDate.dateFrom).toBeInstanceOf(Date);
    expect(actual.salePriceEffectiveDate.dateTo).toBeInstanceOf(Date);
  });

  it('unitPricingMeasure throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    expect(() => {
      actual.unitPricingMeasure = {};
    }).toThrow(Error);
  });

  it('unitPricingMeasure accepts when assigned an instance of UnitPricingMeasure.', () => {
    const actual = new Product();
    actual.unitPricingMeasure = new UnitPricingMeasure(100, 'ml');

    expect(actual.unitPricingMeasure).toBeInstanceOf(UnitPricingMeasure);
  });

  it('unitPricingBaseMeasure throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    expect(() => {
      actual.unitPricingBaseMeasure = {};
    }).toThrow(Error);
  });

  it('unitPricingBaseMeasure accepts when assigned an instance of UnitPricingMeasure.', () => {
    const actual = new Product();
    actual.unitPricingBaseMeasure = new UnitPricingMeasure(100, 'ml');

    expect(actual.unitPricingBaseMeasure).toBeInstanceOf(UnitPricingMeasure);
  });

  it('installment throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    expect(() => {
      actual.installment = {};
    }).toThrow(Error);
  });

  it('installment accepts when assigned an instance of ProductInstallment.', () => {
    const actual = new Product();
    actual.installment = new ProductInstallment(6, new ProductPrice(10, 'EUR'));

    expect(actual.installment).toBeInstanceOf(ProductInstallment);
  });

  it('loyaltyPoints throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    expect(() => {
      actual.loyaltyPoints = {};
    }).toThrow(Error);
  });

  it('loyaltyPoints accepts when assigned an instance of ProductLoyaltyPoints.', () => {
    const actual = new Product();
    actual.loyaltyPoints = new ProductLoyaltyPoints('EUR', 10, 0.8);

    expect(actual.loyaltyPoints).toBeInstanceOf(ProductLoyaltyPoints);
  });

  it('shipping throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    expect(() => {
      actual.shipping = {};
    }).toThrow(Error);
  });

  it('shipping accepts when assigned an instance of ProductShipping.', () => {
    const actual = new Product();
    actual.shipping = new ProductShipping(new ProductPrice(10, 'EUR'));

    expect(actual.shipping).toBeInstanceOf(ProductShipping);
  });

  it('shippingWeight throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    expect(() => {
      actual.shippingWeight = {};
    }).toThrow(Error);
  });

  it('shippingWeight accepts when assigned an instance of ShippingWeight.', () => {
    const actual = new Product();
    actual.shippingWeight = new ShippingWeight(20, 'kg');

    expect(actual.shippingWeight).toBeInstanceOf(ShippingWeight);
  });

  it('shippingLength throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    expect(() => {
      actual.shippingLength = {};
    }).toThrow(Error);
  });

  it('shippingLength accepts when assigned an instance of ShippingDimension.', () => {
    const actual = new Product();
    actual.shippingLength = new ShippingDimension(250, 'cm');

    expect(actual.shippingLength).toBeInstanceOf(ShippingDimension);
  });

  it('shippingWidth throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    expect(() => {
      actual.shippingWidth = {};
    }).toThrow(Error);
  });

  it('shippingWidth accepts when assigned an instance of ShippingDimension.', () => {
    const actual = new Product();
    actual.shippingWidth = new ShippingDimension(250, 'cm');

    expect(actual.shippingWidth).toBeInstanceOf(ShippingDimension);
  });

  it('shippingHeight throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    expect(() => {
      actual.shippingHeight = {};
    }).toThrow(Error);
  });

  it('shippingHeight accepts when assigned an instance of ShippingDimension.', () => {
    const actual = new Product();
    actual.shippingHeight = new ShippingDimension(250, 'cm');

    expect(actual.shippingHeight).toBeInstanceOf(ShippingDimension);
  });

  it('tax throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    expect(() => {
      actual.tax = {};
    }).toThrow(Error);
  });

  it('tax accepts when assigned an instance of ProductTax.', () => {
    const actual = new Product();
    actual.tax = new ProductTax();

    expect(actual.tax).toBeInstanceOf(ProductTax);
  });
});
