---
id: advanced-netlify
title: Netlify
sidebar_label: Netlify
---

## What is Netlify

Netlify can do a lot of things but we're using it to create fast static staging website that serve our front-end templates. It can be directly connected to the git repository of your project or deployed manually through a drag and drop system.

> Netlify comes with INIT 0.5.6b, if you are using a prior version on your project you will have to include it manually.

```js
gulp.task('netlify', ['set-prod-node-env'], function() {
   runSequence(
       "clean",
       [
           "images",
           "nunjucks",
           "sass",
           "scripts-build",
           "fonts"
       ]
   );
});
```

## How to create a new project

1. Log in on Netlify using your Bitbucket account.
2. Click on "New site from Git"
3. Select "Bitbucket" on the "Continuous Deployment" section.
4. Look up for your repo
5. Select the branch (master should be the default)
6. On basic build settings set "build command" to `gulp netlify` and "publish directory" to `dist/`
7. Deploy site
8. You can now rename your project by going in `Overview > Site settings > Site details > Change site name`.

Your project will now be deployed and accessible to everyone, and also automatically updated at every commit you do.