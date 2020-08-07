---
date: 2020-08-07
description: Define a transfer rule, specify one vendor, which products, the vendor rate to transfer for each transaction
---

# Connect

A connect defines a transfer rule where you can specify one vendor, which products and the vendor rate to transfer for each transaction

A Vendor could have one or more connects.

For now, only Stripe Payment Forms are accepted as products, however Craft Commerce Products are planned (coming soon)

## How to create a Connect?

A connect can be created from two scenarios:

1.- From the CP. Under Stripe Payments → Connect on the index page click on "Create Connect"

![Connect Index](https://enupal.com/assets/docs/enupal-stripe-connect-6.png)

2.- From the Front-end, from our example templates go to `marketplace/account` if the user does not have a connect yet, it will automatically created when the Vendor creates a Product, clicking on "New Product"
 
## allProducts

The `allProducts` connect setting will transfer this vendorRate when any product is sell. If this setting is enabled will convert this vendor into `superVendor` that means that could update any product from the front-end.


![Edit Connect](https://enupal.com/assets/docs/enupal-stripe-connect-7.png)
