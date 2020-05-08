# Pdf lib options

To add any library option (listed below), please use the `cliOptions` key in the settings array.

```twig
{%  set settings = {
        filename: 'my-first-pdf.pdf',
        cliOptions: {
            'cover': '<h1>Hello world from enupal snapshot</h1>',
            'header-font-size': '36',
            'footer-right': null,
            'orientation': 'Portrait',
            'page-size': 'A4'
        }
    }
%}

{{ craft.enupalsnapshot.displayHtml("<h1>Hola mundo</h1>", settings) }}
```

## General Options

|Option|Values|what is it?|
|--- |--- |--- |
|collate||Collate when printing multiple copies (default)|
|no-collate||Do not collate when printing multiple copies|
|cookie-jar||Read and write cookies from and to the supplied cookie jar file|
|copies|`number`|Number of copies to print into the pdf file (default 1)|
|dpi|`dpi`|Change the dpi explicitly (this has no effect on X11 based systems) (default 96)|
|grayscale||PDF will be generated in grayscale|
|image-dpi|`int`|When embedding images scale them down to this dpi (default 600)|
|image-quality|`int`|When jpeg compressing images use this quality (default 94)|
|license||Output license information and exit|
|lowquality||Generates lower quality pdf/ps. Useful to shrink the result document space|
|manpage||Output program man page|
|margin-bottom|`unitreal`|Set the page bottom margin|
|margin-left|`unitreal`|Set the page left margin (default 10mm)|
|margin-right|`unitreal`|Set the page right margin (default 10mm)|
|margin-top|`unitreal`|Set the page top margin|
|orientation|`orientation`|Set orientation to Landscape or Portrait (default Portrait)|
|page-height|`unitreal`|Page height|
|page-size|`size`|Set paper size to: A4, Letter, etc. (default A4)|
|page-width|`unitreal`|Page width|
|no-pdf-compression||Do not use lossless compression on pdf bjects|
|title|`text`|The title of the generated pdf file (The title of the first document is used if not specified)|
|use-xserver||Use the X server (some plugins and other stuff might not work without X11)|


## Outline Options

|Option|Values|what is it?|
|--- |--- |--- |
|dump-default-toc-xsl||Dump the default TOC xsl style sheet to stdout|
|dump-outline|`file`|Dump the outline to a file|
|outline||Put an outline into the pdf (default)|
|no-outline||Do not put an outline into the pdf|
|outline-depth|`level`|Set the depth of the outline (default 4)|

## Page Options

|Option|Values|what is it?|
|--- |--- |--- |
|allow|`path`|Allow the file or files from the specified folder to be loaded (repeatable)|
|background||Do print background (default)|
|no-background||Do not print background|
|bypass-proxy-for|`value`|Bypass proxy for host (repeatable)|
|cache-dir|`path`|Web cache directory|
|checkbox-checked-svg|`path`|Use this SVG file when rendering checked checkboxes|
|checkbox-svg|`path`|Use this SVG file when rendering unchecked checkboxes|
|cookie|`name` `value`|Set an additional cookie (repeatable), value should be url encoded.|
|custom-header|`name` `value`|Set an additional HTTP header (repeatable)|
|custom-header-propagation||Add HTTP headers specified by --custom-header for each resource request.|
|no-custom-header-propagation||Do not add HTTP headers specified by --custom-header for each resource request.|
|debug-javascript||Show javascript debugging output|
|no-debug-javascript||Do not show javascript debugging output (default)|
|default-header||Add a default header, with the name of the page to the left, and the page number to the right, this is short for: --header-left='[webpage]' --header-right='[page]/[toPage]' --top 2cm --header-line|
|encoding|`encoding`|Set the default text encoding, for input|
|disable-external-links||Do not make links to remote web pages|
|enable-external-links||Make links to remote web pages (default)|
|disable-forms||Do not turn HTML form fields into pdf form fields (default)|
|enable-forms||Turn HTML form fields into pdf form fields|
|images||Do load or print images (default)|
|no-images||Do not load or print images|
|disable-internal-links||Do not make local links|
|enable-internal-links||Make local links (default)|
|disable-javascript||Do not allow web pages to run javascript|
|enable-javascript||Do allow web pages to run javascript (default)|
|javascript-delay|`msec`|Wait some milliseconds for javascript finish (default 200)|
|keep-relative-links||Keep relative external links as relative external links|
|load-error-handling|`handler`|Specify how to handle pages that fail to load: abort, ignore or skip (default abort)|
|load-media-error-handling||Specify how to handle media files that fail to load: abort, ignore or skip (default ignore)|
|disable-local-file-access||Do not allowed conversion of a local file to read in other local files, unless explicitly allowed with --allow|
|enable-local-file-access||Allowed conversion of a local file to read in other local files. (default)|
|minimum-font-size|`int`|Minimum font size|
|exclude-from-outline||Do not include the page in the table of contents and outlines|
|include-in-outline||Include the page in the table of contents and outlines (default)|
|page-offset|`offset`|Set the starting page number (default 0)|
|password|`password`|HTTP Authentication password|
|disable-plugins||Disable installed plugins (default) Enable installed plugins (plugins will likely not work)|
|post|`name` `value`|Add an additional post field (repeatable)|
|post-file|`name` `path`|Post an additional file (repeatable)|
|print-media-type||Use print media-type instead of screen|
|no-print-media-type||Do not use print media-type instead of screen (default)|
|proxy|`proxy`|Use a proxy|
|radiobutton-checked-svg||Use this SVG file when rendering checked radiobuttons|
|radiobutton-svg|`path`|Use this SVG file when rendering unchecked radiobuttons|
|resolve-relative-links||Resolve relative external links into absolute links (default)|
|run-script||Run this additional javascript after the page is done loading (repeatable)|
|disable-smart-shrinking||Disable the intelligent shrinking strategy used by WebKit that makes the pixel/dpi ratio none constant|
|enable-smart-shrinking||Enable the intelligent shrinking strategy used by WebKit that makes the pixel/dpi ratio none constant (default)|
|stop-slow-scripts||Stop slow running javascripts (default)|
|no-stop-slow-scripts||Do not Stop slow running javascripts|
|disable-toc-back-links||Do not link from section header to toc (default)|
|enable-toc-back-links||Link from section header to toc|
|user-style-sheet|`url`|Specify a user style sheet, to load with every page|
|username|`username`|HTTP Authentication username|
|viewport-size||Set viewport size if you have custom scrollbars or css attribute overflow to emulate window size|
|window-status|`windowStatus`|Wait until window.status is equal to this string before rendering page|
|zoom|`float`|Use this zoom factor (default 1)|

