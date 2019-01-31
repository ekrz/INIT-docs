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

## _config.njk

Simple configuration file that contains important variables, and settings that will 
be used across the project.
