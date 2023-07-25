import test from 'node:test';
import assert from 'node:assert/strict';

import {
  ProductLoyaltyPoints,
} from '../src/index.mjs';

test('ProductLoyaltyPoints arguments validation', async (t) => {
  await t.test('valid data accepted in constructor', async () => {
    const actual = new ProductLoyaltyPoints('EUR', 10, 0.5);

    assert.equal(actual.name, 'EUR');
    assert.equal(actual.pointsValue, 10);
    assert.equal(actual.ratio, 0.5);
  });

  await t.test('default ratio is set when not specified in constructor', async () => {
    const actual = new ProductLoyaltyPoints('EUR', 10);

    assert.equal(actual.ratio, 1.0);
  });
});
