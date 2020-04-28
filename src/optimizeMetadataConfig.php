<?php

return [
    'baseUrl' => 'https://enupal.com/craft-plugins/docs',
    'selectors' => [
        'title' => 'div[id="app"] .theme-default-content h1',
        'description' => 'div[id="app"] .theme-default-content p'
    ],
    'metadata' => [
        'siteName' => 'Enupal Documentation',
        'description' => 'Enupal Plugins for Craft CMS',
        'image' => 'https://pbs.twimg.com/profile_images/930274536318296064/7fMvhP3L_400x400.jpg',
        'twitterSite' => '@enupal'
    ],
    'sitemap' => [
        'changefreq' => 'weekly',
        'priority' => '0.5'
    ]
];