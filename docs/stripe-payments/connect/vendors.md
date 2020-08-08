---
date: 2020-08-07
description: A vendor is associated to a Craft CMS user, each vendor will be associated to a Stripe account
---

# Vendors

A vendor is associated to a Craft CMS user and each vendor will be associated to a Stripe account. 

## How to create a vendor?

Vendors can be created from two ways:

1.- From the CP. under Stripe Payments → Vendors on the index page click on "Create Vendor"

2.- Create vendors on user activation, specifying a lightswitch user field or a user group on the Connect settings, here the vendors will be created as disabled and when the vendor connect their Stripe Account the vendor will be enabled.

![Vendors Index](https://enupal.com/assets/docs/enupal-stripe-connect-3.png)

![Edit Vendor](https://enupal.com/assets/docs/enupal-stripe-connect-4.png)

## Sample Templates

We have created this basic [sample templates](https://github.com/enupal/stripe/tree/master/templates), these are useful to handle vendors on the front-end to connect to Stripe and to manage products. Templates for Craft Commerce _comming soon_

## How to associate a Stripe Account to a vendor?

This needs to be done via the front-end, each vendor needs to be logged in with their Craft User.
Please take as an example our marketplace templates (link above), in the Front-end a logged in vendor could go to `/marketplace/account` the vendor needs to click on the `Connect with Stripe` button and will be redirected to the Stripe Onboard process and finally will be redirected with a valid Stripe Id that will be associated to the vendor.

![Front-end Vendor Account](https://enupal.com/assets/docs/enupal-stripe-connect-5.png)

![Stripe Onboard 1](https://enupal.com/assets/docs/enupal-stripe-connect-10.png)

![Stripe Onboard 3](https://enupal.com/assets/docs/enupal-stripe-connect-11.png)

![Stripe Onboard 2](https://enupal.com/assets/docs/enupal-stripe-connect-12.png)

![Front-end Vendor Account 2](https://enupal.com/assets/docs/enupal-stripe-connect-13.png)