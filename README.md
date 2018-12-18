## TI4 Rules

TI4 Rules is a free tool to make it easier to lookup and share the rules for Twilight Imperium 4th Edition.

## Setup

TI4 Rules has been built with...
* Node v11.1.0
* Yarn 1.12.1

Once these are installed, change to the `_build` directory and then you can simply do the following to see a local version of the site:

```
$ yarn             # installs all dependencies
$ yarn webpack-dev # starts a local webpack dev server, handy if you are building locally
$ yarn build       # generates the production HTML/CSS/JS
```

## Making Changes

I love pull requests - however, please make sure you only make changes in the `_build` directory. Anything you edit by hand in the root directory will be overwritten during the next build.