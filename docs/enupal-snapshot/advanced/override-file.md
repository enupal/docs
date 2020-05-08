# Override File

If the `Override File` setting is disabled will check if the file already exists to prevent file generation. You can also pass this setting in your templates before generating the file.

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
		filename: 'my-first-pdf.pdf',
		inline: false,
		overrideFile: false
	}
%}

{% set url = craft.enupalsnapshot.displayHtml(html, settings) %}

<a href="{{url}}"> Download Pdf</a>
```

