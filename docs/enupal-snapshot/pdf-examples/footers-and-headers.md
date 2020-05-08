# Footers And Headers

Enupal Snapshot allows add custom html to handle footers and headers of the PDF file.

A good practice is create the Html for the header and footer on a new template and there we can use the next options:

|Option|What is it?|
|--- |--- |
|page|Replaced by the number of the pages currently being printed|
|frompage|Replaced by the number of the first page to be printed|
|topage|Replaced by the number of the last page to be printed|
|webpage|Replaced by the URL of the page being printed|
|section|Replaced by the name of the current section|
|subsection|Replaced by the name of the current subsection|
|date|Replaced by the current date in system local format|
|isodate|Replaced by the current date in ISO 8601 extended format|
|time|Replaced by the current time in system local format|
|title|Replaced by the title of the of the current page object|
|doctitle|Replaced by the title of the output document|
|sitepage|Replaced by the number of the page in the current site being converted|
|sitepages|Replaced by the number of pages in the current site being converted|

## Creating the Header Html File

Let's create the next file on `_pdfexamples/header.html`

```twig
<!DOCTYPE html>

<html><head><script>
function subst() {
    var vars = {};
    var query_strings_from_url = document.location.search.substring(1).split('&');
    for (var query_string in query_strings_from_url) {
        if (query_strings_from_url.hasOwnProperty(query_string)) {
            var temp_var = query_strings_from_url[query_string].split('=', 2);
            vars[temp_var[0]] = decodeURI(temp_var[1]);
        }
    }
    var css_selector_classes = ['page', 'frompage', 'topage', 'webpage', 'section', 'subsection', 'date', 'isodate', 'time', 'title', 'doctitle', 'sitepage', 'sitepages'];
    for (var css_class in css_selector_classes) {
        if (css_selector_classes.hasOwnProperty(css_class)) {
            var element = document.getElementsByClassName(css_selector_classes[css_class]);
            for (var j = 0; j < element.length; ++j) {
                element[j].textContent = vars[css_selector_classes[css_class]];
            }
        }
    }
}
</script></head>
<body style="border:0; margin: 0;" onload="subst()">
  <table style="border-bottom: 1px solid black; width: 100%">
    <tr>
      <td class="section"></td>
      <td style="text-align:right">
        Page <span class="page"></span> of <span class="topage"></span>
      </td>
    </tr>
  </table>
</body>
</html>
```

## Creating the Footer Html File

Let's create the next file on `_pdfexamples/footer.html`

```twig
<!DOCTYPE html>

<html><head><script>
function subst() {
    var vars = {};
    var query_strings_from_url = document.location.search.substring(1).split('&');
    for (var query_string in query_strings_from_url) {
        if (query_strings_from_url.hasOwnProperty(query_string)) {
            var temp_var = query_strings_from_url[query_string].split('=', 2);
            vars[temp_var[0]] = decodeURI(temp_var[1]);
        }
    }
    var css_selector_classes = ['page', 'frompage', 'topage', 'webpage', 'section', 'subsection', 'date', 'isodate', 'time', 'title', 'doctitle', 'sitepage', 'sitepages'];
    for (var css_class in css_selector_classes) {
        if (css_selector_classes.hasOwnProperty(css_class)) {
            var element = document.getElementsByClassName(css_selector_classes[css_class]);
            for (var j = 0; j < element.length; ++j) {
                element[j].textContent = vars[css_selector_classes[css_class]];
            }
        }
    }
}
</script></head>
<body style="border:0; margin: 0;" onload="subst()">
  <table style="border-bottom: 1px solid black; width: 100%">
    <tr>
      <td class="section"></td>
      <td style="text-align:left">
        FOOTER EXAMPLE </span>
      </td>
      <td style="text-align:right">
        Page <span class="page"></span> of <span class="topage"></span>
      </td>
    </tr>
  </table>
</body>
</html>
```

## Adding the footer and header to the cliOptions

Finally we can add our custom Footer and Header files to our Pdf File:

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

{%  set settings = {
        filename: 'my-first-pdf.pdf',
        cliOptions: {
        	'header-html': '_pdfexamples/header',
        	'footer-html': '_pdfexamples/footer'
      	}
    }
%}

{{ craft.enupalsnapshot.displayHtml(html, settings) }}
```

