---
date: 2020-08-07
description: Define a transfer rule, specify one vendor, which products, the vendor rate to transfer for each transaction
---

# Connect

A connect defines a transfer rule where you can specify one vendor, which products and the vendor rate to transfer for each transaction

A Vendor could have one or more connects.

Stripe Payment Forms and Commerce Products are allowed

## How to create a Connect?

A connect can be created from two scenarios:

### Create Connect from the Control Panel

On your Craft CMS dashboard, please go to Stripe Payments → Connect 

Select the Connect type:

- *Stripe Payment Forms:* It will allow to select Stripe Payment forms
- *Product (Commerce):* It will allow to select Commerce Products

Click on `New Connect`

The connect also will be automatically created if the Vendor adds a product via the front-end

![Connect Index](https://enupal.com/assets/docs/enupal-stripe-connect-6.png)

## How a vendor can add products via the front-end? 

Once a Vendor is logged in and go to `marketplace/products` (from our [sample templates](https://github.com/enupal/stripe/tree/master/templates)) when the vendor creates a new product, if the user does not have a connect yet, it will automatically create one connect (the vendor rate will be the global vendor rate from your Settings). If the vendor already have one connect it will take the first connect and associate the product to that connect.

### Create Commerce Products

To a Vendor be able to create products via the front-end make sure that has the following permissions:

- General
    - Access the control panel
    - Access Craft Commerce
- Craft Commerce
    - Manage products

## allProducts

The `allProducts` connect setting will transfer this vendorRate when any product is sell. If this setting is enabled will convert this vendor into `superVendor` that means that could update any product from the front-end.


![Edit Connect](https://enupal.com/assets/docs/enupal-stripe-connect-7.png)
