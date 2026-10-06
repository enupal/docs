---
date: 2026-10-06
description: Use OpenAI or Claude to translate your static template and plugin strings in bulk.
---

# Bulk - OpenAI and Claude

The AI providers work on static strings too, not just entry content.

Once [OpenAI](../settings/openai.md) or [Claude](../settings/claude.md) is enabled:

*   Select at least one string to translate
*   Click on the wheel icon
*   Select **Translate with ChatGPT (OpenAI)** or **Translate with Claude (Anthropic)**

Each enabled provider gets its own action, so you pick the provider by picking the action.

## Why use AI here

Interface strings are short and often ambiguous on their own — "Post", "Order", "Share" can each be a noun or a verb. AI providers receive the whole selection at once, so they have more to go on than a single word.

Your [protected terms and tone of voice](../settings/overview.md) apply here as well, which is useful for keeping product names intact across a large interface.

## Large selections

Selections larger than the **Queue threshold** under **Settings → General** are handed to the Craft queue instead of running in the browser request. The default is 25 strings.

::: tip
Repeated strings are only sent once, so selecting your whole template library costs less than the string count suggests.
:::
