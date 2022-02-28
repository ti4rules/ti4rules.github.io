## TI4 Rules

TI4 Rules is a free tool to make it easier to lookup and share the rules for Twilight Imperium 4th Edition.

## Setup

TI4 Rules has been built with...
* Node v16.6.1

Once these are installed, run "npm install" in the root directory of this project. This will install the Gatsby CLI tools.

From there, change to the `_build` directory and then you can simply do the following to see a local version of the site:

```
$ npm install        # installs all dependencies
$ npx gatsby develop # starts a local webpack dev server, handy if you are building locally
$ ./build.sh         # builds the production site
```

## Making Changes

I love pull requests - however, please make sure you only make changes in the `_build` directory. Anything you edit by hand in the root directory will be overwritten during the next build.