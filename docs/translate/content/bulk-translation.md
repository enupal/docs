---
date: 2026-10-06
description: Translate many entries at once from an element index, using the Translate to action.
---

# Bulk translation

On any entry, asset, category or product index:

1.  Tick the elements you want to translate
2.  Open the action menu in the toolbar
3.  Choose **Translate to**, then pick a target site or **All sites**

Everything is handed to the Craft queue as a single job, so you can carry on working while it runs. One job covers every element and every target site you picked, which means one progress bar rather than one per site.

![Translate to](https://enupal.com/assets/docs/11-enupal-translate.png)

## Watching progress

The queue indicator in the control panel shows the job as *Translating 3 of 12 into Spanish*. If anything fails, the job reports which elements and why — check **Utilities → Queue Manager**, and your logs for the detail.

## Which provider is used

Bulk translation uses your [default provider](../settings/overview.md). There is no per-run picker on the index, so set the default before starting a large run.

## Cost

Bulk runs can get expensive with an AI provider. A few things worth knowing:

* Repeated strings are only sent once per element, so boilerplate is not billed repeatedly
* Entries with nothing translatable are skipped without an API call
* The [dashboard](../dashboard/overview.md) shows exactly what a run cost in tokens

::: tip
Translate two or three entries first and check the dashboard before launching a run across hundreds.
:::

## If your queue runs from the console

Most sites run Craft's queue from web requests, which is the default and works with everything.

::: warning
If you run the queue from the console with `php craft queue/listen` or a cron worker, Neo fields cannot be translated. Neo reads a web-only request property while saving, so the job fails with `Getting unknown property: craft\console\Request::actionSegments`. Translating a Neo field from the entry sidebar works normally. Every other field type is unaffected.
:::
