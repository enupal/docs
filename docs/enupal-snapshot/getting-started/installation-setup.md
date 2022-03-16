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

### Ubuntu 16.04 x64 or 18.04 x64

On Ubuntu 16.04 or 18.04 Enupal Snapshot doesn't need that you have installed wkhtmltopdf in the server, it just needs the full path of the wkhtmltopdf and wkhtmltoimage bin files. We can download it via the command line and get the full path from there. 

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

### Ubuntu 20.04 x64

On Ubuntu 20.04 Enupal Snapshot requires to have installed `wkhtmltopdf v0.12.6` please follow the next instructions to install the wkhtmltopdf lib and save the paths in the Enupal Snapshot Settings: 

```plaintex
$ cd ~
$ wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.focal_amd64.deb
$ sudo apt install ./wkhtmltox_0.12.6-1.focal_amd64.deb
$ which wkhtmltopdf
$ which wkhtmltoimage
```

* The last two commands will return the paths that you need to save on your Enupal Snapshot settings.
* In the Craft dashboard click on settings
* At the bottom in the plugins sections click on the Enupal Snapshot icon
* Add the path to wkhtmltopdf
* Add the path to and wkhtmltoimage
* Save your Settings

## Install wkhtmltopdf on MacOS High Sierra 10.13.6

Enupal Snapshot requires that you have installed wkhtmltopdf, the next command were tested on brew:

```plaintext
$ brew update && brew cask install wkhtmltopdf
```

Copy the wkhtmltopdf and wkhtmltoimage bin files paths and paste it to the Enupal Snapshot settings.

## Install wkhtmltopdf on Windows

Please [download](https://wkhtmltopdf.org/downloads.html) wkhtmltopdf 0.12.5.  

Find the bin folder, in that folder, you'll see the wkhtmltopdf and wkhtmltoimage files. Here you can copy the path and paste it in the Enupal Snapshot Settings.

::: tip
If the wkhtmltopdf path is not correct you'll see a "Wrong path" error.
:::

## Install wkhtmltopdf on Nitro 2

To install wkhtmltopdf on [Nitro 2](https://craftcms.com/docs/nitro/2.x/) (may be the same for Alpine Linux distros), follow the instructions below:

- Login to nitro via ssh as root:
  `nitro ssh your_nitro_site_name --root`
- Run the following command to install `wkhtmltopdf` and dependencies
```batch
apk --update --no-cache add \
   wkhtmltopdf \
    libgcc \
    libstdc++ \
    musl \
    qt5-qtbase \
    qt5-qtbase-x11 \
    qt5-qtsvg \
    qt5-qtwebkit \
    ttf-freefont \
    ttf-dejavu \
    ttf-droid \
    ttf-liberation \
    fontconfig \
    so:libQt5Core.so.5 \
    so:libQt5Gui.so.5 \
    so:libQt5Network.so.5 \
    so:libQt5PrintSupport.so.5 \
    so:libQt5Svg.so.5 \
    so:libQt5WebKit.so.5\
    so:libQt5WebKitWidgets.so.5\
    so:libQt5Widgets.so.5\
    so:libc.musl-x86_64.so.1\
    so:libgcc_s.so.1\
    so:libstdc++.so.6
```

- On your Craft CMS dashboard go to the Enupal Snapshot settings and save the following settings:

  - Absolute Binary Path of wkhtmltopdf lib:
  <br>
  `/usr/bin/wkhtmltopdf`

  - Absolute Binary Path of wkhtmltoimage lib:
  <br>
  `/usr/bin/wkhtmltoimage`

- Save your Settings

## Upload Location

Please check that the asset volume that you're using for `Upload Location` has enabled the "Assets in this volume have public URLs" lightswitch under Settings -> Assets -> Volumes

![Enupal Snapshot settings](https://enupal.com/assets/docs/asset-setting.png)
