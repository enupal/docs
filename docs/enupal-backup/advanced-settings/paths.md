---
date: 2020-05-14
description: Enupal Backup allows setup the different binary files needed to run a Backup, this is great for when the server is running on Windows.
---

# Paths

Enupal Backup allows setup the different binary files needed to run a Backup, this is great for when the server is running on Windows.

::: tip
You may don't need these options if you're on a Linux Server.
:::

You could add the next binary paths to Enupal Backup:

## Tar

Custom TAR executable location, if you're on an Windows server we highly recommend install [Cygwin](https://cygwin.com/install.html) and add the bin path folder. 

For Example: `C:\cygwin64\bin`

## PHP

Custom PHP >7.x executable location. 

For Example: `C:\MAMP\bin\php\php7.0.0\php.exe`

## Openssl

Custom Openssl executable location. This could be needed if you encrypt your Backups.

## MySqlDump

Custom MySqlDump binary folder. 

For Example: `C:\MAMP\bin\mysql\bin`

## PgDump

Custom PgDump binary folder. 

For Example: `C:\MAMP\bin\postgresql\bin`

![Enupal Backup - Paths](https://enupal.com/assets/docs/14-enupal-backup-docs.png)
