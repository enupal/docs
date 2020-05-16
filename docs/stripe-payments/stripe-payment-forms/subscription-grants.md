---
date: 2020-05-14
description: Subscription grants allow assigning user groups for when a subscription is created or deleted. 
---

# Subscription Grants

Subscription grants allow assigning user groups for when a subscription is created or deleted. On your Craft CMS dashboard go to **Settings** -> **Subscription Grants**

Add the following [webhook](https://enupal.com/craft-plugins/stripe-payments/docs/stripe-payment-forms/webhook#entry:6222:url) events on your Stripe dashboard are required:

*   customer.subscription.created
*   customer.subscription.deleted

## Validate Grants on your templates

To check permissions on your templates you can use the following two methods:

*   [isInGroup](https://docs.craftcms.com/v2/templating/usermodel.html#isingroup-group)  (Returns whether the user belongs to a given group. This method accepts a [UserGroupModel](https://docs.craftcms.com/v2/templating/usergroupmodel.html) instance, a group ID, or a group handle (string).)
*   [can](https://docs.craftcms.com/v2/templating/usermodel.html#methods) (Returns whether the user has a given permission, either directly or via one of its groups.)

```twig
{# isInGroup example #}
{% if currentUser.isInGroup('groupHandle') %}

{# can example #}
{% if currentUser.can('permissionName') %}

{# can example 2 #}
{% if currentUser.can("createEntries:#{section.uid}") %}
```

![Stripe subscription grants index](https://enupal.com/assets/docs/stripe-subscription-grants-2.png)

![Stripe subscription grants edit](https://enupal.com/assets/docs/stripe-subscription-grants-1.png)

