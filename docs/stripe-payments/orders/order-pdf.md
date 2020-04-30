# Order PDF

Follow the next instructions to be able to display Order PDF in templates, download Order PDF in the edit order page (Control panel) and attach the PDF order to the customer email notifications

## Install Enupal Snapshot

[Enupal Snapshot](https://plugins.craftcms.com/enupal-snapshot) is a plugin that allows PDF generation from HTML or Twig templates. Since v1.2.0 Enupal Snapshot has added an integration with Stripe Payments to generate PDF orders from the Control Panel and automatically attach the PDF order to the customer email notification.

After you install Enupal Snapshot, the next step is to add a Stripe Payments Order template, you can copy this [default template](https://github.com/enupal/snapshot/tree/master/templates/stripepayments) in your Craft templates folder.

Add the template Path to the Enupal Snapshot settings and you're ready to go! Now you can download the PDF order in your Control Panel when editing an Order. You can also display the PDF in your templates following the next example:

```twig
{%
    set settings = {
        inline: false,
        overrideFile: true,
        cliOptions: {
            'viewport-size': '1280x1024',
            'margin-top': 0,
            'margin-bottom': 0,
            'margin-left': 0,
            'margin-right': 0
        }
    }
%}

{% set order = craft.enupalStripe.getOrderByNumber('LtI0KUAXppiY') %}
{% set url = craft.enupalsnapshot.displayOrder(order, settings) %}

<a href="{{url}}"> Download Order Pdf</a>
```

![Enupal Snapshot Settings](https://enupal.com/assets/docs/enupal-snapshot-100.png)

![Download Order PDF button](https://enupal.com/assets/docs/enupal-stripe-100.png)
