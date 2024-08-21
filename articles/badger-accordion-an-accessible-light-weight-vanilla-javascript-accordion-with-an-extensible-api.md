---
layout: layout-post.hbs
title: >-
  Badger Accordion — An accessible light weight, vanilla JavaScript accordion
  with an extensible API
excerpt: 'An introduction to my plugin, Badger Accordion and how to use it.'
date: '2017-12-15T23:08:49.708Z'
tags: posts
categories: []
keywords: []
---

![Badger accordion demo](/assets/img/1__XvUWwkh__xUV8wAPW2dsWaQ.jpeg)


Like a lot of dev’s, I use [open source](https://hackernoon.com/tagged/open-source) [tools](https://hackernoon.com/tagged/tools) all the time. From my [text editor](https://atom.io/) to the CMS that I work with to my regular searches of Stack Overflow. I thought it was about time I made a meaningful contribution to the open source community ( article about my experience of making first open source tool coming soon…). Drum roll please… without further delay here is; [Badger Accordion](http://ba.northernbadger.co.uk/)!

Badger Accordion demo on [Codepen](https://codepen.io/stuartjnelson/pen/WZpxqY)

## What is Badger Accordion?

It is an accessible, animated accordion built using vanilla JavaScript and a teeny tiny bit of CSS. It is just 6.14kb (minified) and Gzipped 1.86kb!

While working at [Mr B & Friends](http://mrbandfriends.co.uk) we often needed to turn around small marketing websites pretty quickly. The most challenging part of this for me was balancing wanting to create the best possible code base against getting launching the site for the tight deadline. I like to think of it as art vs business of web development. Finding an accessible accordion that would animate between states, that didn’t use jQuery and had an extensible API was something I wasn’t able to find. So I had to build one, with a good dash of support from [Dave Smith](https://aheadcreative.co.uk/) the cub (see what i did there badger fans?) was born!

## Creating your markup

There is no fixed structure required for your markup, in my examples I have used a `dl` (as the WAI-ARIA Authoring Practices guide used it in their [example](https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html)). You will need to add 5 selectors for the plugin to work. The selectors listed below are the default selectors but can all be over written using the plugins [options](https://github.com/stuartjnelson/badger-accordion#options).

1.  The containing element, `dl`, `.js-badger-accordion`
2.  The header element, `button`, `.js-badger-accordion-header`
3.  The panel element, `dd`, `.js-badger-accordion-panel`
4.  The panel inner element, `div`, `.js-badger-accordion-panel-inner`
5.  The panel element for targeting with CSS, `div`, `.badger-accordion__panel` . While you could use the selector from point 3 I would **not** recommend doing this. For keeping everything nice and separated best to use a different selector for targeting with CSS & JS.

```
<dl class="js-badger-accordion">
    <dt>
        <button class="js-badger-accordion-header">Header Content</button>
    </dt>
    <dd class="badger-accordion__panel js-badger-accordion-panel">
        <div class="js-badger-accordion-panel-inner">Panel Content</div>
    </dd>
</dl>
```

## Adding essential CSS

For then plugin to work you will need the following CSS.
```
.badger-accordion__panel {
    max-height: 75vh;
    overflow: hidden;
}

.badger-accordion__panel.-ba-is-hidden {
    max-height: 0 !important;
}

.badger-accordion--initalised .badger-accordion__panel {
    transition: max-height ease-in-out 0.2s;
}
```

## Creating a new instance of the plugin

I’m going to assume here that you will be using some form of bundler with your project. The easiest way to use the accordion is to download it using [npm](http://npmjs.com/package/badger-accordion)/yarn.

`npm i badger-accordion`

`yarn add badger-accordion`

Please note that currently the [array-from-polyfill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Polyfill) is being included as standard (but wrapped in a conditional check). If this is an issue for you or you have an awesome idea of how to include it please get in touch!

Import the package. Select your DOM node and pass it to a new instance of Badger Accordion.

```
import pollyfill from 'your/path/to/array-from-pollyfill';
import BadgerAccordion from 'badger-accordion';

const accordionDomNode = document.querySelector('.js-badger-accordion');
const accordion = new BadgerAccordion(accordionDomNode);
```

If you wanted to have multiple instances of the accordion you could go about it like this.

```
const accordions = document.querySelectorAll('.js-badger-accordion');

accordions.forEach(accordion => {
    const ba = new BadgerAccordion(accordion);
});
```

## Customising the plugin’s JavaScript options

The plugin currently has 11 different options. From changing the JS selector for your accordion’s panels to being able to have multiple panels open at the same time.

```
const accordion = new BadgerAccordion(accordionDomNode, {
    panelClass: 'my-custom-panel-class’
    openMultiplePanels: true,
});
```

Take a look at [the docs](https://github.com/stuartjnelson/badger-accordion#options) for a full list of options.

## Using the API

There are currently 6 methods to give you more control over your accordion. Lets go through an example of when you might want to use one.

Say that on your FAQ page on a mobile device you want all the panels to be closed.

```
accordion.closeAll();
```

Its that simple. Checkout the [Github repo](https://github.com/stuartjnelson/badger-accordion#methods) for full list of methods.

Thanks for reading this article! Got a question/bug report/think the docs could be improved? Leave a comment below. Checkout the Github [repo](https://github.com/stuartjnelson/badger-accordion) for detailed docs. There is an example implementation in the repo to help you get started.

I’ve had some awesome people help me out building the accordion. I worked in part on this while working at [Mr B & Friends](https://www.mrbandfriends.co.uk/) big shout out to the digital team there. This wouldn’t be anywhere near as good if it wasn’t for the wise words of [Dave Smith](https://github.com/getdave). Finally my favourite digital designer [Taavi Kelle](https://twitter.com/taavetkelle) who created the AWESOME logo and gave my demo styles _some love_ (Steve Richardson™).

Also to [BrowserStack](https://www.browserstack.com/) for supporting me by allowing me to use their platform for free.

## Resources I used to create the accordion

*   Reading a bunch of articles written by the wonderful [Tink](https://tink.uk/), my go to blog for accessibility treats.
*   Heydon Pickering’s book [_Inclusive Design Patterns_](https://shop.smashingmagazine.com/products/inclusive-design-patterns)  I would highly recommend.
*   The [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) is super useful and for some very technical basic looking docs I found it pretty readable
*   I used [Rollup.js](http://rollupjs.org) to bundle up the accordion and would really recommend it as a tool. Their startup guide is good and I would prefer it over Webpack for small use cases such as bundling up a plugin or small site.