---
date: 2026-10-06
description: Enable one or more translation providers and choose which one translates your content by default.
---

# Providers

Enupal Translate can translate with several services. Enable the ones you want under **Enupal Translate → Settings → Providers**, then pick which one handles your content by default.

| Provider | Best for |
|:--|:--|
| [OpenAI](openai.md) | Natural-sounding translations you can steer with a prompt |
| [Claude](claude.md) | The same, with Anthropic's models |
| [Google Cloud Translate](google-translate.md) | Fast, cheap, reliable machine translation at volume |
| [Yandex](yandex.md) | Machine translation, strong on Slavic languages |
| [Google Translate (Free)](google-translate-free.md) | Trying things out, nothing more |

## AI or machine translation?

Machine translation handles one string at a time. It is fast and cheap, and for short interface strings that is usually all you need.

AI providers see a whole entry at once, so the result reads like a page rather than a list of disconnected sentences. They also let you set a prompt, protect brand names from being translated, and specify a tone of voice. They cost more, and the [dashboard](../dashboard/overview.md) tracks exactly how much.

::: tip
There is nothing stopping you using both. Many sites use an AI provider for entry content and Google for bulk template strings.
:::

## Default provider

At the bottom of the Providers page, **Use by default** picks which provider translates element content. It is pre-selected on every entry, and can be swapped there for a one-off translation without changing this setting.

Leave it on **Automatic** and Enupal Translate picks the most capable provider you have enabled.

Bulk template translation is unaffected by this setting. Each enabled provider gets its own action on the Translations page, so you choose by picking the action.

## Shared AI instructions

Two settings apply to every AI provider.

**Protected terms** — one per line. Brand names, product names, anything that should come back exactly as it went in.

```
Enupal
Craft CMS
Stripe Payments
```

**Tone of voice** — a sentence appended to every prompt, for example:

```
Use the informal second person. Keep sentences short.
```

## Keeping API keys out of your database

Every API key field accepts an environment variable, so the key itself stays in your `.env` file and never reaches your project config.

```bash
# .env
OPENAI_KEY="sk-..."
```

Then enter `$OPENAI_KEY` in the settings field. The autosuggest will offer your environment variables as you type.

::: tip
This is worth doing on any site where project config is committed to git or synced between environments.
:::
