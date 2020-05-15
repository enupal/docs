---
date: 2020-05-14
description: The following example shows how to retrieve all the paid invoices attached to a subscription
---

# Get Paid Invoices

The following example shows how to retrieve all the paid invoices attached to a subscription

## getPaidInvoices()

Use the getPaidInvoices() method available in the subscription model, it will return an Invoice Stripe object ([check all available properties](https://stripe.com/docs/api/invoices/object))

```twig
{% for order in craft.enupalStripe.getSubscriptionsByEmail('info@admin.com') %}
    {% set subscription = order.getSubscription() %}
    {% for invoice in subscription.getPaidInvoices() %}
        <li>Date - {{ invoice.created|date("m/d/Y") }} </li>
        <li>Amount - {{ craft.enupalStripe.convertFromCents(invoice.amount_paid, invoice.currency) }} </li>
    {% endfor %}
{% endfor %}
```