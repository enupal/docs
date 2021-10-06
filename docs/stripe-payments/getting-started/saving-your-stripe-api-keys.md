---
date: 2020-05-14
description: Now that you have installed the Stripe Payments plugin from the Craft CMS plugin store, you can now connect it to your Stripe account.
---

# Saving your Stripe API Keys

Now that you have installed the Stripe Payments plugin from the Craft CMS plugin store, you can now connect it to your Stripe account. You'll first need to retrieve your Stripe API, and then enter these credentials into the Stripe Payments Settings page.

Visit [Stripe.com](https://stripe.com/) to get your API keys. Once you are on the Stripe webpage, sign in, and go to your _dashboard_ and select **Developers → API Keys** from the menu. Make sure to have **"Viewing Test Data**" enabled to have Test mode enabled before your site go live.

![Developer -> Api Keys (Stripe.com)](https://enupal.com/assets/docs/_lightboxdocs/02-stripe-payments.png)

Please go ahead an open in a new tab the settings of the Stripe Payments plugin:  **Stripe Payments** **→ Settings** → **General**

For the next steps, you’re going to be switching between the 2 tabs and copy 4 keys from Stripe to be saved in the Stripe Payments plugin.

1.  Under your Stripe Payments settings, make sure that the "**Test Mode**" lightswitch is enabled.
2.  Back in your Stripe dashboard tab, please copy your Publishable key (_starts with “pk\_test\_”_), switching to your Stripe Payments Settings tab, and pasting it into the "**Test Publishable Key**" text box
3.  Now do the same for the Secret key (_starts with “sk\_test\_”_), and pasting it into the "**Test Secret Key**"  text box.

The next step is do the same for your live keys. Under your Stripe Payments settings, make sure that the "**Test Mode**" lightswitch is disabled.

*   Back in your Stripe dashboard tab, switch to Live mode (toggle “View Test Data” off), and repeat the above for your live keys.

## Saving the Stripe API keys via config file
 
 If you don't want store your Stripe API keys in the database and add a security layer you can also store your Stripe API keys in your **general.php** config file, in the following example we're storing the API keys in the **.env** file and then retrieving the values in the config file:
 
 ```php
<?php
return [
    // Global settings
    '*' => [
       ...
    ],

    // Dev environment settings
    'dev' => [
        // Dev Mode (see https://craftcms.com/support/dev-mode)
        'devMode' => true,
        'stripePayments' => [
            'testPublishableKey' => getenv('YOUR_TEST_PUBLISHABLE_KEY'),
            'testSecretKey' =>  getenv('YOUR_TEST_SECRET_KEY'),
            'testMode' => 1,
            // This setting is only needed is Stripe Connect is enabled 
            'testClientId' => getenv('YOUR_TEST_CLIENT_ID'),
            // OPTIONALLY -> if you want to check webhook signatures you can add the following setting (more info here https://stripe.com/docs/webhooks/signatures)
            'testWebhookSigningSecret' => getenv('TEST_WEBHOOK_SIGNING_SECRET'),
        ]
    ],

    // Production environment settings
    'production' => [
        'stripePayments' => [
            'livePublishableKey' => getenv('YOUR_LIVE_PUBLISHABLE_KEY'),
            'liveSecretKey' => getenv('YOUR_LIVE_SECRET_KEY'),
            'testMode' => 0,
            // This setting is only needed is Stripe Connect is enabled 
            'liveClientId' => getenv('YOUR_LIVE_CLIENT_ID'),
            // OPTIONALLY -> if you want to check webhook signatures you can add the following setting (more info here https://stripe.com/docs/webhooks/signatures)
            'liveWebhookSigningSecret' => getenv('LIVE_WEBHOOK_SIGNING_SECRET'),
        ]    
    ],
];
```
![Stripe Dashboard](https://enupal.com/assets/docs/_lightboxdocs/03-stripe-payments.png)

![Stripe Payments General Settings](https://enupal.com/assets/docs/_lightboxdocs/04-stripe-payments.png)


