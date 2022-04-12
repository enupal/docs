---
date: 2022-04-07
description: The checkout twig tag is a new functionality to create a Stripe Checkout session just passing the Stripe Price and quantity
---
# Checkout Twig Tag

The `checkout` twig tag is a new functionality to create a Stripe Checkout session just passing the Stripe Price and quantity in an array of items

The `checkout` twig tag will return a Stripe Checkout object, use the `url` attribute to redirect the user to the [Stripe Checkout page](https://stripe.com/payments/checkout).

::: code
```twig Simple
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

```twig Optional Fields
{% set items = [
    {
        "price": "price_1KErstLLWVlbcCFQEGHbAgdl",
        "quantity": 2,
        "description": "Shirt",
        "adjustable_quantity": {
            "enabled": true,
            "minimum": 1,
            "maximum": 10
        }
    }
]
%}

{% set metadata = {
        "is_gift": "yes"
    }
%}

{% set checkoutSession = craft.enupalStripe.checkout(items, metadata) %}

<a href="{{ checkoutSession.url }}">Pay</a>
```
:::