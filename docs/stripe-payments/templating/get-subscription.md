---
date: 2020-05-14
description: Get the subscription attached to an order to handle it in your templates.
---

# getSubscription

Get the subscription attached to an order to handle it in your templates. 

```twig
{% set number = "YFvifyDCf6ou" %}
{% set order = craft.enupalStripe.getOrderByNumber(number) %}
{% set subscription = order.getSubscription() %}

{{ subscription.startDate }}
{{ subscription.endDate }}
{{ subscription.daysUntilDue }}
{{ subscription.planNickName }}
{{ subscription.quantity }}
{{ subscription.interval }}
{{ subscription.canceledAt }}
{{ subscription.status }}
```

## getSubscriptionsByUser

You can get all subscriptions by **userId**

```twig
{% for order in craft.enupalStripe.getSubscriptionsByUser(currentUser.id) %}
    {% set subscription = order.getSubscription() %}

    <ul>
        <li>{{ 'Order Number:'|t }} {{ order.number }}</li>
        <li>{{ 'Plan nickname:'|t }}  {{ subscription.planNickName }}</li>
        <li>{{ 'Status:'|t }}  {{ subscription.status }} </li>
        <li>{{ 'Interval:'|t }}  {{ subscription.interval }} </li>
        <li>{{ 'Period Start:'|t }}  {{ subscription.startDate|date }} </li>
        <li>{{ 'Period end:'|t }}  {{ subscription.endDate|date }} </li>
        <li>{{ 'Quantity:'|t }}  {{ subscription.quantity }} </li>
    </ul>
{% endfor %}
```

## getSubscriptionsByEmail

You can get all subscriptions by **email**


```twig
{% for order in craft.enupalStripe.getSubscriptionsByEmail(currentUser.email) %}
    {% set subscription = order.getSubscription() %}

    <ul>
        <li>{{ 'Order Number:'|t }} {{ order.number }}</li>
        <li>{{ 'Plan nickname:'|t }}  {{ subscription.planNickName }}</li>
        <li>{{ 'Status:'|t }}  {{ subscription.status }} </li>
        <li>{{ 'Interval:'|t }}  {{ subscription.interval }} </li>
        <li>{{ 'Period Start:'|t }}  {{ subscription.startDate|date }} </li>
        <li>{{ 'Period end:'|t }}  {{ subscription.endDate|date }} </li>
        <li>{{ 'Quantity:'|t }}  {{ subscription.quantity }} </li>
    </ul>
{% endfor %}
```