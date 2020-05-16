---
date: 2020-05-14
description: You can configure a Cron Job to call Enupal Backup and automatically create a backup each night, rather than doing a manual Backup every time.
---

# Webhook

You can configure a [Cron Job](https://de.wikipedia.org/wiki/Cron) to call Enupal Backup and automatically create a backup each night, rather than doing a manual Backup every time.

Before you begin,

*   We recommend running your backups at a time of day or night when usage is low.
*   Please make sure you have enough disk space on your server before proceeding.
*   Could be a good idea take a look at the general settings and setup a proper **amount of backups to keep locally**.

Enupal Backup will enable a Webhook URL in order to be called from the Cron Job, follow the next steps to enable this feature:

1.  Click on "Settings"
2.  Click on "Schedule"
3.  Enable Webhook
4.  Add a "Secret Key" you could automatically generate one on clicking the "Generate" link
5.  Save the Settings
6.  Copy the Cron Example 
7.  Add the line copied to your crontab.

## Alternatives to Cron

Some hosting companies don’t allow access to cron, but there are websites offering alternative ways of scheduling jobs (free or paid-for). Here are some examples:

*   [SetCron](https://www.setcron.com/)
*   [SetCronJob](http://www.setcronjob.com/)
*   [OnlineCronJobs](http://www.onlinecronjobs.com/)
*   [EasyCron](https://www.easycron.com/)

::: tip
 Our example will execute your backup every morning at 3:10 AM.
:::

![Schedule Backup](https://enupal.com/assets/docs/12-enupal-backup-docs.png)