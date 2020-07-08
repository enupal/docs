---
date: 2020-05-14
description: How to install Enupal Snapshot on Craft CMS from the plugin store
---

# Installation

1.  Install "Enupal Snapshot" in the sidebar menu, under the `Plugin Store` available on Craft CMS 3.x
2.  Search:  _Enupal Snapshot_
3.  Click on "Install"

## Install wkhtmltopdf

Wkhtmltopdf 0.12.x is available on OSX, Linux & Windows

## Install wkhtmltopdf on Ubuntu via command line

Enupal Snapshot doesn't need that you have installed wkhtmltopdf in the server, it just needs the full path of the wkhtmltopdf and wkhtmltoimage bin files. We can download it via the command line and get the full path from there. 

- Ubuntu 16.04 x64 and 18.04 x64

```plaintext
$ cd ~
$ wget https://github.com/wkhtmltopdf/wkhtmltopdf/releases/download/0.12.4/wkhtmltox-0.12.4_linux-generic-amd64.tar.xz
$ tar vxf wkhtmltox-0.12.4_linux-generic-amd64.tar.xz
$ cd wkhtmltox/bin/
$ pwd
```

* The last command will output the path where the bin files exist, copy that path. (In this example the path is /home/enupal/wkhtmltox/bin)
* In the Craft dashboard click on settings
* At the bottom in the plugins sections click on the Enupal Snapshot icon
* Add the path to wkhtmltopdf, e.g:  /home/enupal/wkhtmltox/bin/wkhtmltopdf
* Add the path to and wkhtmltoimage, e.g:  /home/enupal/wkhtmltox/bin/wkhtmltoimage
* Save your Settings

If you're on Ubuntu 18.04 you may need to run the next command:

```plaintext
$ sudo apt-get install libssl1.0-dev
$ sudo apt-get install libxrender1
```

## Install wkhtmltopdf on MacOS High Sierra 10.13.6

Enupal Snapshot requires that you have installed wkhtmltopdf, the next command were tested on brew:

```plaintext
$ brew update && brew cask install wkhtmltopdf
```

Copy the wkhtmltopdf and wkhtmltoimage bin files paths and paste it to the Enupal Snapshot settings.

## Install wkhtmltopdf on windows

Please [download](https://wkhtmltopdf.org/downloads.html) wkhtmltopdf 0.12.5.  

Find the bin folder, in that folder, you'll see the wkhtmltopdf and wkhtmltoimage files. Here you can copy the path and paste it in the Enupal Snapshot Settings.

::: tip
If the wkhtmltopdf path is not correct you'll see a "Wrong path" error.
:::

![Enupal Snapshot settings](https://enupal.com/assets/docs/enupal-snapshot-25.png)