---
date: 2022-03-09
description: Before starting to use Stripe Payments Pro we need to confirm that we have the webhooks and the automatic taxes feature properly setup.
---

# Requirements

In order to properly sync products and prices from Stripe, you need to make sure that your Webhooks are correctly setup and check if you may need to enable the Automatic tax feature on Stripe.

## Stripe Payments Pro Settings
All the settings related to Stripe Payments Pro are under `Stripe Payments -> Settings -> Pro -> Checkout`

![Stripe Payments Pro Settings](https://enupal.com/assets/docs/stripe-payments-pro-settings.png)

## Webhooks 
Make sure you have properly setup all our required webhooks events on your Stripe dashboard, [learn here](/stripe-payments/stripe-payment-forms/webhook) how to add the webhook events.

::: tip
To test locally make sure to install the Stripe Cli to forward the events to your local site, [instructions here](/stripe-payments/stripe-payment-forms/webhook)
:::

## Automatic Tax 

If you need to collect taxes, we recommend to enabled [Automatic Tax](https://stripe.com/tax) on your Stripe account, so everytime you create a product you can choose the right tax behavior for that product. And enable the `Automatic Tax` setting under `Stripe Payments -> Settings -> Pro -> Checkout`

::: tip
This step is optional, but if you enabled `Automatic Tax`, all the products on the cart needs to have defined the tax code, you can set the tax code when you edit the product on Stripe after enable [Automatic Tax](https://stripe.com/tax)
:::

