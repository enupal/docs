# One-Time Payment Form
In this example you’ll be creating a simple a one-time payment form with Stripe Payments

In your Craft CMS dashboard go to **Stripe Payments** → **Payment Forms**→ **New Payment Form**

You'll be redirected to the **Edit Payment Form** you'll notice that a generic **Handle** is created when you create a new Payment Form. You can use this handle to display the Stripe Payment Form in the Craft templates.

![New Stripe Payment Form](https://enupal.com/assets/docs/_lightboxdocs/01-stripe-payments.png)

## Payment Options

Let's create a One-Time payment option. In the right sidebar menu under **Amount Type** please select **One-Time set amount.** Go ahead and change the price and the currency.**Enable Stripe Checkout** if you want to use [Stripe Checkout](https://stripe.com/checkout) if disabled the payment form will be powered by [Stripe Elements](https://stripe.com/elements), at the moment we support [Cards](https://stripe.com/docs/sources/cards) and [iDEAL](https://stripe.com/docs/sources/ideal), feel free to [reach us](https://enupal.com/contact-us#entry:29:url) if you want to support any other [source](https://stripe.com/docs/sources).

![One-Time set amount](https://enupal.com/assets/docs/_lightboxdocs/30-stripe-payments.png)

## Stripe Checkout Overlay Display

Note that Stripe Payments uses Stripe’s Checkout overlay and you can research what can and cannot be configured in the overlay under the [Stripe Checkout Docs](https://stripe.com/docs/checkout).

In the **General** Tab, go ahead and enter your company name, item description, select a logo image and whatever else you’d like to change.

Note you can upload a logo or image to appear on the checkout overlay here.

![Overlay Options](https://enupal.com/assets/docs/_lightboxdocs/31-stripe-payments.png)

### Pay Button Settings

Under the same General Tab you'll find the Pay Button Settings. Here you can override the next settings:

*   **Payment Button Text:** Overrides the default text (Pay with card) in the Stripe Payment Form.
*   **Payment Button Processing Text:** Show some text while the payment is processing by Stripe and before redirect to the Return URL
*   **Checkout Button Text:** The text used in the Stripe Checkout form. You can use {{amount}} to add the final amount to charge.

![Pay Button Settings](https://enupal.com/assets/docs/_lightboxdocs/32-stripe-payments.png)

## Adding your Payment Form to your Craft Templates

Now that you’ve created your first payment form, you can add it to any template with just a single line of code using the **handle** located in the right sidebar menu:

```twig
{{ craft.enupalstripe.paymentForm('translate') }}
```

### Samples
![Stripe Payment Form](https://enupal.com/assets/docs/08-stripe-payments.png)

![Old Stripe Checkout](https://enupal.com/assets/docs/09-stripe-payments.png)

![Stripe Elements - Card](https://enupal.com/assets/docs/41-stripe-payments.png)

![iDEAL element example](https://enupal.com/assets/docs/40-stripe-payments.png)

![New Stripe Checkout](https://enupal.com/assets/docs/stripe-payments-new-checkout.png)