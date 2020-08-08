---
date: 2020-05-14
description: Learn how to change a customer’s subscription by upgrading or downgrading their plan
---

# Update subscription plan

Learn how to change a customer’s subscription by upgrading or downgrading their plan. This guide is based on the official [stripe docs.](https://stripe.com/docs/billing/subscriptions/upgrading-downgrading)The following fields are required when the form is submitted:  

*   subscriptionId
*   planId

::: tip
We recommend to use the [Stripe Customer Portal feature](https://docs.enupal.com/stripe-payments/templating/update-billing.html)
:::

## Basic - If you already know the plan id

For example, if you already know the plan id (from your Stripe account), you can create a simple form to update the plan of that specific subscription.  
  
A **_subscription_** variable will be available in the redirect URL.

```twig
{% if currentUser %}
    {% for order in craft.enupalStripe.getSubscriptionsByUser(currentUser.id) %}
        {% set subscription = order.getSubscription() %}
        
        {% if subscription.status == 'active' %}
            <form action="enupal-stripe/update-subscription" method="POST">
                <input type="hidden" aria-hidden="true" name="redirect" value="{{ 'subscription-updated/'|hash }}">
                {{ csrfInput() }}
                <input type="hidden" aria-hidden="true" name="subscriptionId" value="{{ subscription.data.id }}">
                <ul>
                    <li>{{ 'Order Number:'|t }} {{ order.number }}</li>
                    <li>{{ 'Plan nickname:'|t }}  {{ subscription.planNickName }}</li>
                    <li>{{ 'Subscription ID'|t }}  {{ subscription.data.id }}</li>
                    <li>{{ 'Status:'|t }}  {{ subscription.status }} </li>
                    <li>{{ 'Interval:'|t }}  {{ subscription.interval }} </li>
                    <li>{{ 'Period Start:'|t }}  {{ subscription.startDate|date }} </li>
                    <li>{{ 'Period end:'|t }}  {{ subscription.endDate|date }} </li>
                    <li>{{ 'Quantity:'|t }}  {{ subscription.quantity }} </li>
                </ul>
    
                <input type="hidden" aria-hidden="true" name="planId" value="plan_ClFw7q1Y9nyeR7">
    
                <button>{{ 'Upgrade to GOLD'|t }}</button>   
                
            </form>
        {% endif %}

    {% endfor %}
    
{% endif %}
```

## Advanced - If you want the user to choose the plan

We'll need a dropdown with all the plans so the user can choose the plan. You can also build your own dropdown manually, just make sure that the values are valid plan ids from your Stripe account.

```twig
{% if currentUser %}
    {% set stripePlans = craft.enupalStripe.getStripePlans() %}
    {% for order in craft.enupalStripe.getSubscriptionsByUser(currentUser.id) %}
        {% set subscription = order.getSubscription() %}
        
        {% if subscription.status == 'active' %}
            <form action="enupal-stripe/update-subscription" method="POST">
                <input type="hidden" aria-hidden="true" name="redirect" value="{{ 'subscription-updated/'|hash }}">
                {{ csrfInput() }}
                <input type="hidden" aria-hidden="true" name="subscriptionId" value="{{ subscription.data.id }}">
                    <ul>
                        <li>{{ 'Order Number:'|t }} {{ order.number }}</li>
                        <li>{{ 'Plan nickname:'|t }}  {{ subscription.planNickName }}</li>
                        <li>{{ 'Plan ID'|t }}  {{ subscription.data.plan.id }}</li>
                        <li>{{ 'Subscription ID'|t }}  {{ subscription.data.id }}</li>
                        <li>{{ 'Status:'|t }}  {{ subscription.status }} </li>
                        <li>{{ 'Interval:'|t }}  {{ subscription.interval }} </li>
                        <li>{{ 'Period Start:'|t }}  {{ subscription.startDate|date }} </li>
                        <li>{{ 'Period end:'|t }}  {{ subscription.endDate|date }} </li>
                        <li>{{ 'Quantity:'|t }}  {{ subscription.quantity }} </li>
                    </ul>
    
                    <div class="col form-group">
                        <div class="heading">
                            <label for="planId">
                                {{ "Select Plan"|t }}
                            </label>
                        </div>
                        <div class="input">
                            <select
                                name="planId"
                                id="planId"
                                required aria-required="true"
                            >
                                {%- for key, option in stripePlans -%}
    
                                    {%- set optionLabel = (option.label is defined ? option.label : null) -%}
                                    {%- set optionValue = (option.value is defined ? option.value : key) -%}
    
                                    <option value="{{ optionValue }}">{{ optionLabel }}</option>
                                {% endfor %}
                            </select>
                        </div>
                    </div>
    
                    <button>{{ 'Upgrade Plan'|t }}</button>   
                
            </form>
        {% endif %}
    {% endfor %}
    
{% endif %}
```