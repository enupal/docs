---
date: 2020-05-14
description: Stripe Payments is powered by Stripe Checkout and Stripe Elements. Make sure to understand the differences between these two methods and choose one to display your payment form!
---

# Payment Methods

Stripe Payments is powered by [Stripe Checkout](https://stripe.com/checkout) and [Stripe Elements](https://stripe.com/elements). Make sure to understand the differences between these two methods and choose one to display your payment form!

You can choose one of these two methods when creating your payment form.

## Stripe Checkout

Stripe Checkout is an embeddable payment form for desktop, tablet, and mobile devices. It works within your site, customers can pay instantly, without being redirected away to complete the transaction.

When you create a Stripe Payment Form this method will be enabled by default:


![Enable Stripe Checkout](https://enupal.com/assets/docs/35-stripe-payments.png)
![Stripe Checkout fom](https://enupal.com/assets/docs/09-stripe-payments.png)

## Stripe Elements

Stripe Elements are rich, pre-built UI components that help you create your own pixel-perfect checkout flows across desktop and mobile. Currently, we support [Cards](https://stripe.com/docs/sources/cards), [iDEAL](https://stripe.com/docs/sources/ideal) and [SOFORT](https://stripe.com/docs/sources/sofort), feel free to [reach us](https://enupal.com/contact-us) if you want to support any other [source](https://stripe.com/docs/sources).  
  
When you create a Stripe Payment Form you need to disable "Enable Stripe Checkout" please check the method(s) that you want to support and save the stripe payment form. if you select more than one method a dropdown will be displayed to the user.  

In order to support [recurring iDEAL Payments](https://stripe.com/docs/sources/ideal/recurring), you need to have enabled [SEPA Direct Debit](https://stripe.com/docs/sources/sepa-debit) in your Stripe account and add a Webhook URL to your Stripe account more info [here](https://enupal.com/craft-plugins/stripe-payments/docs/stripe-payment-forms/webhook#entry:6222:url).

![Enable Stripe Elements](https://enupal.com/assets/docs/36-stripe-payments.png)

![Card element example](https://enupal.com/assets/docs/37-stripe-payments.png)

![iDEAL element example](https://enupal.com/assets/docs/40-stripe-payments.png)

