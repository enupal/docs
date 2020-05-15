---
date: 2020-05-14
description: This example will output a Pdf in browser from a URL source.
---

# Generate a Pdf from a Url

This example will output a Pdf in browser from a URL source.

```twig
{% set urls = {0: 'https://www.google.com', 1:'http://enupal.com/en'} %}

{%  set settings = {
        filename: 'my-first-pdf.pdf'
    }
%}

{{ craft.enupalsnapshot.displayUrl(urls, settings) }}
```