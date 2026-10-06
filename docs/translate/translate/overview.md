---
date: 2026-10-06
description: Translate the static strings in your templates and plugins — the text that is not stored as entry content.
---

# Overview

Static translations are the strings that live in your templates rather than in your content: button labels, headings, form validation, anything you have wrapped in Craft's translate filter.

::: tip
Looking to translate the content inside your entries instead? See [Content translation](../content/overview.md).
:::

## Add the translation twig filter in your templates

Craft has a translate filter. Go to your templates and add it to any static string:

```twig
{{ "Welcome!"|t }}
```

Strings with placeholders work too, and the placeholders are preserved:

```twig
{{ "Hello {name}"|t('site', { name: currentUser.friendlyName }) }}
```

::: tip
Enupal Translate reads these filters, displays all matched strings in the control panel, and creates the necessary files after you save the translations for your site.
:::

## Finding your strings

Go to **Enupal Translate → Translations**. The left sidebar lets you narrow down to:

* **Pending** — strings with no translation yet
* **Translated** — strings already done
* A single template, or a whole templates folder
* A plugin's own strings

Use the **Translate To** site selector at the top to choose which site you are translating into.

## Translating them

| How | Page |
|:--|:--|
| By hand | [Manually](manually.md) |
| With OpenAI or Claude | [Bulk - OpenAI and Claude](bulk-ai.md) |
| With Google Translate | [Bulk - Google Translate](bulk-google-translate.md) |
| With Yandex | [Bulk - Yandex](bulk-yandex.md) |
| From a spreadsheet | [Download and Import CSV](import-file.md) |

Translations are written to the `translations/` folder at the root of your Craft install, and can also be [kept in sync with your database](sync-with-db.md).
