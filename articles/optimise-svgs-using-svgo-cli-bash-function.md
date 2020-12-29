---
layout: layout-post.hbs
title: Optimise SVGs using SVGO CLI & bash function
excerpt: >-
  I wanted to be able to optimise a directory of SVG with SVGO. Currently I
  would optimise them either one at a time using Jake Archibald’s…
date: '2017-09-16T09:46:33.907Z'
pubdate: '19/9/2017'
tags: posts
---

![Screenshot of optimised SVG](/assets/img/1____CLWEESCbHJw6s0avPHGPg.png)

I wanted to be able to optimise a directory of `SVG` with SVGO. Currently I would optimise them either one at a time using Jake Archibald’s awesome [online GUI for SVGO](https://jakearchibald.github.io/svgomg) (if I felt I needed a lot of control) or using a Gulp task. As I’m trying to write more blogs and make Codepen’s I wanted a way to bulk optimise a multiple of SVG without using Gulp. I looked at [SVGO Docs](https://github.com/svg/svgo) to find out more about the Command Line Interface tool.

## SVGO CLI

[SVGO](https://github.com/svg/svgo) is a Node based tool for optimising SVGs. It has a CLI tool that allows you to optimise one or multiple SVGs. For example if you wanted to optimise a directory of SVGs using the default config options you’d just have to use this command;

```
svgo -f /path/to/svgs/dir
```

It’s that easy! They have loads of really useful options, check out the docs for more details - [SVGO CLI docs](https://github.com/svg/svgo).

## Creating my own config file

I wanted to be able to optimise a directory of SVGs by removing;

*   All classes, Id’s and data-name attributes (I add my own using a text editor)
*   CSS styles
*   Width & height attribute
*   Unnecessary `<g>` elements

I created my own `config.yml` file that uses a series of SVGO’s plugins. This file can be called whatever you want, I have called mine `svgo-config.yml`.

```
plugins:
 — removeStyleElement: true
 — removeTitle: true
 — removeDesc: true
 — removeUselessDefs: true
 — removeDimensions: true
 — removeRasterImages: true
 — collapseGroups: true
 — cleanupNumericValues: { floatPrecision: 1 }
 — cleanupIDs: true
 — removeEmptyContainers: true
 — removeEmptyAttrs: true
 — cleanupAttrs: true
 — removeAttrs: { attrs: ‘(class|id|data-name)’ }
```

If I wanted to optimise a directory of SVGs I would run; `svgo -f /path/to/svgs/dir svgo-config.yml` from the same directory as the custom config file.

## Using bash function to optimise directory using my SVGO config file

While I worked at [Mr B & Friends](https://www.mrbandfriends.co.uk) my awesome college [Hannah](https://github.com/hannahtinkler) had the most complete `.bash-profile` I’ve ever seen, it’s a work of art. She showed me how to use bash script functions. I’m not going to take a deep dive into how to do this but if you want to know more check out [this article](https://www.howtoforge.com/tutorial/linux-shell-scripting-lessons-5/). The reason I need to use a bash script function instead of just a bash script alias is that an alias can’t accept arguments in the middle of the command. The `path to dir` of SVGs is the 3rd or 4th parameters so I needed to use a function.

```
function svgoFunction() {
  svgo -f $1 — config=/Users/user-name/.bash-scripts/config-files/svgo-config.yml
}
alias svgo-config=’svgoFunction $1'
```

This bash script function has a single argument (that confusingly isn't written inside the functions parenthesise). This argument is the path the the directory that I want to optimise. I hard coded the absolute path the my custom config file as this won’t be moving. While this file is on my computer it could be in Dropbox/Google Drive and therefore could be used by any of my computers.
Now all I do to optimise a directory is call my alias;

```
svgo-config path/to/svg/dir
```

Thanks for reading! Any questions leave a comment below or please get in touch. Here is a [link to code](https://gist.github.com/stuartjnelson/99d11ae43df0ab828b4c45b3ce8e8b42) used in this article as a gist.