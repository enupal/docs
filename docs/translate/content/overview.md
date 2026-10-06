---
date: 2026-10-06
description: Translate the content inside your entries, assets, categories and products into your other sites.
---

# Overview

Alongside static template strings, Enupal Translate can translate the content inside your elements: entries, assets, categories and Commerce products.

::: tip
Content translation needs two or more sites. On a single-site install these features are hidden.
:::

## Before you start

1.  Enable a translation provider under [Settings → Providers](../settings/overview.md)
2.  Make sure the fields you want translated have their **Translation Method** set to something other than *None*, so Craft stores a separate value per site
3.  Make sure the section is enabled for the target site, under **Settings → Sections**

## Two ways to translate

**One element at a time** — open any entry and use the Enupal Translate panel in the sidebar. See [Translating entries](translating-entries.md).

**Several at once** — select elements on an index and use the **Translate to** action. See [Bulk translation](bulk-translation.md).

## What happens

1.  Enupal Translate reads the **saved** version of the element
2.  It collects the translatable strings from every supported field, descending into Matrix, Neo and Super Table blocks
3.  Identical strings are collapsed, so a word repeated five times is translated once
4.  Everything is sent to your provider together, so an AI provider sees the whole entry in context
5.  The translations are written back into the matching element in the target site
6.  By default the result is saved as a **draft** for review

::: warning
Translation reads the saved entry. If you have unsaved changes, they are not included — save first. The sidebar panel warns you when this applies.
:::

## What is left alone

Fields with no translatable text are never touched. Images, dropdowns, numbers, dates, lightswitches and relations come across exactly as they are.

Some fields are partly translated on purpose:

| Field | Translated | Left alone |
|:--|:--|:--|
| Table | singleline, multiline and heading columns | numbers, dates, checkboxes, dropdowns |
| Link | the label | the URL |
| Hyper | each row's link text | the link targets |
| SEOmatic | fields you have overridden | inherited fields, and all configuration |

## Internal links

When **Update internal links** is enabled, Craft reference tags are re-pointed at the target site. A link to an English entry becomes a link to its translated counterpart, rather than sending Spanish readers to the English page.
