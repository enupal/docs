---
date: 2020-05-14
description: Encrypted your backups is a good idea if you're uploading your backups to the cloud services. Enupal Backup will encrypt your data using openssl.
---

# Encryption

Encrypted your backups is a good idea if you're uploading your backups to the cloud services. Enupal Backup will encrypt your data using openssl.

To select encrypt your backups, follow next steps:

1.  Go to settings
2.  Click on "Security" on the sidebar menu
3.  **Enable Encryption**
4.  Add a secure Password
5.  Click Save

## Decrypt

In order to Decrypt your backup, run the following command and replace the names of your backup crypted after the `-in`  and the name of you decrypt file after the `-out`

```plaintext
openssl enc -d -a -aes-256-cbc -in logs-craft3_20171203114508_pnqbg4pv4k.tar.bz2.enc -out logs.tar.bz2
``` 

::: tip
You will be prompted for a password when decrypt, please use the same password stored on the first step.
:::

![Enupal Backup - Encryption](https://enupal.com/assets/docs/18-enupal-backup-docs.png)