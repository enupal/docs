# Multiple Subscription Options

Let your customers choose the plans to sign up for recurring payments. Select the Stripe plans easily with a drag & drop UI, reorder the plans and make a default plan to display in a Dropdown Select or Radio Buttons.

## Customer Chooses Plan

To create a payment form where the customer can sign up for one of several available plans, select **Customer Chooses Plan** in the **Subscription Type** dropdown.

Next select the **Display Plans As**. The options are a radio button list or a dropdown.

Next add a **Select Label** to display as a label of the Radio button or Dropdown. (This setting is optional)

Next, you can add and select the plans that the customer will see before the pay button. The workflow is like a matrix field from craft. Click on the **\+ Subscription Plan** button they can be dragged and deleted as needed. When you add a Plan you can:

*   Select the plan (If you can't see your plans go to **Stripe Payments** → **Settings** → **Subscription Plans** and click in the **Refresh** button) 
*   Add a Custom Label. If blank we'll take the plan info from Stripe with the next format: `Nickname amount/interval`
*   Add a **Setup Fee** for the first payment only.
*   Make as the default option

![Customer Chooses Plan](https://enupal.com/assets/docs/18-stripe-payments.png)


