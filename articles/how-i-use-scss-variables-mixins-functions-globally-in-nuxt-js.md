---
layout: layout-post.hbs
title: 'How I use Scss variables, mixins & functions globally in Nuxt.js'
excerpt: >-
  Since I started making websites 3.5 years ago I’ve been using Sass. Out of the
  box Vue.js doesn’t expos Sass globally
hideExcerptInTemplate: true
featuredImg: /assets/img/1__74SrHWyWVCcrPLXcJoJ0fQ__2x.png
date: '2018-03-06T16:05:17.467Z'
tags: posts
categories: []
keywords: []
---

Since I started making websites 3.5 years ago I’ve been using Sass. I flipping LOVE IT!!! I feel it fills in a lot of CSS’s missing features as well as making my styles much leaner and easier to work with. I’m trying to really make 2018 a year where I conquer VueJs. There’s a problem. I still want to have my Sass variables, functions and mixins available to all my single file Vue components. I also want to have a bunch if global CSS utility classes being created using the same variables, functions and mixins. Here’s how I go about this.

## Compiling Sass

I have a collection of styles that I port over to each now project no matter whether I’m using [Vue.js](https://hackernoon.com/tagged/vue-js), Rails or WordPress. (Badger SCSS [Toolkit](https://hackernoon.com/tagged/toolkit) will be getting released in April 2018). All my CSS selectors are utility classes that I wanted available for my Nuxt project. It’s super easy to do! I have a single Sccs file that I use to import all my separate SCSS files so this will be the file I want to compile from. You can include multiple files if you’d like but I really recommend having a single clean file that just takes care of all your importing.

1.  Ensure you `node sass` and `sass-loader` installed;

`npm i -D node-sass sass-loader`

2. In your `nuxt.config.js` file include your SCSS where you import all your other SCSS.

```
css: [
    '@/assets/scss/main.scss'
]
```

LIKE MAGIC! Now your SCSS is getting compiled and will be automatically inserted into a `<style>` tag in your head. [For more info checkout the Nuxt.js docs on CSS.](https://nuxtjs.org/api/configuration-css)

**Edit 2/2/2019 — Updated Nuxt module instructions**

## Nuxt Style Resources Module

The awesome Nuxt community has created a package to take away ALL the pain of exposing Sass/SCSS files to your Vue.js components. While I did manage to expose files without this package, it was a bit of a pain.

1.  Install the package;

```
npm i -D @nuxtjs/style-resources sass-loader node-sass
```

2. You’ll need to make Nuxt aware of which file you want to be exposed by updating your `nuxt.config.js`;
```
module.exports = {
    // Other nuxt.config.js

    modules: ['@nuxtjs/style-resources'],
    styleResources: {
        scss: [
            'assets/scss/file/_path.scss',
            'assets/scss/file/_path-two.scss'
        ]
    }
}
```

It’s really THAT simple. For more information and detailed docs checkout the [Nuxt Style Resource loader’s Github repo](https://github.com/nuxt-community/style-resources-module).

Any questions/comments/bugs/feedback please get in touch! Thanks for reading.

## Old loading Sass loading plugin

This plugin is now deprecated but this was how I used to access but this was my old instructions

[**Nuxt Sass Resources Loader**](https://github.com/anteriovieira/nuxt-sass-resources-loader)

The awesome [Antério Vieira](https://github.com/anteriovieira) has created a package to take away ALL the pain of exposing Sass/SCSS files to your Vue.js components. While I did manage to expose files without his package, it was a bit of a pain. If you’re keen to do it on your own check out this Github issue thread where Sébastien Chopin shows you how to do it.

1.  Install the package;

```
npm i nuxt-sass-resources-loader
```

2. You’ll need to make Nuxt aware of which file you want to be exposed by updating your `nuxt.config.js`;

```
module.exports = {
    // Other nuxt.config.js

    modules: [
        [
            'nuxt-sass-resources-loader',
            [
                'assets/scss/file/\_path.scss',
                'assets/scss/file/\_path-two.scss'
            ]
        ]
    ]
}
```

It’s really THAT simple. For more information and detailed docs checkout the [Nuxt Sass resources loader’s Github repo](https://github.com/anteriovieira/nuxt-sass-resources-loader).