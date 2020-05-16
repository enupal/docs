---
date: 2020-05-14
description: This example will output a Pdf in browser from a Twig Template source.
---

# Generate a Pdf from a twig template

This example will output a Pdf in browser from a Twig Template source.

```twig
{%
	set settings = {
		filename: 'my-first-pdf.pdf',
		variables: {
			foo:'bar'
		}
	}
%}

{{ craft.enupalsnapshot.displayTemplate("pdf/examples/revenue", settings) }}
```