---
date: 2026-10-06
description: Enupal Translate requires Craft CMS 5.5.4 or later and PHP 8.2 or later.
---

# Requirements

| | |
|:--|:--|
| Craft CMS | 5.5.4 or later |
| PHP | 8.2 or later |

Content translation needs **two or more sites**. On a single-site install the content translation features are hidden, and only static template translation is available.

::: tip
Enupal Translate 5.x is for Craft 5. If you are still on an older version of Craft, use Enupal Translate 4.x.
:::

## Translation providers

You need an account with at least one provider, except for Google Translate (Free), which needs no key.

| Provider | Needs a key | Notes |
|:--|:--|:--|
| [OpenAI](../settings/openai.md) | Yes | Also works with any OpenAI-compatible endpoint |
| [Claude](../settings/claude.md) | Yes | Anthropic API |
| [Google Cloud Translate](../settings/google-translate.md) | Yes | Translation API v2 |
| [Yandex](../settings/yandex.md) | Yes | |
| [Google Translate (Free)](../settings/google-translate-free.md) | No | Rate-limited, for testing only |
