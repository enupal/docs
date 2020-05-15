---
date: 2020-05-14
description: Override the default upload location asset and sub-paths before generating your PDFs or Images from your Craft CMS templates.
---

# Override Upload Asset

Override the default upload location asset and sub-paths before generating your PDFs or Images from your Craft CMS templates. You'll need the folder id to override \`singleUploadLocationSource\` you can copy the folder id value in **Craft CMS Dashboard** **→ Settings** → **Enupal Snapshot** click in the **"Show folder ids"** button.

## addVariables

If you add twig code to your sub-paths, you can pass any variable that you need using the `addVariables` tag, before display your file.

```twig
{%
    set settings = {
        filename: 'my-first-pdf.pdf',
        inline: false,
        overrideFile: true,
        singleUploadLocationSource: 'folder:11',
        singleUploadLocationSubpath: 'path/{author.username}'
   }
%}

{% do craft.enupalsnapshot.addVariables({ author: currentUser }) %}

{% set url = craft.enupalsnapshot.displayHtml('<h1>Hello world</h1>', settings) %}

<a href='{{url}}'> Download Pdf</a>
```