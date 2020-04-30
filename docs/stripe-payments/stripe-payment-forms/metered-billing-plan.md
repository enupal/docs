# Metered billing plan

Metered billing is useful in cases where you want to charge your customers a granular amount based on their consumption of your service during the billing cycle, instead of explicitly setting quantities. For example, if you are running an email SaaS business, you can track your customers’ API calls, then bill them for the total number used at the end of each month.

  
When the customer subscribes to the plan, Stripe Payments will save the [subscription item](https://stripe.com/docs/api#subscription_items) id, this id is used for usage reporting. You can grab manually this id from the view order page or from the subscription model.

![Stripe Payments Metered Subscription](https://enupal.com/assets/docs/stripe-payments-metered-1.png)

## Reporting usage

To report the usage you can use the next examples:

::: code

```php
// PHP EXAMPLE
use Craft;
use enupal\stripe\Stripe;

...

$currentUser = Craft::$app->getUser()->getIdentity();
$orders = Stripe::$app->subscriptions->getSubscriptionsByUser($currentUser->id);
// $orders = Stripe::$app->subscriptions->getSubscriptionsByEmail($currentUser->email);

foreach ($orders as $order) {
    $subscription = $order->getSubscription();
    if ($subscription->status == 'active' && $subscription->meteredId){
        $subscription->reportUsage(25);
    }
}
```

```twig
{# TWIG EXAMPLE #}
{% for order in craft.enupalStripe.getSubscriptionsByUser(currentUser.id) %}
    {% set subscription = order.getSubscription() %}
    {% set redirectUri = 'shop/come-back-please' %}

    {% if subscription.status == 'active' and subscription.meteredId %}
        <h1>Reporting usage for: {{subscription.planNickName}}</h1>
        <h1>Current usage: {{subscription.getUsage()}}</h1>

        {% set result = subscription.reportUsage(25) %}

        <h1>Final usage: {{subscription.getUsage()}}</h1>

    {% endif %}
{% endfor %}
```
:::
