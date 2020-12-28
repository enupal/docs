---
date: 2020-12-28
description: Display order details after checkout
---

# Display order details

Display order details after checkout. 

- The first step is set the `Checkout Success URL` if you have [SCA](https://docs.enupal.com/stripe-payments/getting-started/sca.html) enabled or the `Return URL` if not, on our Payment form and pass the order number in the URL:

`/thank-you?number={number}` 

Save your payment form with the new `Return Url`

- The second step will be retrieve the `number` GET parameter in our `thank-you` template and display the Order details:

```twig
{% set number = craft.request.getQuery('number') %}

{% set order = craft.enupalStripe.getOrderByNumber(number) %}

<h1>Order: {{ order.number }}</h1>

<h2>Date Ordered: {{ order.dateOrdered|date() }}</h2>

<h2>Total: {{ order.totalPrice|currency(order.currency) }}</h2>

<h2>Quantity: {{ order.quantity }}</h2>

<h2>Customer Email: {{ order.email }}</h2>

<h2>Payment Form: {{ order.getPaymentForm().name }}</h2>

{# display form fields if any #}
<h3>Details:</h3>
{% for key, variant in order.getFormFields() %}
    {{ key }} :
    {% if variant is iterable %}
        [
        {% for v in variant %}
            {{ v }}
        {% endfor %}
        ]
    {% else %}
        {#  variant  is probably a string #}
        {{ variant }}
    {% endif %} {% if not loop.last %},{% endif %}
 {% endfor %}
```