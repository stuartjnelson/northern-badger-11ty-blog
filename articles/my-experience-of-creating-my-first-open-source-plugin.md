---
layout: layout-post.hbs
title: My experience of creating my first open-source plugin.
excerpt: >-
  I wanted to share my experiences, what I learnt and tools I discovered while
  creating my first open-source plugin.
date: '2018-01-23T16:01:01.594Z'
pubdate: '23/1/2018'
tags: posts
categories: []
keywords: []
---

Is there a website made in the last 3 years that doesn’t use some form of [open-source](http://www.wpbeginner.com/glossary/open-source/) framework/plugin/tool? I know at least every website I’ve made uses nearly exclusively open source tools. I have always wanted to create something to give back to the community but to be honest, I have never felt good enough or confident in my own skills. I found some good insight from others on the web about just getting this done (shout out to [Syntax podcast](https://syntax.fm/)), Brad Frost sums it up here really well.

So I worked away on and off throughout 2017 on my first open source project; [Badger Accordion](http://ba.northernbadger.co.uk)! For more info about the plugin check out my [Medium article](https://medium.com/@stuartjnelson/badger-accordion-an-accessible-light-weight-vanilla-javascript-accordion-with-an-extensible-api-a34128922822) about how to use it. I thought I’d share my experience of creating the plugin.

![An accessible lightweight, vanilla JavaScript accordion with an extensible API. Just 6.14kb and Gzipped 1.86kb!](/assets/img/1__qhqhlH9ej4PikT3tpUp6fQ.png){.img--center}
An accessible lightweight, vanilla JavaScript accordion with an extensible API. Just 6.14kb and Gzipped 1.86kb!

## What is an open-source project?

Aside from being something an awesome person releases for free on the web I didn’t really know what [open-source](https://hackernoon.com/tagged/open-source) was. I found Radek Pazdera’s [open-source checklist](http://radek.io/2015/11/23/release-checklist/) article super helpful in better understanding what qualifies something as open-source. One really important thing I learnt from Radek is that without a license my plugin wouldn’t technically be open-source.

**Conclusion:** Add a license. Simple.

## What I think a good open-source project needs

Aside from the old imposter syndrome I wanted to ensure that I didn’t release it until it was ready. For me a good open source project has a few criteria.

1.  <b>Easy to use.</b> There is _nothing worse_ than having to spend a day integrating a plugin into your site to discover that it doesn’t do what it claims it can or flat out doesn’t work.
2.  <b>Has Well written documentation that is useful to a wide range of developers.</b> I feel docs should be as useful to a new developer as they are for someone with 20+ years experience.
3.  <b>[Code examples](https://codepen.io/stuartjnelson/pen/WZpxqY)</b>. I find just code snippets a bit limp if they are not included alongside working examples that can see & inspect. I feel CodePen demos are the perfect solution.
4.  <b>A simple [demo site](http://ba.northernbadger.co.uk) & logo.</b> The most robust plugins I use/have used all have demo sites ([Slick slider](http://kenwheeler.github.io/slick/), [Magnific popup](http://dimsemenov.com/plugins/magnific-popup/), [Plyr](https://plyr.io/), etc…). I feel this qualifies the plugin as being more than just something that has been developed while working on a project. It’s a commitment to the plugin. Badger Accordion wouldn’t have been possible without my favourite digital designer, [Taavi Kelle](http://taavetkelle.co.uk/). He created the logo and was a sounding board for my demo styles.

**Conclusion:** While the above points IMO are needed for an in-depth open-source plugin I feel only 1 & 2 are essential.

## Creating the codebase

I started working on Badger Accordion while working at [Mr B & Friends](http://mrbandfriends.co.uk) as we couldn’t find an accordion that didn’t use jQuery & with an extensible API. I basically had the accordion finished in August 2017 but it took me another 5 months to release it publicly! I think a big part of this was my fear of criticism.

The wrote the plugin in ES6 and was originally using Webpack to compile my assets, I’ll be honest; I got it working but didn’t enjoy it. Dave Smith recommend that I use [Rollup.js](https://rollupjs.org/) instead to package up the plugin. After going through their simple walk-though I had Rollup working pretty quickly. I had a few things with my initial setup that weren’t working but after sorting them out it was a dream. I would definitely use again for a project like this.

**Conclusion:** If it works for you , passes testing, then just release it. Get friends/colleagues to look over it and give their feedback. There is definitely a point where you can just end-up over thinking your codebase.

## Creating Documentation

I think I probably spent as long writing the docs as I did the codebase. I reviewed my favourite repos docs and borrowed little bits I liked from them. I’m a big fan of tables in docs as well as a step by step guide of how to use the plugin. I think this lowers the entry level for using a plugin (and you know, if your fellow devs are hungover you want them to be able to still use your plugin). Even if you’re a total frontend master with 20 years of experience; why would you want it to be difficult to use someone else’s tool?

I did find that my NPM page rendered my Readme.md a little differently to GitHub, mainly I spent a while fiddling with my tables. I wish at the time I’d written down what I did to fix the issue and what exactly the issue was… Here is an example of my table header row, separator row as well as the first row (I’ve cut out a column for sake of preventing wrapping of the snippet).

```
| Option      | Type   | Default                         |
|---          |---     |---                              |
| headerClass | String | \`.js-badger-accordion-header\` |
```

Here are the tools/articles that helped me create my documentation.

*   [**http://tableofcontent.eu/**](http://tableofcontent.eu/) — useful tool creating table of contents. Thanks to r[aychenon](https://github.com/raychenon) for sharing this tool
*   [**Markdown cheatsheet**](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) — I haven’t written much markdown other than titles and lists so found Adam Pritchard’s cheatsheet super useful
*   [**Atom Markdown Preview**](https://atom.io/packages/markdown-preview) — a package that shows you what your Markdown looks like because who doesn’t love to see what they are actually writing.
*   [**Issue template** ](https://embeddedartistry.com/blog/2017/8/18/a-github-issue-template-for-your-projects)— After receiving my first issue ticket I decided I need to find out how to create a template for issues that I’d seen on other repos. I found Embedded Artistry’s issue template article really helpful and showing me this is super easy to do.

**Conclusion.** Docs take time and that’s okay. I will create myself a template for the [future](https://hackernoon.com/tagged/future) to speed this process up (article coming in 2018). I really don’t think they can be rushed, if developers don’t know all the cool things your tool does, what’s the point in releasing it?

## FINALLY, releasing the plugin

Aside from hosting my repo on Github I also wanted to make the plugin into a [NPM package](http://npmjs.com/package/badger-accordion). I had assumed this was pretty complicated but it was anything but. NPM have a great little [guide and video](https://docs.npmjs.com/getting-started/publishing-npm-packages) for how to do this. I wrote create Codepen demo, plugin site, walkthrough article and tweeted it out. That was it. WAHHHOOOO!

**Conclusion:** should have spent less time worrying and just released it. I’m glad I spent time making all the extra little bits around the plugin.

Since December I’ve had over 600 downloads. While this is a drop in the ocean compared to many plugins I am super proud of this. I’ve had one issue (which I managed to fix with the help of the person raising it) and hopefully have helped a whole bunch of developers create an easy, accessible accordion. While it was a lot of work, the feeling achievement I got when I publicly released it was definitely worth it. I’ve said it before but, a massive thanks again to [Dave Smith](https://aheadcreative.co.uk/) & [Taavi Kelle](http://taavetkelle.co.uk). You guys rock and I couldn’t have done it without you.

If you have any comments/feedback/questions on this article or the accordion please get in touch!