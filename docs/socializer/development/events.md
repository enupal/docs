---
date: 2020-05-30
description: Socializer allows listen for events like EVENT_BEFORE_LOGIN, EVENT_AFTER_LOGIN, EVENT_BEFORE_REGISTER and EVENT_AFTER_REGISTER
---

# Events

Socializer allows listen for the following events

- EVENT_BEFORE_LOGIN
- EVENT_AFTER_LOGIN
- EVENT_BEFORE_REGISTER
- EVENT_AFTER_REGISTER

::: tip
The `EVENT_BEFORE_LOGIN` and `EVENT_BEFORE_REGISTER` events can set `isValid` to false
to cancel this action
:::

## EVENT_BEFORE_LOGIN

```php

use craft\base\Plugin;
use enupal\socializer\events\BeforeLoginEvent;
use enupal\socializer\services\Providers;
use yii\base\Event;

class YourPlugin extends Plugin
{
    public function init()
    {
        ...
        ...
         Event::on(Providers::class, Providers::EVENT_BEFORE_LOGIN, function(BeforeLoginEvent $e) {
              $user = $e->user;
              $userProfile = $e->userProfile;
              $provider = $e->provider;
              // set to false to cancel this action
              $e->isValid = true;
             // Do something
         });
        ...
        ...        
     }
}        
```

## EVENT_AFTER_LOGIN

```php

use craft\base\Plugin;
use enupal\socializer\events\AfterLoginEvent;
use enupal\socializer\services\Providers;
use yii\base\Event;

class YourPlugin extends Plugin
{
    public function init()
    {
        ...
        ...
        Event::on(Providers::class, Providers::EVENT_AFTER_LOGIN, function(AfterLoginEvent $e) {
            $user = $e->user;
            $userProfile = $e->userProfile;
            $provider = $e->provider;

            // Do something
        });
        ...
        ...        
     }
}        
```

## EVENT_BEFORE_REGISTER
   
```php

use craft\base\Plugin;
use enupal\socializer\events\BeforeRegisterUserEvent;
use enupal\socializer\services\Providers;
use yii\base\Event;

class YourPlugin extends Plugin
{
   public function init()
   {
       ...
       ...
       Event::on(Providers::class, Providers::EVENT_BEFORE_REGISTER, function(BeforeRegisterUserEvent $e) {
           $user = $e->user;
           $userProfile = $e->userProfile;
           $provider = $e->provider;
           // set to false to cancel this action
           $e->isValid = true;
           $user->firstName = 'from event';
           // Do something
       });
       ...
       ...        
    }
}        
```

## EVENT_AFTER_REGISTER

```php

use craft\base\Plugin;
use enupal\socializer\events\AfterRegisterUserEvent;
use enupal\socializer\services\Providers;
use yii\base\Event;

class YourPlugin extends Plugin
{
    public function init()
    {
        ...
        ...
        Event::on(Providers::class, Providers::EVENT_AFTER_REGISTER, function(AfterRegisterUserEvent $e) {
            $user = $e->user;
            $userProfile = $e->userProfile;
            $provider = $e->provider;
            // Do something
        });
        ...
        ...        
     }
}        
```