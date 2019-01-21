---
id: architecture
title: Architecture
sidebar_label: architecture
---

## **INIT** Architecture and rules

#### Modules

Try to keep the project linked with nodeJS. Do not load external elements, like plugins that couldn't be properly maintained.

Prefer using npm and its huge library to keep your dependencies up to date.

> Example : If you need to include slick carousel, use https://www.npmjs.com/package/slick-carousel instead of an external dependency.

#### Styles

**INIT** uses Sass, and an architecture inspired by ITCSS (https://itcss.io/), allowing scalability and a great maintenance of your project on the long run.

> That be said, you can more or less adapt your styling structure to what your project actually requests.
> Example : not every project will need an "object" section.

#### Nunjucks

With the help of Nunjucks, you will be able to deploy your templates faster and unlock new levels of collaboration.

> You can easily share, reuse and maintain components structure with Nunjucks. On the long term, you could have a shareable library available for your team.

#### JavaScript

**INIT** uses jQuery and Bootstrap 4 Javascript.
You can write your custom JavaScript under /js/site.js. This will automatically compile with the two formers libraries to an unique and minified JavaScript file.
