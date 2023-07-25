/* eslint-disable no-new */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  ProductPrice,
  ProductShipping,
} from '../src/index.mjs';

test('ProductShipping arguments validation', async (t) => {
  await t.test('valid data accepted in constructor', async () => {
    const actual = new ProductShipping(new ProductPrice(30, 'EUR'));

    assert(actual.price instanceof ProductPrice);
  });

  await t.test('throws error if price is not provided in constructor', async () => {
    assert.throws(
      () => {
        new ProductShipping(6, {});
      },
      Error,
    );
  });
});
