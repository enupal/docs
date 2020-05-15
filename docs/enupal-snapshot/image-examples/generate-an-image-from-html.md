---
date: 2020-05-14
description: The next code will generate an image (download URL) from HTML
---

# Generate an Image from html

The next code will generate an image (download URL) from HTML

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
		filename: 'my-first-image.png',
		asImage: true
	}
%}

{% set url = craft.enupalsnapshot.displayHtml(html, settings) %}

<a target="_blank" href="{{url}}"> Download Image</a>


```