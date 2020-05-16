---
date: 2020-05-14
description: Follow the next example to update any value of your form fields. This could be useful if you need to add any info after the order is created
---

# Update form field values

Follow the next example to update any value of your form fields. This could be useful if you need to add any info after the order is created

```php
use enupal\stripe\events\OrderCompleteEvent;
use enupal\stripe\services\Orders;
use enupal\stripe\Stripe;

class YourPlugin extends Plugin
{

    public function init()
    {
        Event::on(Orders::class, Orders::EVENT_AFTER_ORDER_COMPLETE, function(OrderCompleteEvent $e) {
            $order = $e->order;
            // Update specific form field passing the handle and the value
            $order->setFormFieldValue('singleLine', 'override');

            // Update more than one field
            // handle -> value        
            $newValues = [
                'singleLine' => 'override',
                'paragraph' => 'override 2',
                'checkboxes' => ['override3', 'override4']
            ];
            
            $order->setFormFieldValues($newValues);

            Stripe::$app->orders->saveOrder($order, false);
       });
    }

}
```