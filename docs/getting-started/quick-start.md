---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
---

This section will guide you through the basic installation of node, npm & gulp on your machine.

If you already used ***INIT***, or have your machine alreadt set up, you can skip this section and directly go to [advanced](../advanced.md).

## Install node and npm

Like most of modern tools, ***INIT*** requires that you have node and npm installed on your machine.

Open your terminal and verify if node or npm are already installed :

```sh
$ node --version
$ npm --version
```

If these commands return nothing, or are throwing an error, it means that node or npm is not installed. To install both, go to [node website](https://nodejs.org/en/) and install the LTS version.

## Install the gulp command line utility

Once you have node and npm installed, install the gulp-cli globally.

```sh
npm install --global gulp-cli
```

You can then confirm that gulp-cli is installed by running :

```sh
gulp --version
```

## Clone the latest version of INIT

Once you have node, npm and gulp installed on your machine, you can finally clone the latest version of ***INIT*** and run in.

```sh
git clone https://github.com/ekrz/INIT.git
```

## Install INIT & its dependencies

***INIT*** works with various dependencies (bootstrap, gulp, browser-sync, ...). Therefore, you need to install all of them for ***INIT*** to work.

Inside your project's folder (init by default), run the following command :

```sh
npm install
```