/* eslint-disable no-undef */
const fs = require('fs');

const {
  FeedBuilder,
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

describe('XML feed generation', () => {
  it('Generates document with example definitions', () => {
    const pickwick = new Product();
    pickwick.id = 'id-pickwick-papers-dickens';
    pickwick.title = 'The Pickwick Papers: Charles Dickens';
    pickwick.brand = 'Penguin Clothbound Classics';
    pickwick.condition = Product.CONDITION.NEW;
    pickwick.availability = Product.AVAILABILITY.PREORDER;
    pickwick.price = new ProductPrice(15.99, 'USD');

    const hesse = new Product();
    hesse.id = 'id-glass-bead-game-hesse';
    hesse.title = 'The Glass Bead Game: Hermann Hesse';
    hesse.brand = 'Vintage Classics';
    hesse.condition = Product.CONDITION.NEW;
    hesse.availability = Product.AVAILABILITY.IN_STOCK;
    hesse.price = new ProductPrice(10.99, 'USD');

    const xml = new FeedBuilder()
      .withTitle('Books')
      .withLink('https://www.example.com')
      .withDescription('My books')
      .withProduct(pickwick)
      .withProduct(hesse)
      .buildXml();

    const expectedXml = fs.readFileSync('test/fixtures/example_feed.xml').toString();

    expect(xml).toEqual(expectedXml);
  });

  it('Generates document with example definitions passed as array', () => {
    const pickwick = new Product();
    pickwick.id = 'id-pickwick-papers-dickens';
    pickwick.title = 'The Pickwick Papers: Charles Dickens';
    pickwick.brand = 'Penguin Clothbound Classics';
    pickwick.condition = Product.CONDITION.NEW;
    pickwick.availability = Product.AVAILABILITY.PREORDER;
    pickwick.price = new ProductPrice(15.99, 'USD');

    const hesse = new Product();
    hesse.id = 'id-glass-bead-game-hesse';
    hesse.title = 'The Glass Bead Game: Hermann Hesse';
    hesse.brand = 'Vintage Classics';
    hesse.condition = Product.CONDITION.NEW;
    hesse.availability = Product.AVAILABILITY.IN_STOCK;
    hesse.price = new ProductPrice(10.99, 'USD');

    const xml = new FeedBuilder()
      .withTitle('Books')
      .withLink('https://www.example.com')
      .withDescription('My books')
      .withProduct(pickwick)
      .withProducts([hesse])
      .buildXml();

    const expectedXml = fs.readFileSync('test/fixtures/example_feed.xml').toString();

    expect(xml).toEqual(expectedXml);
  });

  it('Generates document with all definitions', () => {
    const product1 = new Product();
    product1.id = 'tddy123uk';
    product1.title = 'Google Organic Cotton Men\'s T-Shirt - Blue - M';
    product1.description = 'These pens feature a generous grip for comfortable writing and a retractable ballpoint.';
    product1.link = 'http://www.example.com/writing/google-pens';
    product1.imageLink = 'http://www.example.com/image1.jpg';
    product1.mobileLink = 'http://www.m.example.com/writing/fiji-pens';
    product1.additionalImageLink = 'http://www.example.com/image2.jpg';
    product1.availability = Product.AVAILABILITY.IN_STOCK;
    product1.availabilityDate = new Date('2016-11-25T13:00-0800');
    product1.expirationDate = new Date('2016-02-24');
    product1.price = new ProductPrice(15, 'USD');
    product1.salePrice = new ProductPrice(10, 'USD');
    product1.salePriceEffectiveDate = new ProductDateRange(new Date('2016-02-24T13:00-0800'), new Date('2016-02-29T15:30-0800'));
    product1.costOfGoodsSold = new ProductPrice(10.01, 'USD');
    product1.unitPricingMeasure = new UnitPricingMeasure(750, 'ml');
    product1.unitPricingBaseMeasure = new UnitPricingMeasure(100, 'oz');
    product1.installment = new ProductInstallment(6, new ProductPrice(50, 'BRL'));
    product1.loyaltyPoints = new ProductLoyaltyPoints('Program A', 100, 1.0);
    product1.googleProductCategory = '2271';
    product1.productType = 'Home > Dresses > Maxi Dresses';
    product1.brand = 'Google';
    product1.gtin = 3234567890126;
    product1.mpn = 'GO12345OOGLE';
    // TODO: Check yes/no
    product1.identifierExists = false;
    product1.condition = Product.CONDITION.USED;
    // TODO: Check yes/no
    product1.adult = true;
    product1.multipack = 6;
    // TODO: Check yes/no
    product1.isBundle = true;
    product1.energyEfficiencyClass = 'A+';
    product1.minEnergyEfficiencyClass = 'A';
    product1.maxEnergyEfficiencyClass = 'D';
    product1.ageGroup = Product.AGE_GROUP.ADULT;
    product1.color = 'Orange Mango Explosion';
    product1.gender = Product.GENDER.MALE;
    product1.material = 'Leather';
    product1.pattern = 'Striped';
    product1.size = 'XL';
    product1.sizeType = Product.SIZE_TYPE.PETITE;
    product1.sizeSystem = Product.SIZE_SYSTEM.US;
    product1.itemGroupId = 'AB12345';
    product1.adwordsRedirect = 'http://tracking.example.com?product=ballpoint-pens';
    product1.customLabels[0] = 'summer';
    product1.customLabels[2] = 'spring';
    product1.customLabels[4] = 'winter';
    product1.promotionId = 'tbby123_us';
    product1.includedDestination = Product.ADS_DESTINATION.DISPLAY_ADS;
    product1.excludedDestination = [
      Product.ADS_DESTINATION.SHOPPING,
      Product.ADS_DESTINATION.DISPLAY_ADS];

    const product1Shipping1 = new ProductShipping(new ProductPrice(6.49, 'USD'));
    product1Shipping1.country = 'US';
    product1Shipping1.region = 'MA';
    product1Shipping1.service = 'Ground';

    const product1Shipping2 = new ProductShipping(new ProductPrice(15.99, 'USD'));
    product1Shipping2.country = 'US';
    product1Shipping2.region = 'MA';
    product1Shipping2.service = 'Express';

    product1.shipping = [product1Shipping1, product1Shipping2];
    product1.shippingLabel = 'oversized';
    product1.shippingWeight = new ShippingWeight(3, 'kg');
    product1.shippingLength = new ShippingDimension(20, 'in');
    product1.shippingWidth = new ShippingDimension(40, 'in');
    product1.shippingHeight = new ShippingDimension(10, 'in');
    product1.minHandlingTime = 1;
    product1.maxHandlingTime = 3;

    const product1Tax1 = new ProductTax();
    product1Tax1.country = 'US';
    product1Tax1.region = 'MA';
    product1Tax1.rate = 5.00;
    product1Tax1.taxShip = true;

    const product1Tax2 = new ProductTax();
    product1Tax2.country = 'US';
    product1Tax2.region = 'WA';
    product1Tax2.rate = 4;
    product1Tax2.taxShip = false;

    product1.tax = [product1Tax1, product1Tax2];
    product1.taxCategory = 'apparel';

    const product2 = new Product();
    product2.id = 200;
    product2.title = 'Sample title 2';
    product2.price = new ProductPrice(9.99, 'eur');
    product2.googleProductCategory = 'Apparel & Accessories > Clothing > Dresses';
    product2.productType = ['category 1', 'category 2'];
    product2.additionalImageLink = ['http://www.example.com/image0.jpg', 'http://www.example.com/image1.jpg'];

    const product2Shipping1 = new ProductShipping(new ProductPrice(1.99, 'EUR'));
    product2Shipping1.country = 'DE';
    product2Shipping1.region = 'Berlin';
    product2Shipping1.service = 'Express';

    product2.shipping = product2Shipping1;

    const product2Tax1 = new ProductTax();
    product2Tax1.country = 'DE';
    product2Tax1.region = 'Berlin';
    product2Tax1.rate = 3.5;
    product2Tax1.taxShip = false;

    product2.tax = product2Tax1;

    const actualXml = new FeedBuilder()
      .withTitle('Test title')
      .withLink('https://www.example.com')
      .withDescription('Sample description')
      .withProduct(product1)
      .withProduct(product2)
      .buildXml();

    const expectedXml = fs.readFileSync('test/fixtures/sample_valid_feed.xml').toString();

    expect(actualXml).toEqual(expectedXml);
  });
});
