---
layout: layout-post.hbs
title: >-
  Upgrading 11ty blog from 2020
excerpt: >-
  Updating outdated an outdated website can be a daunting task. Join me on my journey as I revive my blog, powered by 11ty, Handlebars, SCSS, Utterances, Netlify & GitHub Codespaces
date: "2024-08-16T16:15:00.994Z"
pubdate: "16/08/2024"
featuredImg: /assets/img/upgrading-11ty-handlebars-blog-from-2020.webp
tags: posts
categories: []
keywords: []
---

![]({{featuredImg}})

Updating an outdated website can be a daunting task. Join me on my journey as I revive my blog, powered by [11ty](https://www.11ty.dev/), [Handlebars](https://handlebarsjs.com/), [GitHub Codespaces](https://github.com/features/codespaces), and more.

## The Problems I Wanted to Solve

1. I wanted to get back into blogging using my 11ty blog. The repository was not set up on my laptop. Once it was set up, I wanted adding a blog post to be as simple as creating a new Markdown file, merging the GitHub PR, and letting Netlify take care of the rest.

2. I also wanted to build in the open, transitioning the repository from private to public, and sharing my "roadmap."

3. I aimed to make small improvements to the UI and codebase as I came across them.

## My Laptop Won't Run VSCode Because It's Too Old...

My personal laptop is a 15" 2017 MacBook Pro. It's still a great device, but I've been lazy about keeping the operating system updated. When I cloned down the repository, I found that I could no longer run VSCode. I didn't want to go through the hassle of updating the OS, as that would mean backups, time, and the potential for things to go wrong. I wanted to keep things as simple as possible.

I noticed there was a new feature (well, it was [released in 2021](https://azure.microsoft.com/en-gb/updates/general-availability-github-codespaces/#:~:text=Published%20date%3A%20August%2011%2C%202021,Studio%20Code%2C%20or%20using%20SSH.), but I just wasn't aware of it...) that allowed me to run the repository in a [GitHub Codespace](https://github.com/features/codespaces). GitHub's virtual dev environment lets you work on and run a repository in the cloud. IT'S AMAZING. One of those times where a tool really is as easy as it claims.

## Updating Dependencies That Are 4 Years Out of Date

I immediately ran into some annoying dependency issues... I was worried about how difficult it would be to update 11ty since I was over four years out of date. To my surprise, it was no effort at all. **Shout out to the 11ty community!** The main issues I had were:

1. Handlebars was throwing a weird and unhelpful error about being unable to find the `head.hbs` partial, but ONLY when the app first started up.
2. My CSS being inlined was no longer working.
3. I had over 90 security vulnerabilities.

### Fixing Handlebars Issues

I'm using [Handlebars](https://handlebarsjs.com/) on this blog because it was what I was using when I worked at [Studee](https://studee.com/) back in 2020. I still think it's a pretty good lightweight templating tool that's easy to extend. However, it is quite old and less powerful than, say, just using JavaScript for the templates. I considered starting over but felt it was worth spending a couple of hours trying to debug this issue. It became clear that the issue only occurred when the app first started up and was happening only on the blog's home page (`https://www.blog.northernbadger.co.uk/`). I thought it was some kind of issue with 11ty or Handlebars on startup being unable to run. Stack Overflow and ChatGPT gave me nothing :'( But I did come across this GitHub Gist - [Handlebars - Register all partials in a directory](https://gist.github.com/jaksah/70fc400ce70664eaa47fcb47c34b307c) which solved my problem. I added it to my 11ty config file, `.eleventy.js`, and problem solved! This could cause some performance issues, but I haven't noticed any. Since the blog is statically rendered, I knew it wouldn't affect the site in production, so it felt like a reasonable fix for now.

In the future, I will review what other templating options I could use. The app was now running!

### Addressing 90+ Security Vulnerabilities

Since I hadn't updated the site in four years, loads of dependencies had security vulnerabilities. Due to the nature of the site, I don't feel any of them posed risks to my users, but it was still something I should address. As well as securing the site, I would gain access to new features and performance improvements.

I added a `.nvmrc` file to my project to [inform Netlify what version of Node I wanted to run](https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript). The project was using Node v12 when v20 is now the recommended version... I deleted the `package-lock.json` because things were so out of date I thought it was worth a try. As with other things in this project, I got lucky with just a simple `npm i` & `npm audit fix`, which addressed most issues. I also updated some dependencies to correctly be `devDependencies`/`dependencies`.

All in all, not very painful, until it broke my CSS...

### CSS Wasn't Working...

When I initially made the blog, I'd followed a guide that helped me inline the CSS for each page. This is the most performant way to render CSS. It can cause issues, but since the UI is simple, it was a great solution to improve the rendering of the blog. With one of my updates, this all broke, so I was getting no CSS... I spent a little time messing around but in the end decided to just use a `.css` file and come back to inlining the CSS later down the line. The main drawback to this is the blog has poor font rendering performance (which I don't believe it used to have). While not ideal, it's not a deal-breaker for me. I really want to keep this project moving and focus on iterative improvements.

## Building in the Open & New Features

I decided this blog should be a public repository. Nothing here is sensitive, and as much as possible, I believe we should make code available on the internet. This sharing of knowledge is very much how I was able to self-learn web development, and I want to give more back. In the same vein, I felt it would be a good idea to make public the features I want to add to the site. I'll move this into GitHub issues and maybe have a nice roadmap page on the site in the future. For now, it's just a [roadmap checklist on the repository's Readme](https://github.com/stuartjnelson/northern-badger-11ty-blog?tab=readme-ov-file#roadmap).

For the "re-launch," I did want to sort a few things out:

- Add dates to the listing and blog posts ✅
- Add comments to blog posts. This was VERY easy using [Utterances](https://utteranc.es/). Authenticate with GitHub and add a JS script (I'll write about this in the future) ✅
- Have the ability to make posts drafts using 11ty so that they would not be visible publicly (I'll write about this in the future) ✅
- Add meta & OG data so when I share articles, they render nice little previews (I'll write about this in the future) ✅
- Add some analytics to the site. I ditched Google Analytics for [Simple Analytics](https://www.simpleanalytics.com/). I HIGHLY recommend it after 2 days (I'll write about this in the future) ✅

I was able to do all of the above, which I was pretty chuffed with.

## Conclusion

I'm really happy with the [stack for my blog](https://github.com/stuartjnelson/northern-badger-11ty-blog?tab=readme-ov-file#tech-stack). It's loosely coupled, easy to maintain and scale. Despite it being four years out of date, it only took about four hours to get it updated and running smoothly. It's now a blog I can very easily add content to, as well as continue to evolve the site. 11ty is still my favourite tool for spinning up a simple website.

Any questions/comments/bugs/feedback, please get in touch! Thanks for reading. Let me know what tech stack you'd use for creating a blog.
