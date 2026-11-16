---
date: 2026-10-06
description: Control how translated content is saved, what gets translated, and who is allowed to translate.
---

# Content settings

Found under **Enupal Translate → Settings → Content**. These control what happens when you translate an element.

## How translations are saved

**Enable content translation** — adds the Translate panel to entry, asset, category and product edit screens, and the bulk action to their indexes. On a single-site install these are hidden regardless.

**Save as draft** — recommended, and on by default. Creates a draft in the target site so someone can review the translation before it goes live, rather than overwriting the published entry.

::: warning
With this off, translating overwrites the live entry in the target site. If a translator has hand-corrected that content, those edits are lost.
:::

**Translate the title** — on by default.

**Reset the slug** — clears the target slug so Craft regenerates it from the translated title. Leave it off if your URLs must stay stable.

## What gets translated

**Include disabled blocks** — also translate disabled Matrix, Neo and Super Table blocks.

**Update internal links** — re-points Craft reference tags at the target site, so a link to an English entry becomes a link to its translated counterpart. On by default.

**Detect the source language** — lets the provider work out the source language instead of being told. Useful when your source site holds mixed-language content.

**Excluded fields** — field handles to never translate, one per line. Use `title` to skip titles everywhere.

```
internalNotes
legacySlug
title
```

## Queue threshold

Under **Settings → General**, **Queue threshold** controls when bulk static translations are handed to the queue instead of running in the browser request. The default is 25 strings. Set it to 0 to always run inline.

Content translation uses the queue whenever more than one target site is involved, and always for the bulk action.

## Permissions

Translating content requires the **Translate element content** permission, under **Settings → Users → User Groups → Permissions**. Admins have it automatically.
