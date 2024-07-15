 import test from 'node:test';
import assert from 'node:assert/strict';

import {
  ProductDateRange,
} from '../src/index.mjs';

test('ProductDateRange arguments validation', async (t) => {
  await t.test('dateFrom throws when assigned an instance of incompatible object.', async () => {
    assert.throws(
      () => {
        new ProductDateRange({}, new Date('2016-02-29T15:30-0800'));
      },
      Error,
    );
  });

  await t.test('dateFrom accepts when assigned an instance of a Date object.', async () => {
    const actual = new ProductDateRange(new Date('2016-02-24T13:00-0800'), new Date('2016-02-29T15:30-0800'));

    assert.equal(actual.dateFrom.toISOString(), '2016-02-24T21:00:00.000Z');
  });

  await t.test('dateTo throws when assigned an instance of incompatible object.', async () => {
    assert.throws(
      () => {
        new ProductDateRange(new Date('2016-02-24T13:00-0800'), {});
      },
      Error,
    );
  });

  await t.test('dateTo accepts when assigned an instance of a Date object.', async () => {
    const actual = new ProductDateRange(new Date('2016-02-24T13:00-0800'), new Date('2016-02-29T15:30-0800'));

    assert.equal(actual.dateTo.toISOString(), '2016-02-29T23:30:00.000Z');
  });
});
