# Access Token

Socializer stores the `accessToken` retrieved by the providers after the user is logged-in. The following functions are
available for you to interact with APIs from your provider, chances are that you will need the following credentials

* `Client ID`
* `Client Secret`
* `Access Token`

For example if a user is logged-in with `Google` you can interact with `Google Sheets` using the following methods and 
variables to retrieve the credentials above:

::: code

```twig
{% set github = craft.socializer.getProviderByHandle('google') %}
{% set tokens = github.getCurrentUserToken() %}
{% set accessToken = tokens.access_token %}
{% set clientId = github.getClientId() %}
{% set clientSecret = github.getClientSecret() %}
```

```php
use enupal\socializer\Socializer;


$provider = Socializer::$app->providers->getProviderByHandle("google");
$tokens = $provider->getCurrentUserToken();
$accessToken = $tokens['access_token'];
$clientId = $provider->getClientId();
$clientSecret = $provider->getClientSecret();
```
:::