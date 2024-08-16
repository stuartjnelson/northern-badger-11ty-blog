---
layout: layout-post.hbs
title: >-
  Upgrading 11ty blog from 2020
excerpt: >-
  Updating outdated dependencies can be a daunting task. Join me on my journey as I revive my blog, powered by 11ty, Handlebars, SCSS, Utterances, Netlify & GitHub Codespaces
date: "2024-08-16T16:15:00.994Z"
pubdate: "16/08/2024"
featuredImg: /assets/img/upgrading-11ty-handlebars-blog-from-2020.webp
tags: posts
categories: []
keywords: []
---

![]({{featuredImg}})

Updating outdated dependencies can be a daunting task. Join me on my journey as I revive my blog, powered by [11ty](https://www.11ty.dev/), [Handlebars](https://handlebarsjs.com/), [SCSS](https://sass-lang.com/), [Utterances](https://utteranc.es/), [Netlify](https://www.netlify.com/) & [GitHub Codespaces](https://github.com/features/codespaces).

## The problem I wanted to solve

I wanted to get back into blogging using my 11ty blog. The problem is it's not setup on my laptop. When its running it will be as simple as creating a new Markdown file, merging in the GitHub PR & Netlify takes care of the rest.

I also wanted to build in the open. Taking the repo from being private to public as well as sharing my "roadmap" for what I wanted to complete.

## My laptop won't run VsCode as its too old...

My personal laptop is a 15" 2017 MacBook Pro. Its still a great laptop but I've been lazy keeping the operating system updated. When I closed down the repo it turned out I could no longer run VSCode... I didn't really want to through upgrading it as that would mean backups/time/possible things going wrong. I was trying to do this as simply as possible.

I noticed that there was a new feature (I mean it was [released in 2021](https://azure.microsoft.com/en-gb/updates/general-availability-github-codespaces/#:~:text=Published%20date%3A%20August%2011%2C%202021,Studio%20Code%2C%20or%20using%20SSH.) I just didn't know...) to run the repo in a [GitHub Codespace](https://github.com/features/codespaces). GitHub's virtual dev environment where you can work on and run a repo in the cloud. IT'S AMZAING. One of those times where a tool really is as easy as it claims.

## Updating dependencies that are 4 years out of date

I immediately ran into some annoying dependencies issues... I was worried how hard it would be to update 11ty as I was over four years out of date. To my surprise, it was no effort. **Shout out to the 11ty community!** The main issues I had were;

1. Handlebars was throwing a weird and unhelpful issues about being unable to find `head.hbs` partial but ONLY when the app first started up
2. My CSS being inlined was no longer working
3. I had a good 90+ security vulnerabilities 

### Fixing Handlebars issues
I'm using [Handlebars](https://handlebarsjs.com/) on this blog as it was the I was using when I worked at [Studee](https://studee.com/) back in 2020. I still feel its a pretty good lightweight templating tool thats easy to extend. It is however quite old and less powerful than say just using JavaScript for the templates. I consideredd starting again but felt it was worth spending a couple of hours trying to debug ths issue. It become clear that the issue was only when the app first started up and was happening only the the blogs home page `https://www.blog.northernbadger.co.uk/. I thought it was some kind of issue with 11ty/handlebars on startup being unable to run. Stackoverflow and ChatGPT gave me nothing :'( But I did come across this GitHub Gist - [Handlebars - Register all partials in a directory](https://gist.github.com/jaksah/70fc400ce70664eaa47fcb47c34b307c) which solved my problem. I added it to my 11ty config file, `.eleventy.js` and problem solved! This could cause some performance issues but I haven't noticed any. Since the blog is statically rendered I knew it wouldn't affect the side in production so it felt like a reasonable fix for now.

In the future I will review what other templating options I could use. The app was now running!

### Addressing 90+ security vulnerabilities
Since I haven't updated the site in four years loads of the dependencies have security vulnerabilities. Due to the nature of the site I don't feel any of them posted risks to my users but was still something I should address. As well as securing the site I would get access to new features and performance improvements. 

I added a `.nvmrc` file to my project to [inform Netlify what version of Node I waned to run](https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript). The project was using Node v12 when v20 is not now the recommended version... I deleted the `package-lock.json` because things were so out of date I thought it was worth a try. As with other things with this project I got lucky with just a simple `npm i` & `npm audit fix`. Which addressed most issues. I also updated where some decencies to correctly be `devDependencies`/dependencies`. 

All in all not very painful, until it broke my CSS...


### CSS wasn't working...
When I initially made the blog I'd followed a guide helping me inline the CSS for each page. This is the most performant way to render CSS. It can cause issues but since the UI is simple it was a great solution to improve the rendering of the blog. With one of my updates this all broke so I was getting no CSS... I spent a little time messing around but in the end decided to just use an `.css` file and come back to inlining the CSS later down the line. The main drawback to this is the blog has poor font rendering performance (which I don't belive it used to have). While not being ideal its not a deal breaker for me. I really want to keep this project moving and focus on iterative improvements.


## Building in the open & new features
I decided this blog should be a public repo. Nothing here is sensitive and as much as possible I belive we should make code available on the internet. This sharing of knowledge is very much how I was able to self-learn web development and I want to give more back. In the same vain I felt it would be a good idea to make pubic the features I want to add to the site. I'll move this into GitHub issues and maybe have a nice roadmap page on the site in the future. For now its just a [roadmap checklist on the repos Readme](https://github.com/stuartjnelson/northern-badger-11ty-blog?tab=readme-ov-file#roadmap).

For the "re-launch" I did want to sort a few things out;

* Add dates to the listing and blog posts ✅
* Add comments to blog posts. This was VERY easy using [Utterances](https://utteranc.es/) (I'll write about this in the future) ✅
* Have the ability to make posts drafts that would not be visible but where I could work on them (I'll write about this in the future) ✅
* Add meta & OG data so when I share articles they render nice little previews (I'll write about this in the future) ✅
* Add some analytics to the site. I ditched Google Analytics for [Simple Analytics](https://www.simpleanalytics.com/). I HIGHLY recommend it after 2 days (I'll write about this in the future) ✅

I was able to do all of the above which I was pretty chuffed with. 
