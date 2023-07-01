/* eslint-disable no-undef,no-new */
const {
  ProductDateRange,
} = require('../index');

describe('ProductDateRange arguments validation', () => {
  it('dateFrom throws when assigned an instance of incompatible object.', () => {
    expect(() => {
      new ProductDateRange({}, new Date('2016-02-29T15:30-0800'));
    }).toThrow(Error);
  });

  it('dateFrom accepts when assigned an instance of a Date object.', () => {
    const actual = new ProductDateRange(new Date('2016-02-24T13:00-0800'), new Date('2016-02-29T15:30-0800'));

    expect(actual.dateFrom.toISOString()).toEqual('2016-02-24T21:00:00.000Z');
  });

  it('dateTo throws when assigned an instance of incompatible object.', () => {
    expect(() => {
      new ProductDateRange(new Date('2016-02-24T13:00-0800'), {});
    }).toThrow(Error);
  });

  it('dateTo accepts when assigned an instance of a Date object.', () => {
    const actual = new ProductDateRange(new Date('2016-02-24T13:00-0800'), new Date('2016-02-29T15:30-0800'));

    expect(actual.dateTo.toISOString()).toEqual('2016-02-29T23:30:00.000Z');
  });
});
