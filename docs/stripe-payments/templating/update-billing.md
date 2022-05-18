---
date: 2020-08-08
description: The customer portal is a secure, Stripe-hosted page that lets your customers manage their subscriptions and billing details
---

# Update billing details

The [customer portal](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal) is a secure, Stripe-hosted page that lets your customers manage their subscriptions and billing details. Your customers can:

- Upgrade, downgrade, or cancel a subscription
- Update their payment methods
- View their billing history

Please follow the next two steps to redirect users to the customer portal:

1.- Save your portal settings going to your Stripe dashboard [test](https://dashboard.stripe.com/test/settings/billing/portal) or [live](https://dashboard.stripe.com/settings/billing/portal)

2.- As simple as adding the following form, a logged-in customer will be redirected to the customer portal, `(the user needs at least have one order)`

3.- You can also pass the Order number for guest orders
```twig
<form method="POST">
    {{ csrfInput() }}
    {{ actionInput('enupal-stripe/stripe/create-customer-portal') }}
    <input type="hidden" name="returnUrl" value="{{ siteUrl('/account') }}">
    
    {# Optional field for Guest users #}
    {#
    <label for="orderNumber">
        Order Number
    </label>
    <input name="orderNumber">
    #}
    
    <button type="submit">Manage billing</button>
    
    {% if customerPortalError is defined %}
        <div class="error">
            {{ customerPortalError }}
        </div>
    {% endif %}
</form>
```

![Connect Index](https://enupal.com/assets/docs/enupal-stripe-connect-16.png)




