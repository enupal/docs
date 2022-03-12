---
date: 2022-03-09
description: Instructions to use Stripe Payments Cart API. Let's see how to use the sample Cart templates to learn how display products and prices and how to call the Stripe Payment Cart API
---

# How to use

Follow the following instructions in order to have everything setup to use the Cart API:

- **Webhooks:** Make sure you have properly setup all our required webhooks events on your Stripe dashboard, [learn here](/stripe-payments/stripe-payment-forms/webhook) how to add the webhook events.
- **Automatic Tax:** If you need to collect taxes, we recommend to enabled [Automatic Tax](https://stripe.com/tax) on your Stripe account, so everytime you create a product you can choose the right tax behavior for that product. And enable the `Automatic Tax` setting under `Stripe Payments -> Settings -> Cart`
- **enupal-sync metadata:** On your Stripe dashboard, click on `Products` and then click on `Add Product`, here you can add the product info **make sure** to add the `enupal-sync` metadata, with this key Stripe Payments knows what Products sync from Stripe.

![Stripe Product](https://enupal.com/assets/docs/stripe-product.png)

::: tip
You can also update existing Products adding the `enupal-sync` metadata in order to sync with Stripe Payments.
:::

- **Price Info:** Add at least one price to your Product, here you can define price type: `One-Time` or `Recurring`

![Stripe Price](https://enupal.com/assets/docs/price-info.png)

- **Products synced:** Make sure you Products are properly synced, under on your Craft CMS go to `Stripe Payments -> Products`

## Sample Cart API templates

Stripe Payments provides basic sample templates that you can use to learn how to retrieve products and prices and how to call the Stripe Payment Cart API.

Download the [sample templates](https://github.com/enupal/stripe/tree/master/templates/cart) folder and paste it under your `templates` folder under your root craft installation.

