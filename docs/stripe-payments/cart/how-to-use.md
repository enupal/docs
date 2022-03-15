---
date: 2022-03-09
description: Instructions to use Stripe Payments Cart API. Let's see how to use the sample Cart templates to learn how display products and prices and how to call the Stripe Payment Cart API
---

# How to use

Follow the following instructions in order to have everything setup to use the Cart API:

## Webhooks 
Make sure you have properly setup all our required webhooks events on your Stripe dashboard, [learn here](/stripe-payments/stripe-payment-forms/webhook) how to add the webhook events.

::: tip
To test locally make sure to install the Stripe Cli to forward the events to your local site, [instructions here](/stripe-payments/stripe-payment-forms/webhook)
:::

## Automatic Tax 

If you need to collect taxes, we recommend to enabled [Automatic Tax](https://stripe.com/tax) on your Stripe account, so everytime you create a product you can choose the right tax behavior for that product. And enable the `Automatic Tax` setting under `Stripe Payments -> Settings -> Cart`

::: tip
This step is optional, but if you enabled `Automatic Tax`, all the products on the cart needs to have defined the tax code, you can set the tax code when you edit the product on Stripe after enable [Automatic Tax](https://stripe.com/tax)
:::


## enupal-sync metadata 

On your Stripe dashboard, click on `Products` and then click on `Add Product`, here you can add the product info **make sure** to add the `enupal-sync` metadata, with this key Stripe Payments knows what Products sync from Stripe.

![Stripe Product](https://enupal.com/assets/docs/stripe-product.png)

::: tip
You can also update existing Products by adding the `enupal-sync` metadata in order to sync with Stripe Payments.
:::

## Price Info 

Add at least one price to your Product, here you can define price type: `One-Time` or `Recurring`

![Stripe Price](https://enupal.com/assets/docs/price-info.png)

## Products synced 

Make sure you Products are properly synced, under on your Craft CMS go to `Stripe Payments -> Products`

_Stripe Payments Products_
![Stripe Price](https://enupal.com/assets/docs/enupal-stripe-products.png)

_Stripe Payments Products - Edit_
![Stripe Price](https://enupal.com/assets/docs/enupal-stripe-products-edit.png)

::: tip
You can also enable and disable the products from the element index page. To edit any other info related to the product, it needs to be done via the Stripe Dashboard, Stripe Payments will properly sync the products and prices from Stripe.
:::

## Display Products and Prices

Check the following example on how to retrieve the Products and Prices on the twig templates:

```twig
{% set products = craft.enupalStripe.products().all() %}

{% for product in products %}
    {# You can access to any Stripe Product property defined here https://stripe.com/docs/api/products/object #}
    {% set productObject = product.getStripeObject() %}
    <h3>{{ productObject.name }}</h3>
    
    {% for price in product.getPrices() %}
        {# You can access to any Stripe Price property defined here https://stripe.com/docs/api/prices/object#}
        {% set priceObject = price.getStripeObject() %}
        {% set priceName = priceObject.nickname ? priceObject.nickname ~ ' ' ~ price.getUnitAmount() : price.getUnitAmount() %}
        {# The price ID to use on the Cart API #}
        <h3>{{ priceObject.id }}</h3>
        <h3>{{ priceName}}</h3>
    {% endfor %}
{% endfor %}
```

## Sample Cart API templates

Stripe Payments provides basic sample templates that you can use to learn how to retrieve products and prices and how to call the [Cart API endpoints](/stripe-payments/cart/api-endpoints)

Download the [sample templates](https://github.com/enupal/stripe/tree/master/templates/cart) folder and paste it under your `templates` folder under your root craft installation.

