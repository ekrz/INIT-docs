---
id: advanced-sass-linting
title: Sass linting
sidebar_label: Sass linting
---

## Holy Rules of our CSS

1. Do not use ID to target your elements
1. Use BEM everytime you can, rewrite components to comply
1. Don’t nest elements if it can be avoided
1. A single SCSS file must have maximum 300 lines
1. Never use !important
1. Always write from mobile first
1. Use built-in mixins, particularly for main elements (breakpoints,...)
1. Respect the property order defined to increase readability

> Gulp is set not to crash on errors but while warnings are tolerated, your files should not contain any error.

## Ruleset

bem-depth – severity : 1 (warning)
Enforce the nesting level authorized.
Set to 1 level.
\
class-name-format – severity : 2 (error)
Enforce the name convention for the classes.
Set to hyphenatedBEM (example__test, example__test--colour)
\
\
extends-before-mixins – severity : 2 (error)
Enforce that extends should be written before mixins.
Set to true.
\
\
extends-before-declarations – severity : 2 (error)
Enforce that extends should be written before declarations.
Set to true. 
\
\
placeholder-in-extend – severity : 2 (error)
Enforce the use of placeholders in @extend.
Set to true.
\
\
max-file-line-count – severity : 1 (warning)
Enforce a limitation of lines per file.
Set to 300.
\
\
mixins-before-declarations – severity : 2 (error)
Enforce that mixins should be written before declarations.
Set to true. With exceptions for breakpoints, mq.
\
\
no-warn – severity : 1 (warning)
Enforce the non-use of @warn.
Set to true.
\
\
no-debug – severity : 1 (warning)
Enforce the non-use of @debug.
Set to true.
\
\
no-ids – severity : 2 (error)
Enforce the non-use of id selectors.
Set to true.
\
\
no-important – severity : 2 (error)
Enforce the non-use of !important tag.
Set to true.
\
\
hex-length – severity : 2 (error)
Enforce the length of HEX values (short [3 char.] or long [6 char.])
Set to long.
\
\
hex-notation – severity : 2 (error)
Enforce case formatting for HEX values.
Set to uppercase.
\
\
indentation – severity : 2 (error)
Enforce indentation level (number of spaces).
Set to 4.
\
\
quotes – severity : 2  (error)
Enforce single or double quotes.
Set to double.
\
\
url-quotes – severity : 2 (error)
Enforce the use of quotes under url() properties.
Set to true.
\
\
property-sort-order – severity : 1 (warning)
Enforce the order of properties (exhaustive list in config file).
