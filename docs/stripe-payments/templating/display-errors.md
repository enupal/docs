# Display Errors

If there is a payment error, your page will reload with a variable that uses the same name as your payment form handle. If you form handle is paymentForm your errors will be available to you via paymentForm.getErrors().

```twig
{% if paymentForm is defined and paymentForm.getErrors() | length %}
    {% for errors in paymentForm.getErrors() %}
        <ul class="errors">
            {% for error in errors %}
                <li>{{ error }}</li>
            {% endfor %}
        </ul>
    {% endfor %}
{% endif %}
```