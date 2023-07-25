/* eslint-disable no-new */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  ProductPrice,
  ProductInstallment,
} from '../src/index.mjs';

test('ProductInstallment arguments validation', async (t) => {
  await t.test('valid data accepted in constructor', async () => {
    const actual = new ProductInstallment(6, new ProductPrice(30, 'EUR'));

    assert.equal(actual.months, 6);
    assert(actual.amount instanceof ProductPrice);
  });

  await t.test('throws error if price is not provided in constructor', async () => {
    assert.throws(
      () => {
        new ProductInstallment(6, {});
      },
      Error,
    );
  });
});
