---
id: architecture-introduction
title: Introduction
sidebar_label: Introduction
---
In this section you will find clarification on how the files are organised under INIT.

## Overview

```bash
root
├── gulp
│   ├── tasks
│   └── paths.js
├── src
│   ├── data
│   ├── favicon
│   ├── fonts
│   ├── images
│   ├── scripts
│   ├── scss
│   └── views
├── .eslintrc
├── .gitignore
├── .sass-lint.yml
├── gulpfile.js
├── package-lock.json
├── package.json
└── README.md
```
## In detail

### gulp

The core of INIT whereas all the tasks are defined. It contains three subfolders (base, build and default) and a path.js file where the directories input and output are set up.
\
\
It has been set up so each division has a file and its own set of tasks (e.g. scripts.js contains javascript linting, babel, and renaming to app.min.js).

### src

The source folder contain all the source files (data, fonts, images, styles, scripts, ...) that will be modified and then processed through Gulp. This is where most of your work will be done, where the magic happens.

#### data

Data is for the most adventurous, the explorers. This folder contains data that helps to split the structure from the content. It helps having a clear code and reducing it with macros, loops, etc.
\
\
Within data lies two main files : config.json and data.json. The former is about the project's details while the latter is content from the project you're working on.

#### favicon

Use [the favicon generator](https://favicon.io/favicon-converter/) and put the outputted images in this folder. Within a few clicks you'll get a nice favicon for your project as everything is already set up in  ./views/components/_head.njk

#### fonts

If your fonts are not reachable from a CDN (such as [google fonts](https://fonts.google.com/)), you may put your custom fonts in this folder. You can use the [transfonter tool](https://transfonter.org/) to speed up the installation of a new font (this is not mandatory).

#### images

Try organising your images the best possible, following clear naming conventions (carousel-1.jpg, banner-home-1.jpg, ...).
\
\
You also may want to split your images by their type (e.g. create a subfolder for your icon set : /images/icons/ and follow the icon naming convention; icon-home.svg).
\
\
Always keep in mind optimisation and watch the size of your images. While INIT has a optimisation task to compress images (`gulp images`), it's always a bonus if they are pre-optimised (export to web, use the correct format, ...)

#### scripts

Scripts contains your custom javascript files. There will be set your carousel activations, equalize height, plugin calls, etc.
\
\
It supports JQuery and has already a few handy functions ready-to-use to ease and kickstart your development.
\
\
If you want to read more about this, go to the [Javascript section](architecture-javascript.md) of the documentation.

#### scss

All the styling of your project must be contained under this folder.
\
\
This uses Sass and a couple of handy post-processing functions by default. By default, it calls the core of [Boostrap 4](https://getbootstrap.com/).
\
\
To know more about the styles under INIT, go on the [Sass section](architecture-sass.md) of the documentation.

#### views

The structure of your project can be written with Nunjucks templating engine. This allows to reuse components cross-projects, increasing delivery speed and avoiding useless code repetitions.
\
\
To know more about Nunjucks under INIT, go on the [Nunjucks section](architecture-nunjucks.md) of the documentation.

#### .eslintrc

> Currently in Alpha mode, deactivated by default.

Contains the rules set for ESLint, allowing your javascript to follow the ruleset of INIT and maintaining good code over all your projects.

#### .gitignore

Your gitignore should be already set up to ignore all the files it should ignore. You might have to tweak this from time to time.

#### .sass-lint.yml

Contains the styling rules INIT will enforce. With a correct CSSComb or similar tool set up, this allows you to have a clear styling code, following naming conventions and more.

> CSSComb and Sass Lint are two independent programs but should be set up in the exact same manner to get the most out of it.

#### gulpfile.js

The default tasks runner, this will call the various tasks from gulp/tasks/. You might have to tweak/edit this file following the project you are on.

#### package.json & package-json.lock

From [Flavio Copes](https://flaviocopes.com/package-json/) :
> The package.json file is kind of a manifest for your project. It can do a lot of things, completely unrelated. It’s a central repository of configuration for tools, for example. It’s also where npm and yarn store the names and versions of the package it installed.

On the other hand, the package-lock.json is a lockfile that permits npm to retrieve and match the proper version of all the dependencies you're using. You should never modify this file directly as it is automatically generated by `npm`.

> Info March 2019 :  Due to some problems with NPM, INIT might throw errors. The easiest solution to this is to run `yarn` instead to fix the dependencies installation.

You can read more about npm, yarn and package managers on the [NPM, Yarn and package managers section](../advanced/advanced-package-manager.md) of the documentation.
