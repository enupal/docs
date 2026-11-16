---
date: 2026-10-06
description: Add your own translation provider or support your own field types.
---

# Events

Enupal Translate can be extended with your own providers and field types.

## registerProviders

Add your own translation service. Extend `TranslationProvider`, or `LlmTranslationProvider` if the service speaks a chat-completion API.

```php
use enupal\translate\services\Providers;
use enupal\translate\events\RegisterProvidersEvent;
use yii\base\Event;

Event::on(
    Providers::class,
    Providers::EVENT_REGISTER_PROVIDERS,
    function(RegisterProvidersEvent $event) {
        $event->providers[] = MyProvider::class;
    }
);
```

A provider implements how it translates one chunk of strings. De-duplication, chunking, retries and usage accounting are handled for you:

```php
use enupal\translate\base\TranslationProvider;
use enupal\translate\models\TranslationResult;

class MyProvider extends TranslationProvider
{
    public static function handle(): string
    {
        return 'myService';
    }

    public static function displayName(): string
    {
        return 'My Service';
    }

    public function isConfigured(): bool
    {
        return !empty($this->getSettings()->myServiceKey);
    }

    protected function performTranslation(array $texts, string $targetLanguage, ?string $sourceLanguage): TranslationResult
    {
        // $texts is keyed; return translations under the same keys.
        $translations = [];

        foreach ($texts as $key => $text) {
            $translations[$key] = /* your API call */;
        }

        return new TranslationResult([
            'provider' => static::handle(),
            'translations' => $translations,
            'apiCalls' => 1,
        ]);
    }
}
```

## registerSerializers

Teach Enupal Translate about your own field type.

```php
use enupal\translate\services\Content;
use enupal\translate\events\RegisterSerializersEvent;
use yii\base\Event;

Event::on(
    Content::class,
    Content::EVENT_REGISTER_SERIALIZERS,
    function(RegisterSerializersEvent $event) {
        $event->serializers['mycompany\fields\MyField'] = MyFieldSerializer::class;
    }
);
```

A serializer has two jobs: turn a field value into translatable strings, and turn translated strings back into a value Craft can save.

```php
use craft\base\ElementInterface;
use craft\models\Site;
use enupal\translate\base\FieldSerializer;

class MyFieldSerializer extends FieldSerializer
{
    public function serialize(ElementInterface $element, Site $sourceSite, Site $targetSite): mixed
    {
        $value = $element->getFieldValue($this->field->handle);

        return [
            'heading' => $value->heading,
            'body' => $value->body,
        ];
    }

    public function setFieldData(ElementInterface $source, ElementInterface $target, mixed $value): mixed
    {
        $serialized = parent::serialize($source, $source->getSite(), $target->getSite());

        $serialized['heading'] = $value['heading'] ?? $serialized['heading'];
        $serialized['body'] = $value['body'] ?? $serialized['body'];

        return $serialized;
    }
}
```

::: tip
Return only the parts that should be translated. Anything you leave out of `serialize()` is never sent to the provider, and anything you do not set in `setFieldData()` keeps its existing value.
:::

Returning `null` from `setFieldData()` leaves the field untouched on the target element.

## Console commands

```bash
# Which fields can be translated on this install, and why any are skipped
php craft enupal-translate/translate/fields

# Provider configuration; --live actually calls each API
php craft enupal-translate/translate/providers
php craft enupal-translate/translate/providers --live

# Translate a single string, to check a provider end to end
php craft enupal-translate/translate/test "Hello world" es --provider=claude

# Sync static translations with the database
php craft enupal-translate/translate/sync
```
