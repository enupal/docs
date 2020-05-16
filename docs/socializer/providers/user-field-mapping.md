---
date: 2020-05-14
description: When a user is registered, you can populate the following data into any Plain Tex or Dropdown field of your User layout.
---

# User Field Mapping

When a user is registered, you can populate the following data into any `Plain Tex` or `Dropdown` field of your User layout.
By default we store the `email`, `firstName` and `lastName` into the User model.

* Field Name
* identifier _(The Unique user’s ID on the connected provider. Can be an integer for some providers, Email, URL, etc.
)_
* profileURL
* webSiteURL
* photoURL
* displayName
* description
* firstName
* lastName
* gender
* language
* age
* birthDay
* birthMonth
* birthYear
* email
* emailVerified
* phone
* address
* country
* region
* city
* zip
* data _(An extra data which is related to the user (e.g followers). we return this as JSON)_

You can manage this under **Socializer** → **Settings** → **User Field Mapping** this field mapping will be applied for all the provider
if you want to manage this per provider basis, please enable the `Enable Field Mapping per Proviver` lightswitch

![Socializer - User Field Mapping](https://enupal.com/assets/docs/socializer-4.png)
