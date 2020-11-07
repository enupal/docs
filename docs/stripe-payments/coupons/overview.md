---
date: 2020-05-14
description: Coupon codes added in your Stripe dashboard will be displayed on your Craft CMS dashboard on Stripe Payments Coupons. Stripe allows percentage or amount off discounts.
---

# Overview

Coupon codes added in your [Stripe account](https://dashboard.stripe.com/coupons) will be displayed on your Craft CMS dashboard on **Stripe Payments** → **Coupons**. Stripe allows percentage or amount off discounts.

![Stripe Dashboard](https://enupal.com/assets/docs/coupons-create.png)

You can view your Coupons under your Craft CMS dashboard going to `Stripe Payments -> Coupons`

![Stripe Dashboard](https://enupal.com/assets/docs/coupons-index.png)

## Coupons on the new Stripe Checkout

Stripe added support to apply promotional codes via the new Stripe checkout for one-time and recurring payments. You need to enable [SCA](https://docs.enupal.com/stripe-payments/getting-started/sca.html) under your Stripe Payments settings and enable Stripe Checkout on your payment forms to use this feature.

On your Craft CMS dashboard go to Stripe Payments -> Payment Forms and create or edit an existing form, in the right sidebar settings enable the `Coupons` lightswitch and save your payment form.

![Stripe Coupons](https://enupal.com/assets/docs/stripe-coupons.png)

### Override the settings via options

You can also override this feature passing `allowPromotionCodes` via options.

```twig
{% set options = {
    'allowPromotionCodes' : true
} %}

{{ craft.enupalstripe.paymentForm('handle', options) }}
```


## Coupons for elements - SCA disabled

Although Stripe intends for use with subscriptions, you can use coupon codes to let customers apply a discount in your one-time payment forms as well. There are some scenarios where Coupons may not work properly:

*   Apply coupons for recurring payments on custom-amounts (e.g donations forms) are not supported yet.
*   For one-time payment forms, %100 discounts are not allowed as Stripe needs a minimum charge amount.

You can enable Coupons functionality before display the payment form in your templates, the next options are available:

*   `enabled` (true or false)
*   `label` (string) Message displayed next to the coupon input
*   `successMessage` (string) Message displayed if the coupon is valid (twig code allowed)
*   `errorMessage` (string) Message displayed if the coupon is invalid
*   `displayTotal` (true or false) If enabled will update the total amount
*   `totalAmountLabel` (string) Message displayed next to the total amount
*   `removeCouponLabel` (string) Message displayed for removing a valid coupon
*   `checkCouponLabel` (string) Message displayed for checking coupon

```twig
{% set options = {
    'coupon' : {
        'enabled' : true,
        'label' : 'Apply to this coupon',
        'successMessage': '{name} applied',
        'errorMessage': 'Invalid Coupon',
        'displayTotal': true,
        'totalAmountLabel': 'Total',
        'removeCouponLabel': 'Remove Coupon',
        'checkCouponLabel': 'Check Coupon'
    }
} %}

{{ craft.enupalstripe.paymentForm('sample', options) }}
```