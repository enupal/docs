# Display Button

The `Stripe Payment Forms` Field returns a  Stripe Payment Form element with all your form info. You can display your Stripe Form using the `paymentForm()` method

Let's say that the handle of your Stripe Payment Form Field is "stripeForm", in the following example you can see how to output some variables and methods available in the field type:

```twig
{% set stripeForm = entry.stripeForm.one() %}

{{ stripeForm.handle }}
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

If you have more than one Stripe Payment Form in your Field Type you could use a **For loop**:

```twig
{% for stripeForm in entry.stripeForm.all() %}
	{{ stripeForm.paymentForm() }}
{% endfor %}
```