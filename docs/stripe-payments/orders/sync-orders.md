---
date: 2020-05-14
description: You can import One-Time and Subscriptions payments from Stripe, set a default status and filter by a date range.
---

# Sync Orders

You can import One-Time and Subscriptions payments from Stripe, set a default status and filter by a date range. This process will create Orders in Stripe Payments if the Order does not exist in the CMS yet. You can choose to create the order only if the User exists in Craft CMS.  
  
In your Craft CMS dashboard go to **Stripe Payments** → **Settings** → **Sync Orders**
  
Please fill out the following settings:

*   **Sync Type:** One-Time or Subscriptions Orders
*   **Enable Date Range:** Enable if you need sync orders given a date range.
*   **Limit:** A limit on the number of new orders to be created.
*   **Payment Form:** All Orders need to be attached to a Payment Form, you can create a default one for this process the amount will be taken from the Stripe Order.
*   **Order Status:** Set a default Order Status to the Order
*   **Create the Order only if User exists:** Enable it if you want to create the Order only if the Order Email has a Craft User associated

Click on "Sync Orders" a Job will be added to the queue and the Sync process will be running in the background.


::: tip
If you have more than 1000 Orders you may need to run this process for more than one time.
:::

![Sync Orders](https://enupal.com/assets/docs/50-enupal-stripe-sync-orders.png)

