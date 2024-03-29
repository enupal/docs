---
date: 2022-03-09
description: The Cart API is used to interact with a cart during a customer's session; and provides you the quickest way to build conversion-optimized final checkout page, hosted on Stripe Checkout
---

# Overview

Stripe Payments Pro, have two main features:

1. [Cart API](/stripe-payments/pro/cart-api): A collection of endpoints to retrieve, add, update, clear items, and checkout a Cart:
```php Endpoints
GET  /enupal-stripe/cart
POST /enupal-stripe/cart/add
POST /enupal-stripe/cart/update
POST /enupal-stripe/cart/clear
POST /enupal-stripe/cart/checkout
```
2. [Checkout](/stripe-payments/pro/checkout): A twig tag to be used on your templates to retrieve a [Stripe Checkout session](https://stripe.com/docs/api/checkout/sessions) to process Stripe Products:

```twig
{% set items = [
    {
        "price": "price_1KErstLLWVlbcCFQEGHbAgdl",
        "quantity": 2
    }
]
%}

{% set checkoutSession = craft.enupalStripe.checkout(items) %}

<a href="{{ checkoutSession.url }}">Pay</a>
```

Both features are completely separate functionalities you can choose to use one or both at the same time, these features are perfect to be used to interact with a customer's session; and provides you the quickest way to build a conversion-optimized final checkout page, hosted on [Stripe Checkout](https://stripe.com/docs/payments/checkout).

::: tip
If you want to explore all the Stripe Checkout features try a live example [here](https://checkout.stripe.dev/)
:::

The `Cart API` and the `checkout` twig tag, will be controlled by the following `Pro` settings available on your Craft CMS control panel:

- Sync [Stripe Products and Prices](./products)
- Over 18 payment methods
- Over 40 languages including auto-detect for the final checkout page
- Collect Billing and Shipping addresses
- Shipping options (for one-time payments)
- [Automatic Tax](https://stripe.com/tax) calculate and collect sales tax, VAT, and GST with the click of a button. Know where to register, automatically collect the right amount of tax, and access the reports you need to file returns.
- Promotion Codes
- Collect customer phone number
- Product Field Type, to integrate the power of Craft CMS and Stripe
- Checkout page powered by Stripe with all in one page: super secure, user-friendly, multiple payment methods, taxes, shipping, Apple and Google Pay, and much more!
- Abandoned carts `(coming soon)`

::: tip
These features are available only on the Stripe Payments `pro` edition
:::

## How it works?

Stripe Payments will sync the [Products and Prices](./products) created on the Stripe dashboard (One-Time and Recurring) via webhooks, you will be able to see the products on the Craft CMS dashboard.

Once the Products are synced, you can go ahead and start creating your `Cart API` workflow or using the `checkout` twig tag on your front-end site, either displaying the Products and Prices as they come from Stripe using our Product and Price elements or simply creating a `Stripe Payments Product field type` and adding it into your Craft CMS section layouts, this is useful if you need to add more info to your Products besides the info stored on Stripe like images, handling inventory, SEO data, etc.

The Cart API and the Checkout twig tag will require only an array of items and each item needs at least the Stripe `price` id and the `quantity`
```json
"items" = [
    {
        "price": "price_1KErstLLWVlbcCFQEGHbAgdl",
        "quantity": 2
    }
]
```

::: tip
One Stripe Product can have one or more prices.
:::

 
 

