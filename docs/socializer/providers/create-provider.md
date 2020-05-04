# Create a provider

In this example you’ll be creating a provider to allow user login/sign-up to your Craft CMS website

In your Craft CMS dashboard go to **Socializer** → **Providers** → **New Provider**

Make sure to select the desire provider before click on `New Provider`, you'll be redirected to the **Edit Provider** you'll notice that a unique **Handle** is created when you create a new Provider (this field can't be updated). You can use this handle to display the Provider login URL in the Craft templates.

![Socializer - Provider index page](https://enupal.com/assets/docs/socializer-2.png)

## Create a new application

Any provider will need the following two keys:

* Client ID
* Client Secret

1. The first step is create a new app clicking in the **instructions** link displayed on your provider. You will need to add the 
`Redirect URI` or `Callback URL` on your app. 

2. After you create your app you can copy the `Client ID` and `Client secret` credentials into your Socializer provider.

3. Enable the provider

4. Save the provider

![Socializer - Edit Provider](https://enupal.com/assets/docs/socializer-3.png)


 

