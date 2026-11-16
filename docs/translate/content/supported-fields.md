---
date: 2026-10-06
description: Which field types Enupal Translate can translate, and how to add your own.
---

# Supported fields

## Craft fields

| Field | Notes |
|:--|:--|
| Matrix | Including nested blocks, any depth |
| Plain Text | |
| Table | Only `singleline`, `multiline` and `heading` columns |
| Link | The label, never the URL |
| Content Block | |
| Asset alt text | Only when the volume allows per-site alt text |

## Rich text

| Field | Notes |
|:--|:--|
| CKEditor | Markup and reference tags preserved |
| Redactor | |
| TinyMCE | |
| Vizy | Walks the node tree, including nested block elements |

## Plugin fields

| Field | Notes |
|:--|:--|
| Neo | See the [console queue note](bulk-translation.md) |
| Super Table | |
| Hyper | Each row's link text; link targets re-pointed at the target site |
| Linkit | Custom link text, when the field allows it |
| SEOmatic | Only fields you have overridden |
| Ether SEO | Title and description |
| Doxter | |

## SEOmatic and inherited values

SEOmatic fields usually inherit their value from the element — the SEO title comes from the entry title unless you type something else.

Enupal Translate only translates the fields you have **overridden**. Writing a translation into an inherited field would switch it to a custom value, freezing today's text in place and breaking the inheritance from then on.

## Checking a site's coverage

To see which fields on a particular install can be translated, and why anything is being skipped:

```bash
php craft enupal-translate/translate/fields
```

```
Translatable (14)
  heading              Text          Heading
  body                 RichText      Body
  blocks               Matrix        Content blocks
  ...

Skipped (3)
  category             no serializer for Dropdown
  price                no serializer for Number
  internalNotes        excluded in settings
```

A field needs three things to be translated:

1.  A serializer registered for its field class
2.  Its **Translation Method** set to something other than *None*
3.  Not to be listed under **Excluded fields** in the settings

::: tip
Matrix, Neo and Super Table are always descended into, even when the container field itself is not translatable, because the blocks inside it may well be.
:::

## Adding your own field type

Any field type can be supported by registering a serializer. See [Events](../development/events.md).
