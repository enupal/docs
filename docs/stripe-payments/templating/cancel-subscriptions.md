# Cancel Subscriptions

Follow the next example to allow users to cancel subscriptions via front-end. If you want to cancel the subscription at the end of the period please go to **Stripe Payments** → **Settings** → **Defaults** and enable the "Cancel subscription at period end" lightswitch. However you could override the default setting passing a hidden value with next name: `cancelAtPeriodEnd`


```twig
{% for order in craft.enupalStripe.getSubscriptionsByUser(currentUser.id) %}
    {% set subscription = order.getSubscription() %}
    {% set redirectUri = 'shop/come-back-please' %}

    {% if subscription.status == 'active' and not subscription.cancelAtPeriodEnd %}
        <form method="post">
            <input type="hidden" name="action" value="enupal-stripe/stripe/cancel-subscription">
            <input type="hidden" name="subscriptionId" value="{{ order.stripeTransactionId }}">
            <input type="hidden" name="cancelAtPeriodEnd" value="true">
            <input type="hidden" name="redirect" value="{{ redirectUri|hash }}">
            {{ csrfInput() }}

            <ul>
            <li>{{ 'Order Number:'|t }} {{ order.number }}</li>
            <li>{{ 'Plan nickname:'|t }}  {{ subscription.planNickName }}</li>
            <li>{{ 'Status:'|t }}  {{ subscription.status }} </li>
            <li>{{ 'Interval:'|t }}  {{ subscription.interval }} </li>
            <li>{{ 'Period Start:'|t }}  {{ subscription.startDate|date }} </li>
            <li>{{ 'Period end:'|t }}  {{ subscription.endDate|date }} </li>
            <li>{{ 'Quantity:'|t }}  {{ subscription.quantity }} </li>
            </ul>

            
            <button type="submit"> {{ "Cancel Membership"|t }}</button>        
        </form>
    {% endif %}
{% endfor %}
```

## Reactivate Subscription

When a subscription has been scheduled for cancellation using `cancel_at_period_end` set to true, it can be reactivated at any point up to the end of the period. Any [metered usage](https://stripe.com/docs/billing/subscriptions/metered-billing) is charged for in a final invoice once the subscription cancels at the end of the billing period.

```twig
{% for order in craft.enupalStripe.getSubscriptionsByUser(currentUser.id) %}
    {% set subscription = order.getSubscription() %}
    {% set redirectUri = 'shop/come-back-please' %}

    {% if subscription.status == 'active' and subscription.cancelAtPeriodEnd %}
        <form method="post">
            <input type="hidden" name="action" value="enupal-stripe/stripe/reactivate-subscription">
            <input type="hidden" name="subscriptionId" value="{{ order.stripeTransactionId }}">
            <input type="hidden" name="redirect" value="{{ redirectUri|hash }}">
            {{ csrfInput() }}

            <ul>
            <li>{{ 'Order Number:'|t }} {{ order.number }}</li>
            <li>{{ 'Plan nickname:'|t }}  {{ subscription.planNickName }}</li>
            <li>{{ 'Status:'|t }}  {{ subscription.status }} </li>
            <li>{{ 'Interval:'|t }}  {{ subscription.interval }} </li>
            <li>{{ 'Period Start:'|t }}  {{ subscription.startDate|date }} </li>
            <li>{{ 'Period end:'|t }}  {{ subscription.endDate|date }} </li>
            <li>{{ 'Quantity:'|t }}  {{ subscription.quantity }} </li>
            </ul>

            
            <button type="submit"> {{ "Reactivate Membership"|t }}</button>        
        </form>
    {% endif %}
{% endfor %}
```
::: tip
Ajax requests are supported
:::