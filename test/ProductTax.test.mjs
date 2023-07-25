import test from 'node:test';
import assert from 'node:assert/strict';

import {
  ProductTax,
} from '../src/index.mjs';

test('ProductTax arguments validation', async (t) => {
  await t.test('valid data accepted', async () => {
    const actual = new ProductTax();
    actual.country = 'US';
    actual.region = 'MA';
    actual.rate = 5.00;
    actual.taxShip = true;

    assert.equal(actual.country, 'US');
    assert.equal(actual.region, 'MA');
    assert.equal(actual.rate, 5.00);
    assert.equal(actual.taxShip, true);
  });
});
