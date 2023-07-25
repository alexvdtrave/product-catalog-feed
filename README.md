# product-catalog-feed

A framework to generate product catalog feed according to [Google Merchant Product Data Feed](https://support.google.com/merchants/answer/7052112) specification and [Facebook Business Product Data Catalog RSS XML Feed](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads/product-catalog#feed-format).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing
```
npm install @alexvdtrave/product-catalog-feed
```

### Using

Here is an example of how a product feed can be generated.

```JavaScript
import { Product, ProductPrice, FeedBuilder } from '@alexvdtrave/product-catalog-feed';

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
```
The following XML document is generated.

```XML
<?xml version="1.0" encoding="utf-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Books</title>
    <link>https://www.example.com</link>
    <description>My books</description>
    <item>
      <g:id>id-pickwick-papers-dickens</g:id>
      <title>The Pickwick Papers: Charles Dickens</title>
      <g:availability>preorder</g:availability>
      <g:price>15.99 USD</g:price>
      <g:brand>Penguin Clothbound Classics</g:brand>
      <g:condition>new</g:condition>
    </item>
    <item>
      <g:id>id-glass-bead-game-hesse</g:id>
      <title>The Glass Bead Game: Hermann Hesse</title>
      <g:availability>in stock</g:availability>
      <g:price>10.99 USD</g:price>
      <g:brand>Vintage Classics</g:brand>
      <g:condition>new</g:condition>
    </item>
  </channel>
</rss>
```

## Running the tests
```
npm test
npm run lint
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.