# Update Card Info

Use the following steps to create a Checkout page that collects your customer’s payment details and returns a Payment Method (if [SCA](https://enupal.com/craft-plugins/stripe-payments/docs/getting-started/sca) is enabled) or a token (if [SCA](https://enupal.com/craft-plugins/stripe-payments/docs/getting-started/sca) is disabled). Then we'll use the Stripe REST APIs to update the payment method used for future invoices.

## If SCA is enabled

If SCA is enabled in your Stripe Payment settings, create a template in the front-end with the following code to allow users to update their card info via the new Stripe Checkout.

```twig
{% if currentUser %}

    {% do view.registerJsFile('https://js.stripe.com/v3/') %}
    <script
    src="https://code.jquery.com/jquery-1.12.4.min.js"
    integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
    crossorigin="anonymous"></script>

    {% set stripeCustomer = craft.enupalStripe.getStripeCustomer(currentUser.email) %}  
    {% set pbk = craft.enupalStripe.getPublishableKey() %}
    {% set session = craft.enupalStripe.getSetupSession(currentUser.email, 'success-url/', 'cancel-url/') %}  
    
    {% set currentCard = 'No card' %}
    {# Check first for default payment method #}
    {% set paymentMethodId = stripeCustomer.invoice_settings.default_payment_method ?? null  %}

    {% if paymentMethodId %}
        
        {% set paymentMethod = craft.enupalStripe.getPaymentMethod(paymentMethodId) %}

        {% if paymentMethod.card is defined %}
            {% set currentCard = paymentMethod.card.brand ~ " ending in " ~ paymentMethod.card.last4 %}
        {% endif %}

    {% else %}

        {% set currentCard = stripeCustomer.default_source.brand ~ " ending in " ~ stripeCustomer.default_source.last4 %}

    {% endif %}

    <h1>Current Card:<h2> <code> {{currentCard}}</code>
     
    <form action="enupal-stripe/update-billing-info" method="POST" id="update-card">
        {{ csrfInput() }}
        <button>{{ 'Update Card Details'|t }}</button>
    </form>

    <script>
        $( document ).ready(function() {
            var stripe = Stripe('{{pbk}}');

            $('#update-card').on('click', function(e) {
                e.preventDefault();
                stripe.redirectToCheckout({
                    sessionId: '{{session.id}}'
                });
            });
         });
    </script>
{% endif %}
```

## If SCA is disabled

If SCA is disabled in your Stripe Payment settings, create a template in the front-end with the following code to allow users to update their card info via the legacy Stripe Checkout modal window.

The redirect URL will have available the following variable: `stripeCustomer`

```twig
{% if currentUser %}
     {% set stripeCustomer = craft.enupalStripe.getStripeCustomer(currentUser.email) %}  
     
   
     {% set currentCard = stripeCustomer.default_source.brand ~ " ending in " ~ stripeCustomer.default_source.last4 %}

     <h1>Current Card:<h2> <code> {{currentCard}}</code>
     
    <form action="enupal-stripe/update-billing-info" method="POST">
    <input type="hidden" aria-hidden="true" name="redirect"
        value="{{ 'card-updated/'|hash }}">
    {{ csrfInput() }}
        <script
        src="https://checkout.stripe.com/checkout.js" class="stripe-button"
        data-key="{{ craft.enupalStripe.getPublishableKey() }}"
        data-image="/path/to/your/logo.png"
        data-name="Your Website Name"
        data-panel-label="Update Card Details"
        data-label="Update Card Details"
        data-allow-remember-me=false
        data-locale="auto"
        data-email="{{ currentUser.email }}">
        </script>
    </form>
{% endif %}
```