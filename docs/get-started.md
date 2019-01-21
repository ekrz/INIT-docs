---
id: get-started
title: Get Started
sidebar_label: get started
---

###### INIT is a project created by Emmanuel Kerjan Retzepter

**INIT** is a boilerplate generator to help you starting templating fast.

It uses Gulp, Bootstrap 4, Sass and Nunjucks engine. This whole project has been built with flexibility in mind so it adapts itself very well to any kind of dev environnement and for various purposes (process SCSS, process NJK templates, optimize images, compress Javascript, compress styles, Hotreload, etc).

## Getting Started

These instructions will help you to get the most of **INIT**.

### Clone INIT

```
> git clone https://github.com/ekrz/init-ekrz.git {your-project}
> cd {your-project}
```

### Install the modules

```
> npm i
```

### Run Gulp (default)

```
> gulp
```

This will run the default tasks, allowing you to set up a local server and enabling BrowserSync.

Once you're happy to launch your styles and scripts on a live site, it is preferable that you run the second set of tasks from **INIT** : build.

```
> gulp build
```

This will remove the source-maps, decrease the size files, allow image optimisation, generate the critical CSS, etc.

## Built With

- [Bootstrap 4](https://github.com/twbs/bootstrap) – The most popular framework for developing projects.

- [Gulp](https://github.com/gulpjs/gulp) – The streaming build system.

- [Nunjucks](https://mozilla.github.io/nunjucks/) – A rich and powerful templating language for JavaScript.

- [Sass](https://github.com/sass/sass) – Sass makes CSS fun again.

- [BrowserSync](https://browsersync.io/) – Time-saving synchronised browser testing.

## Authors

- **Emmanuel Kerjan Retzepter** – [Github](https://github.com/ekrz), [Twitter](https://twitter.com/ekrzzz)

## License

> This project is licensed under the MIT License.
