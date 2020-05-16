---
date: 2020-05-14
description: In order to translate your site templates with Enupal Translate, you may need to follow a few steps before having everything ready to go.
---

# Overview

In order to translate your site templates with Enupal Translate, you may need to follow a few steps before having everything ready to go.

## Add the translation twig filter in your templates

Craft3 as Craft2 has a translate twig filter, please go to your templates and add a translate filter to any static string:

```twig
{{ "Welcome!"|t }}
```

::: tip
Enupal Translate will read these filters, display all matched strings on the CP and create the necessary files after saving the translations in your site.
:::
