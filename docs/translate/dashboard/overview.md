---
date: 2026-10-06
description: See how many translations you have made and what they cost in tokens.
---

# Dashboard

**Enupal Translate → Dashboard** shows what you have translated and what it cost.

## Totals

| | |
|:--|:--|
| Translations | Strings translated in the period |
| Static strings | How many came from templates and plugins |
| Content strings | How many came from element fields |
| Tokens | Input and output tokens, for AI providers |
| API calls | How many requests were actually made |
| Failed batches | Anything that errored |

AI providers report token usage; Google and Yandex do not, so their rows show zero tokens. API calls are still counted for every provider.

## Filters

Filter by date range, provider, type (static or content) and target language. The range defaults to the last 30 days.

The chart below the totals plots translations and tokens per day across the same range.

## Recent activity

A table of the most recent batches, ten at a time, showing the provider and model, what was translated, tokens used, how long it took, and whether it succeeded. Failed rows carry the error message from the provider, which is usually enough to tell you what went wrong.

## Purging

**Purge filtered metrics** deletes the records matching your current filters, so it only removes what you can see. **Purge all metrics** empties the table.

Metrics are only a record of what happened. Deleting them does not affect your translations.

::: tip
Turn metrics off entirely under **Settings → General → Track usage metrics** if you would rather not store them.
:::
