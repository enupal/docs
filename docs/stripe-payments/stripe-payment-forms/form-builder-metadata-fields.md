# Form Builder - Metadata Fields

Save additional info to the Order as Metadata in Stripe. The following custom fields are available:

*   Single Line 
*   Paragraph
*   Numbers 
*   Dropdowns 
*   Checkboxes
*   Hidden

## Form Fields
You can add Form Fields within any Stripe Payments Form. Within your **Edit Payment Form** page click in the **Form Fields** tab. The add fields workflow is like a matrix field from craft. Click on the **Field** button that you want to add to your form and they can be dragged and deleted as needed. When you add a **Field** you can:

|Setting|Fields|
|--- |--- |
|Label|All|
|Required|All|
|Placeholder|Single-Line, Paragraph,|
|Options|Dropdown, Check Boxes|
|Min Value, Max Value|Number|
|Hidden Value (String and Twig code is allowed)|Hidden|

## Hidden Field

The hidden field allows set Twig Code in the **_Hidden Value_** input. You can use the next variables:

*   **currentUser:** (If there is a user logged in) { currentUser.name }, { currentUser.email }, etc..
*   **craft:** { craft.request.url }
*   { systemName }
*   { siteName }
*   { siteUrl }

If you need pass custom variables, you can use the **_addVariables_** action, let's say that we need to pass the Entry object to save the Id in the Hidden field, we need first pass the Entry as a variable and then call our **paymentForm** tag:

*   { entry.id }

``` twig
{% do craft.enupalStripe.addVariables({ entry: entry }) %}

{{ craft.enupalstripe.paymentForm('translate') }}
```

![Form Builder](https://enupal.com/assets/docs/_lightboxdocs/22-stripe-payments.png)

![Form Fields](https://enupal.com/assets/docs/_lightboxdocs/23-stripe-payments.png)

![Form Fields In Order details](https://enupal.com/assets/docs/_lightboxdocs/24-stripe-payments.png)

![Form Fields as Metadata in Stripe Order details](https://enupal.com/assets/docs/_lightboxdocs/25-stripe-payments.png)

