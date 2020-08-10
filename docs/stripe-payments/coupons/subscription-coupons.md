---
date: 2020-08-10
description: Allow promotional codes to your Plans via the new Stripe Checkout
---

# Subscription Coupons

Allow promotional codes to your Plans via the new Stripe Checkout (having [SCA](https://docs.enupal.com/stripe-payments/getting-started/sca.html#stripe-checkout-features) enabled and Stripe Checkout is required)

To enable coupons please pass `allowPromotionCodes` via options. (This functionality is will only apply for recurring payments.)

```twig
{% set options = {
    'allowPromotionCodes' : true
} %}

{{ craft.enupalstripe.paymentForm('handle', options) }}
```

![Stripe Coupons](https://enupal.com/assets/docs/stripe-coupons.png)