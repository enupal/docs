---
date: 2020-05-14
description: By default, if inline is false, Enupal Snapshot will return the URL of the Asset. However, is asModel is true it will return the asset model.
---

# Return Asset Model

By default, if inline is false, Enupal Snapshot will return the URL of the Asset. However, is asModel is true it will return the asset model.

```twig
{%  set settings = {
        filename: 'my-first-pdf.pdf',
        inline: false,
        asModel: true
    }
%}

{% set assetModel = craft.enupalsnapshot.displayTemplate("_pdf", settings) %}

{{ assetModel.id }}
{{ assetModel.getUrl() }}
```