# Generate a Pdf from Html

This example will output a Pdf in browser from a HTML source.

```twig
{% set html %}
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>First Test</title>
	</head>
	<body>
		<h1>Hello world!</h1>
	</body>
	</html>
{% endset %}

{%
	set settings = {
		filename: 'my-first-pdf.pdf'
	}
%}

{{ craft.enupalsnapshot.displayHtml(html, settings) }}
```