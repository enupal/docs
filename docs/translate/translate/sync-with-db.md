---
date: 2020-11-16
description: Sync your static translations into your database without no extra queries that may impact your page load time.
---

# Sync with Database

Sync your static translations into your database without no extra queries that may impact your page load time.

This feature simply keeps a copy of your translations folder in the Database to facilitate your deployments and syncing your database translations with your templates folders. This feature avoids adding your translations folder to your version control system (git).

## How it works?

The main source will be your `translations` folder at the root of your Craft CMS installation. The sync job will always check for new translations and will update existing ones in the Database.

When the sync job will be added to the queue?

- Each time you `Save` your translations
- Each time you import translations
- Each time you use a Bulk translate action (Google Translate, Yandex)
- You can also manually use the `Sync with DB` button available on your `Translations` index page

## How to sync translations into a new environment?

The best scenario to sync your translations from the DB into a new ENV would be that your `translations` folder is empty, if you already have a `translations` folder in your root site, please remember that any translation will override the database if the translation already exists. If you decided to not add your translations folder to your version control system (git) your translations folder may be empty and that's great!

You need to import your database or only the Enupal Translate tables in the following order: 

- `enupaltranslate_sourcemessage` 
- `enupaltranslate_message` 

On your Craft CMS dashboard go to Enupal Translate -> Translations 

And click the `Sync with DB` button. This will create all the translations files inside your `translations` folder and you'll notice that your translations appears when click on the `Translated` left sidebar option.

![Save Translation](https://enupal.com/assets/docs/enupal-translate-sync-db.png)
