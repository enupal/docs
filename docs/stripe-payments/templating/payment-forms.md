---
date: 2020-05-14
description: The paymentForms tag returns a  Stripe Payment Form element query with all your form info. You can display your Stripe Form using the paymentForm() method
---

# paymentForms

The `paymentForms` tag returns a  Stripe Payment Form element query with all your form info. You can display your Stripe Form using the `paymentForm()` method

Let's say that the handle of your Stripe Payment Form is "stripeForm", in the following example you can see how to output some variables and methods available in the Stripe Payment Form element:

```twig
{% set stripeForm = craft.enupalstripe.paymentForms({'handle' : 'stripeForm'}).one() %}

{{ stripeForm.handle }}
{{ stripeForm.amount }}
{{ stripeForm.name }}
{{ stripeForm.currency }}
{% set logo = stripeForm.getLogoAsset() %}
{% if logo %}
	<img height="{{logo.getHeight()}}" src="{{ logo.getUrl() }}" title="{{ logo.title }}">
{% endif %}

{{ stripeForm.getAmountAsCurrency() }}
{{ stripeForm.getCurrencySymbol() }}

{# DISPLAY PAYMENT FORM #}
{{ stripeForm.paymentForm() }}
```

## .all()

You can also loop through all your Payment Forms:

```twig
{% for stripeForm in craft.enupalstripe.paymentForms.all() %}
	{{ stripeForm.paymentForm() }}
{% endfor %}
```