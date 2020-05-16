---
date: 2020-05-14
description: On your templates you can display the login / signup URL easily passing the handle of your provider
---

# Display login URL

On your templates you can display the login / signup URL easily passing the handle of your provider:

```twig
<a href="{{ craft.socializer.loginUrl('discord') }}">Login with Discord</a>
```

## Options

Additionally you can pass the redirect URI via options. (You can add twig logic, the user object will be available)

```twig
{% set options = {redirect: 'member/{{user.id}}'} %}
<a href="{{ craft.socializer.loginUrl('discord', options) }}">Login with Discord</a>
```


 

