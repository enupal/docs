---
date: 2020-05-14
description: Please use cliOptions key to set any the of the image settings available
---

# Image Lib options

Please use `cliOptions` key to set any the of the image settings available

```twig
{%  set settings = {
        filename: 'my-first-image.png',
        asImage: true,
        cliOptions: {
            'transparent': null,
            'quality': 80
        }
    }
%}

{{ craft.enupalsnapshot.displayHtml("<h1>Hola mundo</h1>", settings) }}

```

## Available settings

|Option|Values|what?|
|--- |--- |--- |
|checkbox-checked-svg|`path`|Use this SVG file when rendering   checked checkboxes|
|checkbox-svg|`path`|Use this SVG file when rendering   unchecked checkboxes|
|cookie|`name` `value`|Set an additional cookie   (repeatable)|
|cookie-jar|`path`|Read and write cookies from and   to the supplied cookie jar file|
|crop-h|`int`|Set height for croping|
|crop-w|`int`|Set width for croping|
|crop-x|`int`|Set x coordinate for croping|
|crop-y|`int`|Set y coordinate for croping|
|custom-header|`name` `value`|Set an additional HTTP header   (repeatable)|
|custom-header-propagation||Add HTTP headers specified by   custom-header for each resource request.|
|no-custom-header-propagation||Do not add HTTP headers   specified by custom-header for each resource request.|
|debug-javascript||Show javascript debugging output|
|no-debug-javascript||Do not show javascript debugging   output (default)|
|encoding|`encoding`|Set the default text encoding,   for input|
|extended-help||Display more extensive help,   detailing less common command switches|
|format|`format`|Output file format (default is   jpg)|
|height|`int`|Set screen height (default is   calculated from page content) (default 0)|
|help||Display help|
|htmldoc||Output program html help|
|images||Do load or print images   (default)|
|no-images||Do not load or print images|
|disable-javascript||Do not allow web pages to run   javascript|
|enable-javascript||Do allow web pages to run   javascript (default)|
|javascript-delay|`msec`|Wait some milliseconds for   javascript finish (default 200)|
|load-error-handling|`handler`|Specify how to handle pages that   fail to load: abort, ignore or skip (default abort)|
|disable-local-file-access||Do not allowed conversion of a   local file to read in other local files, unless explecitily allowed with   allow|
|enable-local-file-access||Allowed conversion of a local   file to read in other local files. (default)|
|manpage||Output program man page|
|minimum-font-size|`int`|Minimum font size|
|password|`password`|HTTP Authentication password|
|disable-plugins||Disable installed plugins   (default)|
|enable-plugins||Enable installed plugins   (plugins will likely not work)|
|post|`name` `value`|Add an additional post field   (repeatable)|
|post-file|`name` `path`|Post an additional file   (repeatable)|
|proxy|`proxy`|Use a proxy|
|quality|`int`|Output image quality (between 0   and 100) (default 94)|
|radiobutton-checked-svg|`path`|Use this SVG file when rendering   checked radiobuttons|
|radiobutton-svg|`path`|Use this SVG file when rendering   unchecked radiobuttons|
|readme||Output program readme|
|run-script|`js`|Run this additional javascript   after the page is done loading (repeatable)|
|disable-smart-width*||Use the specified width even if   it is not large enough for the content|
|stop-slow-scripts||Stop slow running javascripts   (default)|
|no-stop-slow-scripts||Do not Stop slow running   javascripts (default)|
|transparent*||Make the background transparent   in pngs|
|user-style-sheet|`url`|Specify a user style sheet, to   load with every page|
|username|`username`|HTTP Authentication username|
|version||Output version information an   exit|
|width|`int`|Set screen width (default is   1024) (default 1024)|
|window-status|`windowStatus`|Wait until window.status is   equal to this string before rendering page|
|zoom|`float`|Use this zoom factor (default 1)|
