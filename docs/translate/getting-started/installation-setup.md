---
date: 2026-10-06
description: How to install Enupal Translate on Craft CMS from the plugin store
---

# Installation & Setup

1.  Click on `Plugin Store` in the Craft CMS control panel sidebar
2.  Search: _Enupal Translate_
3.  Click on "Install"

Or install it with Composer:

```bash
composer require enupal/translate
php craft plugin/install enupal-translate
```

## What to do next

1.  Enable at least one translation provider under **Enupal Translate → Settings → Providers**. See [Providers](../settings/overview.md).
2.  To translate templates, add the `|t` filter to your static strings and open **Enupal Translate → Translations**. See [Static translations](../translate/overview.md).
3.  To translate content, open any entry and look for the **Enupal Translate** panel in the sidebar. See [Content translation](../content/overview.md).
