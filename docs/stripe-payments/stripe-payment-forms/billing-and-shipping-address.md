---
date: 2020-05-14
description: Let's enabled Shipping and Billing address in our Stripe Checkout Form. You can also validate the Zip code.
---

# Billing and Shipping Address

Let's enabled Shipping and Billing address in our Stripe Checkout Form. You can also validate the Zip code.

On the **Edit Payment Form** page you can enable the next settings in the right sidebar menu:

*   **Shipping Address:** Enables customers to specify the Shipping Address
*   **Billing Address:** Enables customers  to specify the Billing Address
*   **Verify Zip:** Specify whether Checkout should validate the billing ZIP code

You can check the Address in the Order View.


![Enable Shipping and Billing Address](https://enupal.com/assets/docs/26-stripe-payments.png)

![Shipping and Billing Address in Stripe Checkout](https://enupal.com/assets/docs/27-stripe-payments.png)

![Shipping and Billing Address in Order details](https://enupal.com/assets/docs/28-stripe-payments.png)

## Development

Chances are that you'll need to manipulate the addresses related to the order either on PHP or TWIG, here are some examples of how to get the addresses from the `Order`


```php

$shippingAddress = $order->getShippingAddressModel();
$address = [];

if ($shippingAddress){
    $address['addressName'] = $shippingAddress->getFullName();
    $address['addressStreet'] = $shippingAddress->address1;
    $address['addressCity'] = $shippingAddress->city;
    $address['addressState'] = $shippingAddress->stateName;
    $address['addressZip'] = $shippingAddress->zipCode;
    $address['addressCountry'] = $shippingAddress->getCountryText();
    $address['addressCountryIso'] = $shippingAddress->getCountry()->iso;
}

$billingAddress = $order->getBillingAddressModel();
$address = [];

if ($billingAddress){
    $address['addressName'] = $billingAddress->getFullName();
    $address['addressStreet'] = $billingAddress->address1;
    $address['addressCity'] = $billingAddress->city;
    $address['addressState'] = $billingAddress->stateName;
    $address['addressZip'] = $billingAddress->zipCode;
    $address['addressCountry'] = $billingAddress->getCountryText();
    $address['addressCountryIso'] = $billingAddress->getCountry()->iso;
}

```

