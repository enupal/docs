---
date: 2020-05-14
description: Coupon codes added in your Stripe dashboard will be displayed on your Craft CMS dashboard on Stripe Payments → Coupons. Stripe allows percentage or amount off discounts.
---

# Overview

Coupon codes added in your Stripe dashboard will be displayed on your Craft CMS dashboard on **Stripe Payments** → **Coupons**. Stripe allows percentage or amount off discounts.

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