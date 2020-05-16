---
date: 2020-05-14
description: In this example you’ll be creating a simple a one-time custom payment form with Stripe Payments. This use case is great for Donations.
---

# Custom Amount - (Donations)

In this example you’ll be creating a simple a one-time custom payment form with Stripe Payments. This use case is great for Donations.

In your Craft CMS dashboard go to **Stripe Payments** → **Payment Forms** → **New Payment Form**

You'll be redirected to the **Edit Payment Form** you'll notice that a generic **Handle** is created when you create a new Payment Form. You can use this handle to display the Stripe Payment Form in the Craft templates.

![Add a new Payment Form](https://enupal.com/assets/docs/01-stripe-payments.png)

## Payment Options

Let's create a One-Time payment option. In the right sidebar menu under **Amount Type** please select **One-Time custom amount.** 

You'll see that new input fields are displayed:

*   Amount Label: Display a custom label to notify the user that they will enter a custom price. _Pay what you want_ is the default label
*   Minimum Amount: The minimum custom amount
*   Default Amount: Pre-Populate a default amount

Set the [Overlay Display](http://enupal.com/craft-plugins/stripe-payments/docs/stripe-payment-forms/one-time-payment-form#stripe-checkout-overlay-display) and [Display the payment form](http://enupal.com/craft-plugins/stripe-payments/docs/stripe-payment-forms/one-time-payment-form#adding-your-payment-form-to-your-craft-templates) in your templates.


![One-Time custom amount Settings](https://enupal.com/assets/docs/11-stripe-payments.png)

![Payment Form](https://enupal.com/assets/docs/12-stripe-payments.png)

![Stripe Checkout](https://enupal.com/assets/docs/13-stripe-payments.png)

## Recurring Payment

You can also add a checkbox for the customer or donor enter a recurring custom amount.

To add this feature to your Payment Form, please go ahead and enable the **Recurring Payment** lightswitch. You'll see that the **Interval** Select is displayed, select any interval and save your Payment Form.

In your template, you'll see a checkbox to allow the customer or donor accepts to pay a recurring custom amount.

![Recurring Payment](https://enupal.com/assets/docs/14-stripe-payments.png)

![Recurring Payment checkbox](https://enupal.com/assets/docs/15-stripe-payments.png)


