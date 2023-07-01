module.exports = {
    Product: require('./src/Product'),
    ProductPrice: require('./src/ProductPrice'),
    ProductInstallment: require('./src/ProductInstallment'),
    ProductDateRange: require('./src/ProductDateRange'),
    ProductLoyaltyPoints: require('./src/ProductLoyaltyPoints'),
    ProductShipping: require('./src/ProductShipping'),
    ProductTax: require('./src/ProductTax'),
    FeedBuilder: require('./src/FeedBuilder')
}

Object.assign(module.exports, require('./src/Units'));