---
id: advanced-gulp
title: Advanced Gulp
sidebar_label: Advanced Gulp
---

## Get critical css

[Critical](https://github.com/addyosmani/critical) is a tool that can extract and inline the critical css of your pages.
It has been excluded from INIT by default as it requires [Puppeteer](https://github.com/GoogleChrome/puppeteer) (which comes with a version of Chromium +- 90mb). 

Extracting the critical css is important but hard to keep up to date as is (and it's a slow process). It is then recommanded to be careful while using this and should be manipulated by advanced users only.

### Install

`$ npm install --save critical@1.3.4`

### Include

Place the task below somewhere in `tasks/styles.js` (preferably at the end).

```js
 const critical = require("critical").stream;


 gulp.task("critical", ["nunjucks", "sass"], function() {
 	return gulp
 		.src(path.to.nunjucks.destination + "/*.html")
 		.pipe(
 			critical({
 				base: path.to.nunjucks.destination,
 				inline: false,
 				css: path.to.sass.destination + "/main.min.css"
 			})
 		)
 		.pipe(gulp.dest(path.to.destination));
 });
```