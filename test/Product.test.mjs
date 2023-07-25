import test from 'node:test';
import assert from 'node:assert/strict';

import {
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
} from '../src/index.mjs';

test('Product arguments validation', async (t) => {
  await t.test('price throws when assigned an instance of incompatible object.', async () => {
    const actual = new Product();

    assert.throws(
      () => {
        actual.price = {};
      },
      Error,
    );
  });

  await t.test('price accepts when assigned an instance of Date.', async () => {
    const actual = new Product();
    actual.price = new ProductPrice(10, 'EUR');

    assert(actual.price instanceof ProductPrice);
  });

  await t.test('salePrice throws when assigned an instance of incompatible object.', async () => {
    const actual = new Product();

    assert.throws(
      () => {
        actual.salePrice = {};
      },
      Error,
    );
  });

  await t.test('salePrice accepts when assigned an instance of Date.', async () => {
    const actual = new Product();
    actual.salePrice = new ProductPrice(10, 'EUR');

    assert(actual.salePrice instanceof ProductPrice);
  });

  await t.test('costOfGoodsSold throws when assigned an instance of incompatible object.', async () => {
    const actual = new Product();

    assert.throws(
      () => {
        actual.costOfGoodsSold = {};
      },
      Error,
    );
  });

  await t.test('costOfGoodsSold accepts when assigned an instance of Date.', async () => {
    const actual = new Product();
    actual.costOfGoodsSold = new ProductPrice(10, 'EUR');

    assert(actual.costOfGoodsSold instanceof ProductPrice);
  });

  await t.test('availabilityDate throws when assigned an instance of incompatible object.', async () => {
    const actual = new Product();

    assert.throws(
      () => {
        actual.availabilityDate = {};
      },
      Error,
    );
  });

  await t.test('availabilityDate accepts when assigned an instance of Date.', async () => {
    const actual = new Product();
    actual.availabilityDate = new Date('2016-02-24T13:00-0800');

    assert(actual.availabilityDate instanceof Date);
  });

  await t.test('expirationDate throws when assigned an instance of incompatible object.', async () => {
    const actual = new Product();

    assert.throws(
      () => {
        actual.expirationDate = {};
      },
      Error,
    );
  });

  await t.test('expirationDate accepts when assigned an instance of Date.', async () => {
    const actual = new Product();
    actual.expirationDate = new Date('2016-02-24T13:00-0800');

    assert(actual.expirationDate instanceof Date);
  });

  await t.test('salePriceEffectiveDate throws when assigned an instance of incompatible object.', async () => {
    const actual = new Product();

    assert.throws(
      () => {
        actual.salePriceEffectiveDate = {};
      },
      Error,
    );
  });

  await t.test('salePriceEffectiveDate accepts when assigned an instance of ProductDateRange.', async () => {
    const actual = new Product();
    actual.salePriceEffectiveDate = new ProductDateRange(new Date('2016-02-24T13:00-0800'), new Date('2016-02-29T15:30-0800'));

    assert(actual.salePriceEffectiveDate.dateFrom instanceof Date);
    assert(actual.salePriceEffectiveDate.dateTo instanceof Date);
  });

  await t.test('unitPricingMeasure throws when assigned an instance of incompatible object.', async () => {
    const actual = new Product();

    assert.throws(
      () => {
        actual.unitPricingMeasure = {};
      },
      Error,
    );
  });

  await t.test('unitPricingMeasure accepts when assigned an instance of UnitPricingMeasure.', async () => {
    const actual = new Product();
    actual.unitPricingMeasure = new UnitPricingMeasure(100, 'ml');

    assert(actual.unitPricingMeasure instanceof UnitPricingMeasure);
  });

  await t.test('unitPricingBaseMeasure throws when assigned an instance of incompatible object.', async () => {
    const actual = new Product();

    assert.throws(
      () => {
        actual.unitPricingBaseMeasure = {};
      },
      Error,
    );
  });

  await t.test('unitPricingBaseMeasure accepts when assigned an instance of UnitPricingMeasure.', async () => {
    const actual = new Product();
    actual.unitPricingBaseMeasure = new UnitPricingMeasure(100, 'ml');

    assert(actual.unitPricingBaseMeasure instanceof UnitPricingMeasure);
  });

  await t.test('installment throws when assigned an instance of incompatible object.', async () => {
    const actual = new Product();

    assert.throws(
      () => {
        actual.installment = {};
      },
      Error,
    );
  });

  await t.test('installment accepts when assigned an instance of ProductInstallment.', async () => {
    const actual = new Product();
    actual.installment = new ProductInstallment(6, new ProductPrice(10, 'EUR'));

    assert(actual.installment instanceof ProductInstallment);
  });

  await t.test('loyaltyPoints throws when assigned an instance of incompatible object.', async () => {
    const actual = new Product();

    assert.throws(
      () => {
        actual.loyaltyPoints = {};
      },
      Error,
    );
  });

  await t.test('loyaltyPoints accepts when assigned an instance of ProductLoyaltyPoints.', async () => {
    const actual = new Product();
    actual.loyaltyPoints = new ProductLoyaltyPoints('EUR', 10, 0.8);

    assert(actual.loyaltyPoints instanceof ProductLoyaltyPoints);
  });

  await t.test('shipping throws when assigned an instance of incompatible object.', async () => {
    const actual = new Product();

    assert.throws(
      () => {
        actual.shipping = {};
      },
      Error,
    );
  });

  await t.test('shipping accepts when assigned an instance of ProductShipping.', async () => {
    const actual = new Product();
    actual.shipping = new ProductShipping(new ProductPrice(10, 'EUR'));

    assert(actual.shipping instanceof ProductShipping);
  });

  await t.test('shippingWeight throws when assigned an instance of incompatible object.', async () => {
    const actual = new Product();

    assert.throws(
      () => {
        actual.shippingWeight = {};
      },
      Error,
    );
  });

  await t.test('shippingWeight accepts when assigned an instance of ShippingWeight.', async () => {
    const actual = new Product();
    actual.shippingWeight = new ShippingWeight(20, 'kg');

    assert(actual.shippingWeight instanceof ShippingWeight);
  });

  await t.test('shippingLength throws when assigned an instance of incompatible object.', async () => {
    const actual = new Product();

    assert.throws(
      () => {
        actual.shippingLength = {};
      },
      Error,
    );
  });

  await t.test('shippingLength accepts when assigned an instance of ShippingDimension.', async () => {
    const actual = new Product();
    actual.shippingLength = new ShippingDimension(250, 'cm');

    assert(actual.shippingLength instanceof ShippingDimension);
  });

  await t.test('shippingWidth throws when assigned an instance of incompatible object.', async () => {
    const actual = new Product();

    assert.throws(
      () => {
        actual.shippingWidth = {};
      },
      Error,
    );
  });

  await t.test('shippingWidth accepts when assigned an instance of ShippingDimension.', async () => {
    const actual = new Product();
    actual.shippingWidth = new ShippingDimension(250, 'cm');

    assert(actual.shippingWidth instanceof ShippingDimension);
  });

  await t.test('shippingHeight throws when assigned an instance of incompatible object.', async () => {
    const actual = new Product();

    assert.throws(
      () => {
        actual.shippingHeight = {};
      },
      Error,
    );
  });

  await t.test('shippingHeight accepts when assigned an instance of ShippingDimension.', async () => {
    const actual = new Product();
    actual.shippingHeight = new ShippingDimension(250, 'cm');

    assert(actual.shippingHeight instanceof ShippingDimension);
  });

  await t.test('tax throws when assigned an instance of incompatible object.', async () => {
    const actual = new Product();

    assert.throws(
      () => {
        actual.tax = {};
      },
      Error,
    );
  });

  await t.test('tax accepts when assigned an instance of ProductTax.', async () => {
    const actual = new Product();
    actual.tax = new ProductTax();

    assert(actual.tax instanceof ProductTax);
  });
});
