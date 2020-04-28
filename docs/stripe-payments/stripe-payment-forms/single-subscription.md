# Single Subscription

Allow your customers to sign up for recurring payments. Create your subscription plans within your Stripe Account and manage from Stripe Payments. Create custom installment plans, apply initial setup fees and trial periods and much more!

By default, subscription plans are disabled. If subscriptions are enabled by clicking the **Subscriptions** tab and then enable the **Enable Subscription Payment**  lightswitch, the [One-Time Payment Form](https://enupal.com/craft-plugins/stripe-payments/docs/stripe-payment-forms/one-time-payment-form#entry:4058:url) settings (in the right sidebar) will be ignored and this option will be hidden.  

You’ll need to have subscription plans setup in your Stripe account. You don't need to worried about plans if you enable  the **Custom Amount** lightswitch under the **Set Single Plan** settings because with this setting enabled plans are generated automatically.

## Set Single Plan

To create a payment form where the customer can sign up for one plan, select **Set Single Plan** under the **Subscription Type** dropdown.

Select the plan that you want the customer sign up. If you can't see your Stripe plans, please click on the **Refresh** button.

Finally, you can specify a **Setup Fee** to be added to the first payment only.

![Set Single Plan](https://enupal.com/assets/docs/_lightboxdocs/16-stripe-payments.png)

## Custom Amount

Alternatively, you can enable a recurring **Custom Amount**. Be sure to set a minimum amount, default amount and the interval/frequency of the recurring charge, also you can configure a **Free Trial Period**.

When you **Enable Custom Amount** lightswitch the custom plan settings will be displayed

::: tip
This will create a Product and associate automatically a Subscription plan to the customer.
:::

![Custom Amount](https://enupal.com/assets/docs/_lightboxdocs/17-stripe-payments.png)
