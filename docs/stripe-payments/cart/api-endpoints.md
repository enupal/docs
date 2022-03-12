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

## POST /enupal-stripe/cart/add

Use the `POST /enupal-stripe/cart/add` endpoint to add one or multiple items to the cart.

In the following example, `quantity` is the amount of items you want to add and `price` is the Stripe Price ID. You can add multiple items to the cart by appending more objects in the items array.

::: tip
- If a cart does not exist in session it will create a new one
- If a price was already in the cart the quantity will be added
:::

::: code
```json Request
{
	"items": [
	  {
        "price": "price_1KG2NLLLWVlbcCFQjBXsO9HG",
        "quantity": 2,
        // Optional - An arbitrary string attached to the object. Often useful for displaying to users. Defaults to product name.
        "description": "Shirt",
        // Optional - When set, provides configuration for this item’s quantity to be adjusted by the customer during Checkout.
        "adjustable_quantity": {
          "enabled": "true",
          "minimum": 1,
          "maximum": 10
        }
	  }
	],
	// Optional - Set of key-value pairs that you can attach to the cart.
	"metadata": {
		"is_gift": "yes"
	}
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

`Price not found`
```json
{"status":404, "error":true, "message":"Cannot find price: price_1KErstLLWVlbcCFQEGHbAgdl"}
```

`Server Error`
```json
{"status":500, "error":true, "message":"Server Error"}
```

### Example API calls
::: code
```javascript node.js
let formData = {
    "items": [
        {
            "price": "price_1KErstLLWVlbcCFQEGHbAgdl",
            "quantity": 2
        }
    ]
};

