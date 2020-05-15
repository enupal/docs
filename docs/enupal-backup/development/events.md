---
date: 2020-05-14
description: Enupal Backup allows listening for events like beforeSendNotificationEmail
---

# Events

Enupal Backup allows listening for events like `beforeSendNotificationEmail`

## beforeSendNotificationEmail

This event is fired before the notification email is sent 

```php
use enupal\backup\events\NotificationEvent;
use enupal\backup\services\Backups;
use yii\base\Event;
use craft\base\Plugin;
use Craft;

class YourPlugin extends Plugin
{
    public function init()
    {
        ...
        ...
        Event::on(Backups::class, Backups::EVENT_BEFORE_SEND_NOTIFICATION_EMAIL, function(NotificationEvent $e) {
              $backup = $e->backup;
              $message = $e->message;

              if ($backup->getStatusName() == 'Error'){
                  $message->setFrom(['error@mysite.com' => 'C-3PO']);
                  $message->setSubject('Backup Error. Oh, my goodness, oh');
              }
             // Do something
         });
        ...
        ...        
     }
}     
```