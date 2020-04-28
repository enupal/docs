# Enupal Docs

See our website for the complete [Enupal Documentation](https://enupal.com/docs/).

## Updating the docs

Enupal Documentation uses [VuePress](https://vuepress.vuejs.org/) and the [VuePress theme for Craft CMS documentation](https://github.com/pixelandtonic/vuepress-theme-craftdocs). 

Documentation Markdown files are stored in the `/docs` folder 

Some useful commands while working with the docs:

| Command | Notes |
|:------- |:----- |
| npm install | Get everything working |
| npm run docs:dev | Spins up a VuePress dev server so you can update Markdown and see those updates in real time in your browser (without generating a static site) |
| npm&nbsp;run&nbsp;docs:build | Generates static site (no need to run this if submitting pull requests, this is handled during deployment) |

## Metadata

To generate metadata using the `php ./src/optimizeMetadata.php` script you will need to install the following package:

```
composer require kub-at/php-simple-html-dom-parser
```
	
## Contributions

Feedback, requests for examples, and pull requests are welcome. 