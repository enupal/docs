---
date: 2020-05-14
description: Stripe Payments allows Apply Taxes to Subscriptions. One time payments are not supported by Stripe. 
---

# Taxes

## Collect taxes in Checkout

Stripe added support to collect taxes via the new Stripe checkout. You need to enable [SCA](https://docs.enupal.com/stripe-payments/getting-started/sca.html) under your Stripe Payments settings

::: tip
[This feature](https://stripe.com/docs/payments/checkout/taxes#fixed-tax-rates) is under BETA for ONE-TIME payments, you need to contact [Stripe support](https://stripe.com/contact) and ask to enable this feature on your account
:::

### Create/View Taxes

All taxes should be created under your [Stripe account](https://dashboard.stripe.com/tax-rates) 

![Stripe Dashboard](https://enupal.com/assets/docs/create-tax.png)

When SCA is enabled under your Stripe Payments settings you will see a new option in the right sidebar menu called `Tax` here you can view and archive your Stripe taxes.

![Stripe Dashboard](https://enupal.com/assets/docs/tax-index.png)

### Add tax to your payments forms

On your Payment Form go to the `Tax` tab, here you can add the taxes to apply to your One-Time and Recurring payment forms. 

#### Dynamic tax rates
If you have enabled the `Enable Dynamic tax rates (One-time payments)` This list is used to match tax rate(s) to your customer’s shipping address or billing address. _`This setting is only applied to One Time payments`_

![Stripe Dashboard](https://enupal.com/assets/docs/add-tax.png)

## When SCA is disabled

Stripe Payments allows Apply [Taxes to Subscriptions](http://stripe.com/docs/billing/subscriptions/taxes). One time payments are not supported by Stripe.

To enable Taxes in Stripe Payments please follow the next instructions:

*   In your Craft CMS dashboard go to **Stripe Payments** → **Settings** → **Taxes**
*   **Enable Taxes**
*   Add a Tax rate  (with at most two decimal places) between 1 and 100
*   **Display Tax Label:** Enable this setting to display a label with the Total Tax amount.
*   Save the Settings.


![Taxes settings](https://enupal.com/assets/docs/29-stripe-payments.png)
