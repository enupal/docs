# Pdf Download Url

To get the a download url of your Pdf file, please disable the option inline in the settings:

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
		inline: false
	}
%}
{% set url = craft.enupalsnapshot.displayHtml(html, settings) %}

<a href="{{url}}"> Download Pdf</a>

```