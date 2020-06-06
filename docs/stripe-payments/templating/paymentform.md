---
date: 2020-05-14
description: The paymentForm tag will Output your Stripe Form with a single line of code. Pass the handle of your Stripe Payment Form as parameter
---

# paymentForm

The `paymentForm` tag will Output your Stripe Form with a single line of code. Pass the handle of your Stripe Payment Form as parameter:

```twig
{{ craft.enupalStripe.paymentForm('handle') }}
```

## Options

Additionally, you can pass the following options to the _**paymentForm**_ variable. These options are only available for one-time payment forms.

*   quantity
*   amount
*   calculateFinalAmount
*   itemName
*   itemDescription
*   checkoutSuccessUrl
*   checkoutCancelUrl

The **_calculateFinalAmount_** setting is enabled by default so if you pass false, we don't calculate **__quantity \* amount__** as the final amount, you can apply any discount to the amount that you want to charge and will override the amount saved in your Stripe Payment Form

The `itemName` and `itemDescription` are useful if you're using Stripe Checkout

The `checkoutSuccessUrl` and `checkoutCancelUrl` options are for when SCA is enabled and using with Stripe Checkout.

```twig
{% set options = {
    amount: 99.99, 
    quantity: 2, 
    calculateFinalAmount: false,
    itemName : 'Test Name',
    itemDescription : 'Test Description',
    checkoutSuccessUrl: '/thank-you?number={number}',
    checkoutCancelUrl: '/uh-oh'
} %}

{{ craft.enupalstripe.paymentForm('handle', options) }}
```

## Custom Line Items

If you're using the [New Stripe checkout](https://enupal.com/craft-plugins/stripe-payments/docs/getting-started/sca) you can easily pass custom [Line Items](https://stripe.com/docs/api/checkout/sessions/create#create_checkout_session-line_items) this is useful to pass fees or any custom item. Please make sure that the currency is the same as the paymentForm or the plan (for subscriptions)

Additionally, you can pass _removeDefaultItem_ via options to remove the item from your PaymentForm (this will only work if you pass lineItems)

```twig
{% set options = {
        removeDefaultItem: true,    
        lineItems : [
            {
                name : 'T-shirt',
                description : 'Comfortable cotton t-shirt',
                amount : 1500,
                currency : 'usd',
                quantity : 2,
            },
            {
                name : 'Hidden fee :)',
                description : 'There is always a fee',
                amount : 100,
                currency : 'usd',
                quantity : 1,
            }   
        ] 
    } 
%}
{{ craft.enupalStripe.paymentForm('paymentForm', options) }}

```

## Custom Plans Options

You can pass the following options when you're creating [Custom Plan Amounts](https://enupal.com/craft-plugins/stripe-payments/docs/stripe-payment-forms/single-subscription#custom-amount)

```twig
{# customFrequency could be: year, month, week, day #}
{# customInterval should not be more than 1 year in total #}
{% set options = { 
    "customFrequency" : "month", 
    "customInterval" : 4,
    "customTrialPeriodDays" : 19
    } 
%}
{{ craft.enupalstripe.paymentForm('simple', options) }}
```

## Tiered Plans

For plans with [Tiered Pricing](https://stripe.com/docs/billing/subscriptions/tiers), you need to pass the **quantity** and Stripe Payments will calculate and charge the final amount.

```twig
{{ craft.enupalstripe.paymentForm('handle', {quantity: 20}) }}
```