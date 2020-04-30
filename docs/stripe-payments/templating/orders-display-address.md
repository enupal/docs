# Orders - Display Address

If the [Shipping or Billing](https://enupal.com/craft-plugins/stripe-payments/docs/stripe-payment-forms/billing-and-shipping-address#entry:4358:url) address is enabled we could display the Address associated with our Order in the templates in two ways:

## getShippingAddress()

The **_getShippingAddress_** method available in our Order model, will return a HTML address formated:

```twig
{% set number = "MFsC3955Mz3O" %}
{% set order = craft.enupalStripe.getOrderByNumber(number) %}

<h1>Order: {{number}}</h1>

<h3>{{ 'Shipping Address'|t }}</h3>

{{ order.getShippingAddress()|raw }}
```

## getShippingAddressAsArray()

The **getShippingAddressAsArray** method available in our Order model, will return an array with the next keys:

*   addressName
*   addressStreet
*   addressCity
*   addressState
*   addressZip
*   addressCountry

```twig
{% set number = "V5ITwDaTOSug" %}
{% set order = craft.enupalStripe.getOrderByNumber(number) %}

<h1>Order: {{number}}</h1>

<h3>{{ 'Shipping Address'|t }}</h3>

{% set address = order.getShippingAddressAsArray() %}
<ul>
	<li>
		{{ address.addressName }}
	</li>
	<li>
		{{ address.addressStreet }}
	</li>
	<li>
		{{ address.addressCity }}
	</li>
	<li>
		{{ address.addressState }}
	</li>
	<li>
		{{ address.addressZip }}
	</li>
	<li>
		{{ address.addressCountry }}
	</li>
</ul>
```