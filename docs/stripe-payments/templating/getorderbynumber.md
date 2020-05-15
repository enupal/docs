---
date: 2020-05-14
description: Get a specific Stripe Order by number to handle it in your templates.
---

# getOrderByNumber

Get a specific Stripe Order by number to handle it in your templates.

```twig
{% set number = "jhT1tuEMe1bd" %}
{% set order = craft.enupalStripe.getOrderByNumber(number) %}

<h1>Order: {{number}}</h1>

<h2>Date Ordered: {{ order.dateOrdered|date() }}</h2>
```