fetch('/enupal-stripe/cart/add', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
.then(response => {
  return response.json();
})
.then(success => console.log(success))
.catch((error) => {
  console.error('Error:', error);
});
```

```javascript JQuery
var formData = {
    "items": [
        {
            "price": "price_1KErstLLWVlbcCFQEGHbAgdl",
            "quantity": 2
        }
    ]
};

$.ajax({
    type:"POST",
    url:"/enupal-stripe/cart/add",
    data: data,
    dataType : 'json',
    success: function(response) {
        console.log(response);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error(xhr, status, err.toString());
    }.bind(this)
});
```
:::

## GET /enupal-stripe/cart

Use the `GET /enupal-stripe/cart` endpoint to get the cart as JSON.

All monetary properties are returned in the default cart settings currency.

::: code
```json Response - Cart
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
```json Response - Empty Cart
{
    "number": "be624de5585e915534aa0a3d4297a244",
    "metadata": [],
    "total_price": "0.0000",
    "total_price_with_currency": "$0.00",
    "currency": "usd",
    "item_count": "0",
    "items": [],
    "products": []
}
```
:::

### Example API calls
::: code
```javascript node.js
fetch('/enupal-stripe/cart', {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
.then(response => {
  return response.json();
})
.then(success => console.log(success))
.catch((error) => {
  console.error('Error:', error);
});
```

```javascript JQuery
$.ajax({
    type:"GET",
    url:"/enupal-stripe/cart",
    dataType : 'json',
    success: function(response) {
        console.log(response);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error(xhr, status, err.toString());
    }.bind(this)
});
```
:::

## POST /enupal-stripe/cart/update

Use the `POST /enupal-stripe/cart/add` endpoint to update the cart's line item quantities, or attributes and cart's metadata. You can submit a serialized cart form, or submit separate updates to a cart's line items, or attributes.

To update line item quantities, you can make a `POST` request with an updates object. The updates object must contain key-value pairs where the key is the line item's price_id, and the value is the desired line object to update:

::: tip
- If the price does not exist, will add the item
- To Remove an item you need to pass 0 as quantity
:::

::: code
```json Request
{
	"metadata": {
		"is_gift": "no"
	},
	"updates": {
	  "price_1KG2NLLLWVlbcCFQkM3jHBCc":{
		   "quantity": 2
	  },
	  "price_HHJE23CLLWVlbcCFQkM3jNmmc":{
		   "quantity": 0
	  }
	}
}
```

```json Response
{
    "number": "be624de5585e915534aa0a3d4297a244",
    "metadata": {
		"is_gift": "no"
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
            "price": "price_1KG2NLLLWVlbcCFQkM3jHBCc",
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

`Price not found`
```json
{"status":404, "error":true, "message":"Cannot find price: price_1KG2NLLLWVlbcCFQkM3jHBCc"}
```

`Server Error`
```json
{"status":500, "error":true, "message":"Server Error"}
```

### Example API calls
::: code
```javascript node.js
let formData = {
    "updates": {
        "price_1KG2NLLLWVlbcCFQkM3jHBCc": {
            "quantity": 2
        },
        "price_HHJE23CLLWVlbcCFQkM3jNmmc": {
            "quantity": 0
        },
    }
};

fetch('/enupal-stripe/cart/update', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
.then(response => {
  return response.json();
})
.then(success => console.log(success))
.catch((error) => {
  console.error('Error:', error);
});
```

```javascript JQuery
var formData = {
    "updates": {
        "price_1KG2NLLLWVlbcCFQkM3jHBCc": {
            "quantity": 2
        },
        "price_HHJE23CLLWVlbcCFQkM3jNmmc": {
            "quantity": 0
        },
    }
};

$.ajax({
    type:"POST",
    url:"/enupal-stripe/cart/update",
    data: data,
    dataType : 'json',
    success: function(response) {
        console.log(response);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error(xhr, status, err.toString());
    }.bind(this)
});
```
:::

## POST /enupal-stripe/cart/clear

Use the `POST /enupal-stripe/cart/clear` endpoint to set all quantities of all line items in the cart to zero.

::: code
```json Response
{
    "number": "be624de5585e915534aa0a3d4297a244",
    "metadata": [],
    "total_price": "0.0000",
    "total_price_with_currency": "$0.00",
    "currency": "usd",
    "item_count": "0",
    "items": [],
    "products": []
}
```
:::

### Example API calls
::: code
```javascript node.js
fetch('/enupal-stripe/cart/clear', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
.then(response => {
  return response.json();
})
.then(success => console.log(success))
.catch((error) => {
  console.error('Error:', error);
});
```

```javascript JQuery
$.ajax({
    type:"POST",
    url:"/enupal-stripe/cart/clear",
    dataType : 'json',
    success: function(response) {
        console.log(response);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error(xhr, status, err.toString());
    }.bind(this)
});
```
:::

## POST /enupal-stripe/cart/checkout

Use the `POST /enupal-stripe/cart/checkout` endpoint retrieve a Stripe Checkout object, use the `url` attribute to redirect the user to the Stripe Checkout page.

::: tip
- The user can go back to the website either to the `Cancel URL` or via the back browser button
- When the user successfully checkout the cart, will be redirected to the `Success Return URL` and a Stripe Payments order will be created.
- The [CheckoutEvent](../plugin-development/events) can be used to overwrite any of the [Stripe Session](https://stripe.com/docs/api/checkout/sessions/create) params before create the checkout session.
:::

::: code
```json Response
{
    "id": "cs_test_b1Z6MWZA1MOBkItTDK59GaFM2DaxZWUqnoFktxzbJehW3RKEegbS10HBv0",
    "object": "checkout.session",
    "after_expiration": null,
    "allow_promotion_codes": true,
    "amount_subtotal": 3200,
    "amount_total": 3200,
    "automatic_tax": {
        "enabled": false,
        "status": null
    },
    "billing_address_collection": "required",
    "cancel_url": "http://craft3.nitro/store",
    "client_reference_id": null,
    "consent": null,
    "consent_collection": null,
    "currency": "usd",
    "customer": "cus_KkCcGfDLQSXtwQ",
    "customer_creation": null,
    "customer_details": {
        "email": "test@test.com",
        "phone": null,
        "tax_exempt": "none",
        "tax_ids": null
    },
    "customer_email": null,
    "expires_at": 1647179962,
    "livemode": false,
    "locale": "auto",
    "metadata": {
        "stripe_payments_cart_number": "be624de5585e915534aa0a3d4297a244",
        "stripe_payments_user_id": "1"
    },
    "mode": "payment",
    "payment_intent": "pi_3KcVTaLLWVlbcCFQ1TdB1Niz",
    "payment_link": null,
    "payment_method_options": [],
    "payment_method_types": [
        "card"
    ],
    "payment_status": "unpaid",
    "phone_number_collection": {
        "enabled": false
    },
    "recovered_from": null,
    "setup_intent": null,
    "shipping": null,
    "shipping_address_collection": {
        "allowed_countries":["AC","AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CV","CW","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MK","ML","MM","MN","MO","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","US","UY","UZ","VA","VC","VE","VG","VN","VU","WF","WS","XK","YE","YT","ZA","ZM","ZW","ZZ"]},
    "shipping_options": [
        {
            "shipping_amount": 0,
            "shipping_rate": "shr_1KE8XgLLWVlbcCFQgYFvBftd"
        },
        {
            "shipping_amount": 500,
            "shipping_rate": "shr_1KE8WSLLWVlbcCFQJ7otZYxH"
        }
    ],
    "shipping_rate": null,
    "status": "open",
    "submit_type": null,
    "subscription": null,
    "success_url": "http://craft3.nitro/enupal/stripe-payments/finish-order?session_id={CHECKOUT_SESSION_ID}",
    "total_details": {
        "amount_discount": 0,
        "amount_shipping": 0,
        "amount_tax": 0
    },
    "url": "https://checkout.stripe.com/pay/cs_test_b1Z6MWZA1MO555dsdsGgfgmdkgmbdgriwjtieugfijdfknfsjSJSFJDJGmfgldkaMGMDLKMKLHMLRKJHKLDSKGMKLTJEKJKDFKDMGKMDKSDMTKJSKJ66l"
}
```
:::

### Example API calls
::: code
```javascript node.js
fetch('/enupal-stripe/cart/checkout', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
.then(response => {
  return response.json();
})
.then(success => {
  // Redirect to Stripe Checkout, the `assign` function allow the user come back from browser back button
  window.location.assign(success.url);
})
.catch((error) => {
  console.error('Error:', error);
});
```

```javascript JQuery
$.ajax({
    type:"POST",
    url:"/enupal-stripe/cart/checkout",
    dataType : 'json',
    success: function(response) {
        // Redirect to Stripe Checkout, the `assign` function allow the user come back from browser back button
        window.location.assign(response.url);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error(xhr, status, err.toString());
    }.bind(this)
});
```
:::

### Error Responses

`Cart is empty`
```json
{"status":400,"error":true,"message":"Cart is empty"}
```