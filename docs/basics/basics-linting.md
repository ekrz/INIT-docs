---
id: basics-linting
title: Linting
sidebar_label: Linting
---


https://hackernoon.com/how-linting-and-eslint-improve-code-quality-fa83d2469efe

## What is linting ?

Generally speaking, linting is a tool for static code analysis and therefore part of white-box testing. The main purpose of white-box testing is to analyse the internal structure of components or a system. To make sense of this, a developer would already have knowledge of the written code and will define rules or expectations about how a component should behave (unit tests), or how it should be structured (linting).

In modern web development, this describes the process (and tools) of applying rules against a codebase and flagging code structures that violate these rules. Rules can vary from code styling rules, so code appears to be written by one person, to much more complex rules (e.g. here). Even fixing these issues is part of modern JavaScript linting.

Basically, linting stops mistakes being made earlier speeding up the release process as well as reducing costs.

## Why should you lint your code ?

Linting code is already an established part of any (popular) JavaScript project and, in my opinion, has a lot of benefits such as:

- Readability
- Pre-code review
- Finding (syntax) errors before execution

As we have the possibility to define a set of styling rules, this increases the readability of our code towards the effort of having our codebase look like it was written by “one person”. This is important, as it can happen that software engineers move from codebase to codebase within projects meaning a lot of people become involved. A common set of rules makes it easier to really understand what the code is doing.

Further linting rules help to improve code reviews, as linting already acts as a pre-code review, checking against all the basic issues such as syntax errors, incorrect naming, the tab vs. spaces debate, etc. It increases the value of having code reviews, as people are then more willing to check the implementation rather than complain about syntax errors.

## Sass Linting

We’re using sass-lint (gulp-sass-lint) to help us enforce rules and improve handover between front-enders. The linter sets rules and will then throw errors or warning when compiling (or when running the command gulp sass-lint).

Styling is not exempt of a certain need of maintanability, [Michael Trythall](https://lincolnloop.com/blog/linting-scss-sass-lint/) explains :

> Complex projects always require multiple developers and design heavy web sites are no exception. Sass/SCSS is still our language of choice when writing CSS, both for its wide support and flexibility. The latter can be a double-edged sword when it comes to maintainability with each developer bringing their own interpretation to the language's syntax. One way to solve this is with sass-lint, a Node-based linting tool, to keep everyone on the same page when writing Sass/SCSS code.

## How INIT helps linting

**INIT** was build with the idea of maintainability and reusability. It uses a strict linting set of rules you can discover [here](basics-commands.md) for Sass and Javascript.