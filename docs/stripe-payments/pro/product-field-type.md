---
date: 2022-05-01
description: The Stripe Product field type its useful if you need to add more info to your Products besides the info stored on Stripe like images, handling inventory, SEO data, etc.
---

# Stripe Product Field Type

The `Stripe Product field type` its useful if you need to add more info to your Products besides the info stored on Stripe like images, handling inventory, SEO data, etc.

Let's say that the handle of your Stripe Product Field is `stripeProduct`, in the following example you can see how to output some variables and methods available in the field type:

```twig
{% set product = entry.stripeProduct.one() %}

{# You can access to any Stripe Product property defined here https://stripe.com/docs/api/products/object #}
{% set productObject = product.getStripeObject() %}
<h3>{{ productObject.name }}</h3>

{% for price in product.getPrices() %}
    {# You can access to any Stripe Price property defined here https://stripe.com/docs/api/prices/object#}
    {% set priceObject = price.getStripeObject() %}
    {% set priceName = priceObject.nickname ? priceObject.nickname ~ ' ' ~ price.getUnitAmount() : price.getUnitAmount() %}
    {# The price ID to use on the Cart API #}
    <h3>{{ priceObject.id }}</h3>
    <h3>{{ priceName}}</h3>
{% endfor %}
```

## .all()

If you have more than one Stripe Product in your Field Type you could use a **For loop**:

```twig
{% for product in entry.stripeProduct.all() %}
	<h3>{{ productObject.name }}</h3>
	{% for price in product.getPrices() %}
	...
	{% endfor %}
{% endfor %}
```