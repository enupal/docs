# Taxes

Stripe Payments allows Apply [Taxes to Subscriptions](http://stripe.com/docs/billing/subscriptions/taxes). One time payments are not supported by Stripe.

Sales tax laws vary by region and even by product or service. We recommend checking with a qualified accountant to identify your business’ requirements. To look up tax rates, or for more complex needs, consider using [Automated Tax Calculations](http://stripe.com/docs/orders/tax-integration). Stripe has partnered with [Avalara](http://www.info.avalara.com/Stripe), [TaxJar](https://taxjar.com/), and [Taxamo](https://taxamo.com/).

To enable Taxes in Stripe Payments please follow the next instructions:

*   In your Craft CMS dashboard go to **Stripe Payments** → **Settings** → **Taxes**
*   **Enable Taxes**
*   Add a Tax rate  (with at most two decimal places) between 1 and 100
*   **Display Tax Label:** Enable this setting to display a label with the Total Tax amount.
*   Save the Settings.

That's it! This setting will automatically add the tax rate to any Subscription form including recurring payments.


![Taxes settings](https://enupal.com/assets/docs/_lightboxdocs/29-stripe-payments.png)
