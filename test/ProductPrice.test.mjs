import test from 'node:test';
import assert from 'node:assert/strict';

import {
  ProductPrice,
} from '../src/index.mjs';

test('ProductPrice arguments validation', async (t) => {
  await t.test('valid price and currency accepted in constructor', async () => {
    const actual = new ProductPrice(10, 'EUR');

    assert(actual.price, 10);
    assert(actual.currency, 'EUR');
  });
});
