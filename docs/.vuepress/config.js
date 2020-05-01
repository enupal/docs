module.exports = {
  title: 'Enupal Docs for Craft 3',
  description: 'We love developing high quality and fully integrated plugins for Craft CMS.',
  // theme: 'craftdocs',
  base: '/docs/',
  ga: '',
  plugins: [
    [
      '@vuepress/google-analytics', {
        ga: ''
      }
    ],
      [
        'vuepress-plugin-zooming',
        {
          selector: '.content__default img',
          delay: 1000,
          options: {
            bgColor: '#fbfcfd',
            zIndex: 10000,
          },
        },
      ]
  ],
  markdown: {
    anchor: {level: [2, 3]},
    extendMarkdown: md => {
      md.use(require('./markdown/code'));
    }
  },
  themeConfig: {
    docsRepo: 'enupal/docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    codeLanguages: {
      twig: 'Twig',
      php: 'PHP',
      js: 'Javascript',
      craft2: 'Craft 2',
      craft3: 'Craft 3'
    },
    algolia: {
      apiKey: '',
      indexName: ''
    },
    nav: [
      {text: 'Back to Enupal →', link: 'https://enupal.com/'},
    ],
    sidebar: {
      '/stripe-payments/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Getting started',
          collapsable: false,
          children: [
            'getting-started/installation-setup',
            'getting-started/requirements',
            'getting-started/saving-your-stripe-api-keys',
            'getting-started/sca'
          ]
        },
        {
          title: 'Stripe Payments',
          collapsable: false,
          children: [
            'stripe-payment-forms/payment-methods',
            'stripe-payment-forms/one-time-payment-form',
            'stripe-payment-forms/one-time-custom-amount',
            'stripe-payment-forms/single-subscription',
            'stripe-payment-forms/multiple-subscription-options',
            'stripe-payment-forms/form-builder-metadata-fields',
            'stripe-payment-forms/billing-and-shipping-address',
            'stripe-payment-forms/taxes',
            'stripe-payment-forms/webhook',
            'stripe-payment-forms/metered-billing-plan',
            'stripe-payment-forms/subscription-grants'
          ]
        },
        {
          title: 'Templating',
          collapsable: false,
          children: [
            'templating/paymentform',
            'templating/payment-forms',
            'templating/getallorders',
            'templating/getorderbynumber',
            'templating/orders-display-form-fields-values-metadata',
            'templating/orders-display-address',
            'templating/get-subscription',
            'templating/cancel-subscriptions',
            'templating/display-errors',
            'templating/update-card-info',
            'templating/update-subscription-plan',
            'templating/get-all-paid-invoices-from-subscription'
          ]
        },
        {
          title: 'Coupons',
          collapsable: false,
          children: [
            'coupons/overview',
            'coupons/create-coupon'
          ]
        },
        {
          title: 'Orders',
          collapsable: false,
          children: [
            'orders/sync-orders',
            'orders/order-pdf'
          ]
        },
        {
          title: 'Field type',
          collapsable: false,
          children: [
            'field-type/display-button'
          ]
        },
        {
          title: 'Notifications',
          collapsable: false,
          children: [
            'notifications/customer',
            'notifications/admin'
          ]
        },
        {
          title: 'Development',
          collapsable: false,
          children: [
            'plugin-development/events',
            'plugin-development/template-overrides',
            'plugin-development/update-form-field-values'
          ]
        }
      ],
      // Socializer
      '/socializer/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Getting started',
          collapsable: false,
          children: [
            'getting-started/installation-setup',
            'getting-started/requirements'
          ]
        },
        {
          title: 'Providers',
          collapsable: false,
          children: [
            'providers/available-providers',
            'providers/create-provider',
            'providers/display-login-url'
          ]
        },
        {
          title: 'Tokens',
          collapsable: false,
          children: [
            'tokens/retrieve-tokens'
          ]
        },
      ],
      // More plugins here
      // fallback
      '/': [
        {
          title: 'Overview',
          collapsable: false,
          children: [
            '/',
          ]
        },
        {
          title: 'Craft CMS Plugins',
          collapsable: false,
          children: [
            ['stripe-payments/', 'Stripe Payments'],
            ['socializer/', 'Socializer'],
            ['enupal-backup/', 'Enupal Backup'],
            ['translate/', 'Enupal Translate'],
            ['enupal-snapshot/', 'Enupal Snapshot'],
            ['paypal/', 'PayPal Buttons'],
            ['enupal-slider/', 'Enupal Slider']
          ]
        }
        // Add more to the main menu
      ]
    }
  }
};
