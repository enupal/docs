# Orders - Display Form Fields Values - Metadata

Let's display the Form Fields values submitted from our Stripe Payment Form Order in the templates.

```twig
{% set number = "MFsC3955Mz3O" %}
{% set order = craft.enupalStripe.getOrderByNumber(number) %}

<h1>Order: {{number}}</h1>

<h2>Date Ordered: {{ order.dateOrdered|date() }}</h2>

<h2>Form Data</h2>
{% set formData = order.getFormFields() %}

{% for handle, value in order.getFormFields() %}
	{{ handle }} : 
	
	{# Dropdowns and checkboxes #}
	{% if value is iterable %}
		<ul>
	    {% for val in value %}
	        <li> {{ val }} </li>
	    {% endfor %}
	    </ul>
	{% else %}
		{# Single Line, Paragraph, Number, Hidden #}
	    {{ value }}
	{% endif %}
	<br>
{% endfor %}
```