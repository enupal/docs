---
date: 2026-10-06
description: Translate a single entry into another site from the Enupal Translate panel in the sidebar.
---

# Translating entries

Open any entry, asset, category or product. The **Enupal Translate** panel appears in the sidebar, below the meta fields.

![The Enupal Translate panel in the entry sidebar](https://pluginscreenshots.craft-cdn.com/enupal-translate/_2200x2200_fit_center-center_none/2.png?1789754519)

**From** — the site you are currently editing. To translate in the other direction, switch to that site first.

**To** — the sites this element can be translated into. A site marked *exists* already has a version, which will be updated. Pick **All sites** to do every one of them at once.

**With** — which provider to use. This is pre-selected from your [default provider](../settings/overview.md), and changing it here affects only this translation.

Press **Translate**. One target site runs immediately; **All sites** is handed to the queue.

## Reviewing the result

With **Save as draft** enabled, which is the default, the translation is saved as a draft in the target site named something like *Translated draft (en → es)*. The success message links straight to it:

> Translated into Spanish and saved as a draft at 14:32. **Review draft**

Open the draft, check the translation, and apply it when you are happy.

::: tip
If you switch to the target site and see the old content, look for the draft. The live entry is deliberately left alone until someone reviews.
:::

## Unsaved changes

Translation always reads the **saved** entry, never what is currently in the editor. If you have unsaved changes the panel says so:

> You have unsaved changes. Translating uses the last saved version of this entry — save first if you want your changes included.

Save the entry, then translate.

## Translating again

Translating the same element twice sends the content again and produces a new draft. There is no memory of what was translated before, so re-translating an entry costs the same as the first time, and will overwrite any manual corrections if **Save as draft** is off.
