---
id: architecture-nunjucks
title: Nunjucks
sidebar_label: Nunjucks
---

> The correct architecture will always be the one on the latest release branch of the INIT project.

Using Nunjucks allows you to reuse components and share them effectively with the team. As a first step of our modernisation process, we will use Nunjucks to effectively creates templates and play with includes/imports.

The most important thing to keep in mind is, then, how to create a layout, extend it and play with simple variables to allow you saving time.


## Components
Components are blocks you could need in several place but that do not differ in their structure. Think about a carousel, a testimonial block, a header, footer, …

Ideally, they should be shared not only in your project but across different projects as well. Be sure to attach to each of your components a bespoke .scss file that contains its own styles.

> E.g.: You have _c-carousel.njk for a simple carousel, you would then attach scss/components/_c-carousel.scss with it.


## Templates

Templates are the highest level of structure of your project, the skeleton of a page.
You are expected to have a different layout for each different page. Follow the design but always keep in mind to minimize the use of different templates.

## Data (advanced)

Nunjucks, being a templating engine, allows us to parse and inject data from external data-files (JSON).
While it's not a requirement for having Nunjucks running, it will save time and clarify your code by splitting the view and the data.

Consider some redundant information such as the name of the project, their contact details (phone, address, email, social networks, ...); you can easily avoid to repeat yourself by just calling back the same data.

### Default

By default, there are two data files you can access in your Nunjucks components : data.json and config.json
You can, of course, add other files and parse them by adding them in the appropriate gulp task (./gulp/tasks/default/nunjucks.js)

### Config.json

This file contains project configuration settings such as the version, the name, the dev state, the theme colour, etc.

### Data.json

This is the main data-file for your project, containing the content. This file is project specific but its main structure (such as menu items, etc) can be reused accross various projects.
