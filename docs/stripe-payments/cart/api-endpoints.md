---
date: 2022-03-09
description: This guide shows how to use the Stripe Payments Cart API to update cart line items, add cart metadata, and generate checkout the cart.
---

# Cart API Endpoints

This guide shows how to use the Stripe Payments Cart API to update/add cart line items, add cart metadata, and checkout the cart.

::: tip
For simplicity, the code examples are thought to be used under a browser session, calling the Cart API using Javascript (Jquery, React, Angular, Vue, etc). Support for a headless API will be added coming soon.
:::

::: warning
The Cart API accepts One-Time items and Recurring (subscription) items at the same cart session, however, if you're adding more than one recurring item, all the intervals and the currencies should be the same
:::

## POST /enupal-payments/cart/add

Use the `POST /enupal-payments/cart/add` endpoint to add one or multiple items to the cart.

In the following example, `quantity` is the amount of items you want to add and `price` is the Stripe Price ID. You can add multiple items to the cart by appending more objects in the items array.

::: code
```json Request
{
	"items": [
	  {
        "price": "price_1KG2NLLLWVlbcCFQjBXsO9HG",
        "quantity": 2,
        // Optional - An arbitrary string attached to the object. Often useful for displaying to users. Defaults to product name.
        "description": "Shirt"
        // Optional - When set, provides configuration for this item’s quantity to be adjusted by the customer during Checkout.
        "adjustable_quantity": {
          "enabled": "true",
          "minimum": 1,
          "maximum": 10,
        }
	  }
	],
	// Optional - Set of key-value pairs that you can attach to the cart.
	"metadata": {
		"is_gift": "yes"
	},
}
```

```json Response
{
    "number": "be624de5585e915534aa0a3d4297a244",
    "metadata": {
		"is_gift": "yes"
	},
    "total_price": 62,
    "total_price_with_currency": "$62.00",
    "currency": "usd",
    "item_count": 2,
    "items": [
        {
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1641459827,
            "currency": "usd",
            "livemode": false,
            "lookup_key": null,
            "metadata": [],
            "nickname": null,
            "product": "prod_KuhHgpFYeQwq7B",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 3200,
            "unit_amount_decimal": "3200",
            "price": "price_1KErstLLWVlbcCFQEGHbAgdl",
            "quantity": 2,
            "adjustable_quantity": {
                "enabled": "true",
                "minimum": 1,
                "maximum": 10,
            }
        }
    ],
    "products": {
        "prod_KuhHgpFYeQwq7B": {
            "id": "prod_KuhHgpFYeQwq7B",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1641459826,
            "description": "Red Cap",
            "images": [
                "https://files.stripe.com/links/MDB8YWNjdF8xQ0NXS1NMTFdWbGJjQ0ZRfGZsX3Rlc3RfUDVRc3RvWUhueVh0aE5SdmFNQ1dhendJ00KjhLcAog"
            ],
            "livemode": false,
            "metadata": {
                "enupal-sync": "true"
            },
            "name": "Cap",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1646294012,
            "url": null
        }
    }
}
```
:::

### Error Responses

Price not found
```json
{"status":400, "error":true, "message":"Cannot find price: price_1KErstLLWVlbcCFQEGHbAgdl"}
```

Server Error
```json
{"status":500, "error":true, "message":"Server Error"}
```

### Checkout the cart

When the user wants checkout the cart, the `/enupal-payments/cart/checkout` endpoint will return a Stripe Checkout URL and the user will be redirected to the [Stripe Checkout page](https://stripe.com/payments/checkout) with all the items added to the cart.

After the user pays, will be redirected to the Craft CMS site and an order will be created on the Stripe Payments plugin.

::: tip
If you want to explore all the Stripe Checkout features try a live example [here](https://checkout.stripe.dev/)
:::
 
 

