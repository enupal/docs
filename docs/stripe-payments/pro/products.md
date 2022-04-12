---
date: 2022-03-09
description: The Cart API and the Checkout twig tag uses Stripe Prices create the Stripe Checkout page. Let's see how can we sync Products from Stripe
---

# Products and Prices

The Cart API and the Checkout twig tag uses the [Stripe Products and Prices](https://stripe.com/docs/products-prices/overview) to create the Stripe Checkout page.

## Create Products

Each time a `Product/Price` is `created/updated/deleted` on your Stripe dashboard it will be **synced** on Stripe Payments, and to know what products Stripe Payments needs to sync please follow the next instructions:

On your Stripe dashboard, click on `Products` and then click on `Add Product`, here you can add the product info **make sure** to add the `enupal-sync` metadata, with this key Stripe Payments knows what Products sync from Stripe.

![Stripe Product](https://enupal.com/assets/docs/stripe-product.png)

::: tip
You can also update existing Products by adding the `enupal-sync` metadata in order to sync with Stripe Payments.
:::

### Add Price

Add at least one price to your Product, here you can define price type: `One-Time` or `Recurring`

![Stripe Price](https://enupal.com/assets/docs/price-info.png)

## Sync All Products

Besides syncing the products each time a Stripe `Product/Price` is `created/updated/deleted` you can also choose Sync all products at once, this feature is available on your Stripe Payments settings, if the product/price already exists it will update it.

This setting is under `Stripe Payments -> Settings -> Pro -> Products Sync`

![Stripe Product](https://enupal.com/assets/docs/stripe-payments-sync-all-products.png)

::: tip
Make sure that the `enupal-sync` metadata is set on your Stripe Product
:::

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

