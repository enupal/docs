---
date: 2022-04-07
description: The checkout twig tag is a new functionality to create a Stripe Checkout session just passing the Stripe Price and quantity
---
# Checkout Twig Tag

The `checkout` twig tag is a new functionality to create a Stripe Checkout session just passing the Stripe Price and quantity in an array of items

The `checkout` twig tag will return a Stripe Checkout object, use the `url` attribute to redirect the user to the [Stripe Checkout page](https://stripe.com/payments/checkout).

::: tip
Stripe will always provide the `amount` and `unit_amount` in the smallest common currency unit (i.e. for USD or EUR, 100 cents instead of $1.00). However, for zero-decimal currencies (i.e. JPY, Japanese Yen), the smallest currency is the regular denomination (¥1 for 1 Yen)
:::

::: code
```twig Simple
{# The price id could be a One-Time or Recurring price #}
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

```twig Custom One-Time
{% set items = [
    {
        "name" : "T-shirt",
        "quantity": 2,
        "currency": "usd",
        "description" : "Comfortable cotton t-shirt",
        "amount" : 1500,
        "adjustable_quantity": {
            "enabled": true,
            "minimum": 1,
            "maximum": 10
        }
    }
]
%}

{% set checkoutSession = craft.enupalStripe.checkout(items) %}
<a href="{{ checkoutSession.url }}">Pay</a>
```
```twig Recurring1
{# If you know the Stripe product id #}
{% set items = [
    {
        "quantity": 1,
        "price_data" : {
            "currency": "usd",
            "product": "prod_LHuO18MQRkHqth",
            "unit_amount": 1000,
            "recurring": {
                "interval": "month",
                "interval_count": 1
            }
        }
    }
]
%}

{% set checkoutSession = craft.enupalStripe.checkout(items) %}
<a href="{{ checkoutSession.url }}">Subscribe</a>
```

```twig Recurring2
{# If you don't know the Stripe product id, the product created on Stripe will be marked as archived #}
{% set items = [
    {
        "quantity": 1,
        "price_data" : {
            "currency": "usd",
            "product_data": {
                "name": "Gold membership"
            },
            "unit_amount": 1000,
            "recurring": {
                "interval": "month",
                "interval_count": 1
            }
        }
    }
]
%}

{% set checkoutSession = craft.enupalStripe.checkout(items) %}
<a href="{{ checkoutSession.url }}">Subscribe</a>
```
:::