---
date: 2020-05-14
description: Strong Customer Authentication (SCA), a new rule coming into effect on September 14, 2019, as part of PSD2 regulation in Europe. Stripe has released a new version of Stripe Checkout with fully SCA support along with Apple Pay and Google Pay support.
---

# SCA

Strong Customer Authentication ([SCA](https://stripe.com/docs/strong-customer-authentication)), a new rule coming into effect on September 14, 2019, as part of PSD2 regulation in Europe. Stripe has released a new version of [Stripe Checkout](https://stripe.com/en-at/payments/checkout) with fully SCA support along with [Apple Pay](https://stripe.com/en-at/apple-pay) and Google Pay support.

We have added support to the new Stripe Checkout workflow, however, we're still working on adding support to use [Payment Intents](https://stripe.com/docs/payments/payment-intents) (which is SCA-READY) when using the Card element.

## Stripe Checkout - Features

The Stripe team is working hard to add more features to the new Stripe Checkout, as there is not an ETA for those features, the following table illustrates the status of the Stripe Payments features if you're updating the plugin from the legacy checkout version. We'll update this table once the not supported features are released.

|Feature|Status|
|--- |--- |
|SCA ready|supported|
|3D Secure  - Test Card (4000 0000 0000 3220)|supported|
|One Time Payments|supported|
|Subscriptions|supported|
|Coupons|supported|
|One Time Fees (subscriptions)|supported|
|Donations (custom amounts)|supported|
|Google Pay|supported|
|Shipping & Billing Address|supported|
|Coupons (recurring-payments)|supported|
|Taxes (one time and recurring-payments)|supported|
|Plans with tired billing (subscriptions)|supported|

|Payment Methods|One Time Payments|Recurring Payments|
|--- |--- |--- |
|Card|YES|YES|
|Apple Pay|YES|YES|
|Google Pay|YES|YES|
|iDEAL|YES|NO (yet)|
|FPX|YES|NO (yet)|
|Alipay|YES|NO (yet)|
|BACS DEBIT|YES|NO (yet)|
|Bancontact|YES|NO (yet)|
|GIROPAY|YES|NO (yet)|
|P24|YES|NO (yet)|
|EPS|YES|NO (yet)|
|Sofort|YES|NO (yet)|
|Sepa Debit|YES|NO (yet)|

## Enable the new Stripe Checkout

The new Stripe Checkout will redirect users to a Stripe checkout page. In order to use the new checkout workflow, it's mandatory that you follow the next instructions:

*   **Webhooks:** set up your webhook URL in your Stripe account, [learn here](/stripe-payments/stripe-payment-forms/webhook) how to add your webhook URL.
*   **Enable SCA:** go to Stripe Payments → Settings→ General and enable the "Use Strong Customer Authentication (SCA)" lightswitch
*   **Enable Stripe Checkout:** go to your payment forms and enable "Stripe Checkout" lightswitch
    *   **Add Checkout Success URL:** Redirect buyers' to this URL after they complete their payments
    *   **Add Checkout Cancel URL:** Redirect buyers' to this URL after they cancel their payments
*   **Template overrides:** If you're using the [template overrides](https://enupal.com/craft-plugins/stripe-payments/docs/plugin-development/template-overrides#entry:6239:url) feature, please make sure you add the new "paymentFormSca" template in your override folder
*   **Subscription Events:** If you're migrating from Stripe Payments v1.x, please review your Events, for the first time when a subscription is created please check the _**"checkout.session.completed"**_ instead of the **_"customer.subscription.created"_** event type. More info [here](https://enupal.com/craft-plugins/stripe-payments/docs/plugin-development/events#afterprocesswebhook)

## Support

Please let us know about any issues/questions creating a [ticket on github](https://github.com/enupal/stripe/issues/new) adding "SCA" at the end of the title.