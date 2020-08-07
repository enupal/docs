---
date: 2020-08-07
description: Stripe Connect lets you facilitate payments on your software platform, build a marketplace, and pay out sellers or service providers globally
---

# Overview

[Stripe Connect](https://stripe.com/en-gb/connect) lets you facilitate payments on your software platform, build a marketplace, and pay out sellers or service providers globally

- **Onboard vendors:** Onboard your vendors and verify their identity.
- **Pay out vendors:** Split payments, transfer funds, and send money.
- **Manage platform:** Manage payments and vendors on your platform or marketplace.

Stripe Payments uses the [Separate charges and transfers](https://stripe.com/docs/connect/charges-transfers) approach to Pay out vendors quickly and reduce operational overhead with Connect’s global routing and payout engine. You can split funds between multiple vendors, instantly route payments across borders, and specify your earnings on each transaction.

![Separate Charges](https://enupal.com/assets/docs/enupal-stripe-connect-2.svg)

When the Stripe Connect setting is enabled, three new links will be available in the main sidebar menu:

- Commissions
- Connect
- Vendors

Basically a **Vendor** is associated to a Craft User and to a Stripe Account, on **Connect** you can define for 1 Vendor, what products (1 or more, or all) the Vendor Rate to transfer. And finally on **Commissions** you can manage the transfers, if the payment type for the vendor is `manually` you can Pay the commission from there.

## Enable Stripe Connect
 
 To enable Stripe Connect please follow the next 2 steps:
 
 1.- On  your Craft CMS dashboard please go to Stripe Payments → Settings → Connect and enable the `Enable Connect` lightswitch, here you can set the following settings:
 
 - **Vendor Name:** What fields are used to display the vendor name? by default username will be used
 - **Global Commission:** Percentage of the total sale price that the vendor receives.
 - **Who is a vendor?:** Allow auto vendor registration if a new User has a Lightswitch field or has a specific user group
 
 2.- On  your Craft CMS dashboard please go to Stripe Payments → Settings → General and save your `Client Id` 
 To get your Client ID please go the `connect settings` link and add the Redirect URL displayed
 
 That's it! you're ready to start using Stripe Connect on Stripe Payments. 
 
 
 

