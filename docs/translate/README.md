---
date: 2026-10-06
description: Translate entry content, templates and even plugins. With Google or AI.
---


# Enupal Translate

<p align="center">
	<a href="https://enupal.com/en/craft-plugins/enupal-translate/docs/" target="_blank">
	<img width="212" height="212" src="https://enupal.com/assets/docs/translate-icon.svg" alt="Enupal Translate"></a>
</p>

A multi-site build needs two kinds of translation: the static strings in your templates and plugins, and the content in your entries. Enupal Translate handles both.

Pick a target site, hit Translate, review the draft. Bigger jobs run in the background as Craft queue jobs, so you can carry on working.

::: tip
Content translation and the AI providers are new in 5.0. Static template translation is unchanged and works as it always has.
:::

## Translate your content

Translate any entry, asset, category or product into another site from the entry sidebar, or select several on an element index and do them in bulk. Results are saved as drafts by default, so nothing goes live unreviewed.

Matrix, Neo, Super Table, CKEditor, Redactor, TinyMCE, Vizy, Hyper, Linkit, SEOmatic, Ether SEO and more — see [Supported fields](content/supported-fields.md) for the full list.

## Translate your templates and plugins

Enupal Translate scans your templates for translatable strings and lets you translate them in bulk or by hand.

* [Sync with the database](translate/sync-with-db.md), so you can deploy without committing translations to git
* [Import and export CSV](translate/import-file.md) for all templates, a single template, or a plugin's strings
* **Plugin developers:** translation files are written straight into your plugin's path, so you can internationalise your own plugins

## Choose your translator

* [OpenAI](settings/openai.md) or [Claude](settings/claude.md) for translations that read naturally, with your own prompt, protected terms and tone of voice
* [Google Cloud Translate](settings/google-translate.md) or [Yandex](settings/yandex.md) for fast, cheap machine translation
* [Google Translate (Free)](settings/google-translate-free.md) for trying things out
* Or type them yourself

## Know what it costs

The [dashboard](dashboard/overview.md) shows how many translations you have made, split between templates and content, with token usage, API calls and anything that failed.

## Enupal Translate Support

* Send us a note at: support@enupal.com

* Create an [issue](https://github.com/enupal/translate/issues) on Github
