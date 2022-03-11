---
date: 2022-03-09
description: The Cart API is used to interact with a cart during a customer's session; and provides you the quickest way to build conversion-optimized final checkout page, hosted on Stripe Checkout
---

# Overview

The Cart API is used to interact with a cart during a customer's session; and provides you the quickest way to build conversion-optimized final checkout page, hosted on [Stripe Checkout](https://stripe.com/docs/payments/checkout).

The following Cart API endpoints are available:

```php Endpoints
GET  /enupal-payments/cart
POST /enupal-payments/cart/add
POST /enupal-payments/cart/update
POST /enupal-payments/cart/clear
POST /enupal-payments/cart/checkout
```

And the following settings are available on your Craft CMS control panel:

- Over 18 payment methods
- Over 40 languages including auto-detect for the final checkout page
- Collect Billing and Shipping addresses
- Shipping options (for one-time payments)
- [Automatic Tax](https://stripe.com/tax) calculate and collect sales tax, VAT, and GST with the click of a button. Know where to register, automatically collect the right amount of tax, and access the reports you need to file returns.
- Promotion Codes
- Collect customer phone number
- Product Field Type, to integrate the power of Craft CMS and Stripe
- Abandoned carts `(coming soon)`

::: tip
The Cart API is available on the Stripe Payments `pro` edition
:::

## How it works?

Stripe Payments will sync the Products and Prices created on the Stripe dashboard (One-Time and Recurring) via webhooks, you will be able to see the products on the Craft CMS dashboard.

Once the Products are synced, you can go ahead and start creating your Cart behavior on your front-end site, either displaying the Products and Prices as they come from Stripe using our Product and Price elements or simply creating a Stripe Payments Product field type and adding it into your Craft CMS section layouts, this is useful if you need to add more info to your Products besides the info stored on Stripe like images, handling inventory, SEO data, etc.

The API endpoints listed above only need the Stripe Price Ids, one Product can have one or more prices.

### Checkout the cart

When the user wants checkout the cart, the `/enupal-payments/cart/checkout` endpoint will return a Stripe Checkout URL and the user will be redirected to the [Stripe Checkout page](https://stripe.com/payments/checkout) with all the items added to the cart.

After the user pays, will be redirected to the Craft CMS site and an order will be created on the Stripe Payments plugin.

::: tip
If you want to explore all the Stripe Checkout features try a live example [here](https://checkout.stripe.dev/)
:::
 
 

