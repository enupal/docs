# getAllOrders

Get all Stripe Orders to handle it in your templates.

```twig
{% set orders = craft.enupalStripe.getAllOrders() %}
<h1>Orders</h1>
<ul>
	{% for order in orders %}
		
		{% set paymentForm = order.getPaymentForm() %}
		
		<li>
			Number: {{ order.number }} 
			Item: {{ paymentForm.name }}
		</li>
		
	{% endfor %}
</ul>
```

## Orders

To add Element queries to orders and filter by email, number, dateOrdered, etc.. You can follow the next example:

```twig
{% set orders = craft.enupalStripe.orders({email: 'info@enupal.com'}).limit(10).all() %}

<h1>Orders</h1>

{% for order in orders %}
	{% set paymentForm = order.getPaymentForm() %}
	<h3>{{ order.email }} - {{ paymentForm.name }} - {{ order.dateOrdered|date }}</h3>	
	{{ order.number }}
	
{% endfor %}
```