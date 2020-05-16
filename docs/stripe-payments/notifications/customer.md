---
date: 2020-05-14
description: Easily create a payment confirmation email to your customers. 
---

# Customer

Easily create a payment confirmation email to your customers. 

In your Craft CMS dashboard go to **Stripe Payments** → **Settings** → **Customer Notifications**  

Enable the **Customer Email Notification** lightswicth and fill in the following fields:

*   **Subject:** The Order model is available to pass any Order info, for example: `Order Recieved: {{ order.number }}`
*   **Sender Name**
*   **Sender Email Address**
*   **Reply To Email Address**

![Customer Notification Email Settings](https://enupal.com/assets/docs/20-stripe-payments.png)

## Template Override

Stripe Payments give you a basic email template, you can override it adding the path of your email template within the **Template Override** input field.
