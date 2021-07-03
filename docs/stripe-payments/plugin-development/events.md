---
date: 2020-05-14
description: Stripe Payments allows listen for events like afterOrderComplete and beforeSendNotificationEmail
---

# Events

Stripe Payments allows listen for events like: afterOrderComplete and beforeSendNotificationEmail

## afterOrderComplete

```php
use enupal\stripe\services\Orders;
use enupal\stripe\events\OrderCompleteEvent;
use enupal\stripe\Stripe;
use craft\base\Plugin;
use Craft;

class YourPlugin extends Plugin
{
    public function init()
    {
        ...
        ...
         Event::on(Orders::class, Orders::EVENT_AFTER_ORDER_COMPLETE, function(OrderCompleteEvent $e) {
              $order = $e->order;
             // Do something
         });
        ...
        ...        
     }
}        
```

## beforeSendNotificationEmail

This event is fired before the notification for admin or customers is send

```php
use enupal\stripe\services\Emails;
use enupal\stripe\events\NotificationEvent;
use enupal\stripe\Stripe;
use craft\base\Plugin;
use Craft;

class YourPlugin extends Plugin
{
    public function init()
    {
        ....
        ....
     
         Event::on(Emails::class, Emails::EVENT_BEFORE_SEND_NOTIFICATION_EMAIL, function(NotificationEvent $e) {
              $message = $e->message;
              // admin|customer        
              $type = $e->type;      
              $order= $e->order;
              $fields= $order->getFormFields();
              // Retrieve any form field
              $myField = $fields['handle'] ?? null;
             // Do something
         });
        ...
        ...        
     }
}       
```

## afterProcessWebhook

This event is fired after receive a notification event from Stripe. Please check all [Stripe events types](https://stripe.com/docs/api#events) available.

You can add the next code to the main class of your plugin in the _**init()**_ method. The following example listens to the EVENT\_AFTER\_PROCESS\_WEBHOOK and checks if the subscription is canceled and remove all user groups from the craft user.

```php
use enupal\stripe\services\Orders;
use enupal\stripe\events\WebhookEvent;
use enupal\stripe\Stripe;
use craft\base\Plugin;
use Craft;

class YourPlugin extends Plugin
{
    public function init()
    {
        ....
        ....
                    
        Event::on(Orders::class, Orders::EVENT_AFTER_PROCESS_WEBHOOK, function(WebhookEvent $e) {
            $data  = $e->stripeData;
            $order = $e->order;
        
            if ($order){
                $user = Craft::$app->getUsers()->getUserByUsernameOrEmail($order->email);
                // Or if the order have logged in users:
                // $user = Craft::$app->getUsers()->getUserById($order->userId);            
        
                if ($user) {
                    switch ($data['type']) {
                        //Occurs whenever a customer is signed up for a new plan. (If SCA is disabled)                   
                        case 'customer.subscription.created':
                            // Add a user group id
                            $newGroups = [1];
                            Craft::$app->getUsers()->assignUserToGroups($user->id, $newGroups);
                            break;
                        //Occurs whenever a customer's subscription ends.                                        
                        case 'customer.subscription.deleted':
                            // Removes all groups
                            $newGroups = [];
                            Craft::$app->getUsers()->assignUserToGroups($user->id, $newGroups);
                            break;
                        // Occurs whenever a customer is signed up for a new plan. (If SCA is enabled) 
                        // Stripe sends the checkout.session.completed (where the order is created) after customer.subscription.created, 
                        // so we need to validate new subscriptions here
                        case 'checkout.session.completed':
                            /** @var \enupal\stripe\models\Subscription $subscription */                
                            $subscription = $order->getSubscription(); 
                            // Do subscription logic to determine the user group id                               
                            // Add a user group id
                            $newGroups = [1];
                            Craft::$app->getUsers()->assignUserToGroups($user->id, $newGroups);
                            break;              
                    }
                }
            }
        });
        ...
        ...        
     }
}    
```

## beforeProcessTransfer

This event is fired before transfer the `$comission->totalPrice` to the vendor 

```php
use enupal\stripe\services\Commissions;
use enupal\stripe\events\BeforeProcessTransferEvent;
use enupal\stripe\Stripe;
use craft\base\Plugin;
use Craft;

class YourPlugin extends Plugin
{
    public function init()
    {
        ....
        ....
     
         Event::on(Commissions::class, Commissions::EVENT_BEFORE_PROCESS_TRANSFER, function(BeforeProcessTransferEvent $e) {
              $commission = $e->commission;
              $vendor = $e->vendor;
              $order = $commission->getOrder();
              // update the total price if needed
              $commission->totalPrice = 13.24;
              
         });
        ...
        ...        
     }
}       
```

