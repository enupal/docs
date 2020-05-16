---
date: 2020-05-14
description: Easily create a payment confirmation email to the admins
---

# Admin

Easily create a payment confirmation email to the admins

In your Craft CMS dashboard go to **Stripe Payments** → **Settings** → **Admin Notifications**  

Enable the **Admin Email Notification** lightswicth and fill out the following fields:

*   **Subject:** The Order model is available to pass any Order info, for example: `Order Recieved: {{ order.number }}`
*   **Email Recipients:** A comma-delimited list of email addresses to notify when a payment is recieved
*   **Sender Name**
*   **Sender Email Address**
*   **Reply To Email Address**

![Admin Notification Email Settings](https://enupal.com/assets/docs/21-stripe-payments.png)

## Template Override

Stripe Payments give you a basic email template, you can override it adding the path of your email template within the Template Override input field.