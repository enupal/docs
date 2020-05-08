# Page Breaks

Let's insert a page break in HTML so Enupal Snapshot parses it or split a PDF in different pages.

The first step is add the following classes to our HTML template:

```css
.keep-together {
    page-break-inside: avoid;
}

.break-before {
    page-break-before: always;
}

.break-after {
    page-break-after: always;
}
```

With these classes we can:

*   **.keep-together:** That a particular container content is not spread over two pages (if it fits one page). When using the keep-together class a page break is created before the container if necessary.
*   **.break-before:** That a page break is forced before a particular container.
*   **.break-after:** That a page break is forced after a particular container.

```twig
<!DOCTYPE html>
<html>
<head>
	<title> Lorem Ipsum</title>
</head>
<body>
	<style type="text/css">
	.keep-together {
	    page-break-inside: avoid;
	}

	.break-before {
	    page-break-before: always;
	}

	.break-after {
	    page-break-after: always;
	}
</style>
<h1> Lorem Ipsum</h1>
<p>

	<p>
		What is Lorem Ipsum?
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	{# A page break will be here #}
	<p class="break-before">
		What is Lorem Ipsum?
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<p>
		What is Lorem Ipsum?
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<p class="break-after">
		What is Lorem Ipsum?
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	{# A page break will be here #}
	<p>
		What is Lorem Ipsum?
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	
	{# this paragraph content is not spread over two pages #}
	<p class="keep-together">
		What is Lorem Ipsum?
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</p>
</body>
</html>
```