---
date: 2020-05-14
description: Stripe can send webhook events that notify your application any time an event happens on your account. This is especially useful for events—like disputed charges and many recurring billing events—that are not triggered by a direct API request
---

# Webhook

Stripe can send [webhook events](https://stripe.com/docs/webhooks) that notify your application any time an event happens on your account. This is especially useful for events—like disputed charges and many recurring billing events—that are not triggered by a direct API request. This mechanism is also useful for services that are not directly responsible for making an API request, but still, need to know the response from that request. 

Please add the webhook URL to your Stripe Account. You can find the webhook URL going to 

**Stripe Payments** → **Settings** → **Webhook**  
  
Webhooks are configured in the Dashboard's [Webhooks settings](https://dashboard.stripe.com/account/webhooks) section. Click Add endpoint to reveal a form where you can add the webhook URL for receiving webhooks.  

Stripe Payments trigger an event when a notification event is received from Stripe, some examples of what you can do with webhooks:

*   Update a customer's membership record in your database when a subscription payment succeeds
*   Email a customer when a subscription payment fails
*   Log an accounting entry when a transfer is paid

[Follow our docs](https://enupal.com/craft-plugins/stripe-payments/docs/plugin-development/events#afterprocesswebhook) to add the code to listen to the webhook event in a small custom plugin.

## Events

The following events are required by Stripe Payments, feel free to review the [full list](https://stripe.com/docs/api/events/types) of event types and add more as needed:

*   `source.chargeable`
*   `charge.succeeded`
*   `charge.captured`
*   `checkout.session.completed`
*   `customer.subscription.created`
*   `customer.subscription.deleted`

::: tip
If you're using Stripe Elements and using the iDEAL payment method OR if you have SCA enabled,  saving the webhook URL to your Stripe Account is required 
:::

![Webhook Url](https://enupal.com/assets/docs/39-stripe-payments.png)


