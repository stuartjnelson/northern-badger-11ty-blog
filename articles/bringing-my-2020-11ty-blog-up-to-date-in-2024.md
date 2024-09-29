---
layout: layout-post.hbs
title: >-
  Bringing my 2020 11ty blog up to date in 2024
excerpt: >-
  Updating an outdated website can be a daunting task. Join me on my journey as I revive my 2020 blog in 2024, powered by 11ty, Handlebars, SCSS, Utterances, Netlify & GitHub Codespaces
hideExcerptInTemplate: true
date: "2024-08-18T11:14:00.000Z"
featuredImg: /assets/img/upgrading-11ty-handlebars-blog-from-2020.webp
tags: 
  - posts
  - 11ty-blog-project
categories: []
keywords: []
---

Updating an outdated website can be a daunting task. Join me on my journey as I revive my 2020 blog in 2024, powered by [11ty](https://www.11ty.dev/), [Handlebars](https://handlebarsjs.com/), [GitHub Codespaces](https://github.com/features/codespaces), and more.

## The problems

1. To get back into blogging using my 11ty blog. The repository was not set up on my laptop. Once it was set up, I wanted adding a blog post to be as simple as creating a new Markdown file, merging the GitHub PR, and letting Netlify take care of the rest.

2. To build in the open, transitioning the repository from private to public, and sharing my "roadmap."

3. I aimed to make small improvements to the UI and codebase as I came across them.

## Unable to run the site: my laptop can't run VSCode due to its age

My personal laptop is a 15" 2017 MacBook Pro. It's still a great device, but I've been lazy about keeping the operating system updated. When I cloned down the repository, I found that I could no longer run VSCode. I wanted to avoid the hassle of updating the OS, which would require backups, an uncertain amount of time, and the risk of complications. My goal was to keep things as simple as possible.

I noticed there was a new feature (well, it was [released in 2021](https://azure.microsoft.com/en-gb/updates/general-availability-github-codespaces/#:~:text=Published%20date%3A%20August%2011%2C%202021,Studio%20Code%2C%20or%20using%20SSH.), but I just wasn't aware of it...) that allows you to run repositories in a [GitHub Codespace](https://github.com/features/codespaces). This is GitHub's virtual development environment enables you to work on and run a repository directly in the cloud. IT'S AMAZING. One of those times where a tool really is as easy as it claims.

## Updating dependencies that are 4 years out of date

I immediately encountered some frustrating dependency issues that prevented the app from running. Determined to resolve them, I started by updating 11ty itself.

Given that my version was over four years out of date, I was concerned about the difficulty of the update. To my surprise, it was effortless. **Shout out to the 11ty community!** With 11ty now updated to the latest stable version, the remaining issues I faced were:

1. Handlebars was throwing a weird and unhelpful error about being unable to find the `head.hbs` partial, but ONLY when the app first started up.

2. I had over 90 security vulnerabilities.

3. My CSS inlining was no longer functioning properly so I had no styles on the blog

### Fixing Handlebars startup errors

I'm using [Handlebars](https://handlebarsjs.com/) on this blog because it was the templating tool I used when I worked at [Studee](https://studee.com/) back in 2020. I still consider it a good, lightweight option that's easy to extend. However, it is somewhat outdated and less powerful than using JavaScript directly for templates. I considered starting with a fresh templating tool, but decided it was worth spending a few hours trying to debug the issue.

The problem only occurred when the app first started up, and it was limited to the blog's home page (`https://www.blog.northernbadger.co.uk/`). Initially, I suspected it was an issue with 11ty or Handlebars struggling to initialise. Unfortunately, both Stack Overflow and ChatGPT provided no solutions :'(

However, I stumbled upon a helpful GitHub Gist - [Handlebars - Register all partials in a directory](https://gist.github.com/jaksah/70fc400ce70664eaa47fcb47c34b307c) - This approach resolved the issue by ensuring that 11ty recognized all Handlebars partials, allowing the app to locate them correctly at startup. I implemented the solution by adding the gist code to my 11ty config file, `.eleventy.js`, and the issue was resolved! Although this approach could potentially introduce performance issues, I haven't noticed any so far. Since the blog is statically rendered, I was confident it wouldn’t impact the site in production, making it a reasonable fix for now.

In the future, I will review what other templating options I could use. The app was now running!

### Addressing 90 security vulnerabilities

Since I hadn't updated the site in four years, loads of dependencies had security vulnerabilities. Due to the nature of the site, I don't feel any of them posed risks to my users, but it was still something I should address. As well as securing the site, I would gain access to new features and performance improvements.

I added a `.nvmrc` file to my project to [inform Netlify what version of Node I wanted to run](https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript). The project was using Node v12 when v20 is now the recommended stable version. I deleted the `package-lock.json` because things were so out of date I thought it was worth a try. As with other things in this project, I got lucky with just a simple `npm install` & `npm audit fix`, which addressed most issues. I also updated some dependencies to correctly be `devDependencies`/`dependencies` as my build was failing in Netlify as a result.

All in all, not very painful, until it broke my CSS...

### My inline CSS wasn't working

When I initially made the blog, I'd followed a guide that helped me inline the CSS for each page and remove any styles not needed. This is the most performant way to render CSS. It can cause issues where styles are missing, but since the UI is simple, it was a great solution to improve the rendering performance of the blog.

One of my updates caused my inline CSS to break, leaving me with no styles. I tinkered with it for a bit but ultimately decided to use a single CSS file for the blog and revisit inlining the CSS later. The main drawback is the blog now has poor font rendering performance, which I don't recall being an issue before. While it's not ideal, it's not a deal-breaker. My priority is to keep this project moving forward and focus on making iterative improvements.

## Building in the open new features

I decided this blog should be a public repository. Nothing here is sensitive, and as much as possible, I believe we should make code available on the internet. Sharing knowledge like this played a significant role in my self-taught journey in web development, and I’m eager to give back more to the community. In the same vein, I felt it would be a good idea to make public the features I want to add to the site. I'll move this into GitHub issues and maybe have a nice roadmap page on the site in the future. For now, it's just a [checklist on the repository's Readme](https://github.com/stuartjnelson/northern-badger-11ty-blog?tab=readme-ov-file#roadmap).

For the "re-launch," I did want to improve a few things:

- Include dates in the listing page excerpts and at the top of each blog post ✅
- Add comments to blog posts. This was VERY easy using [Utterances](https://utteranc.es/). Authenticate with GitHub and add a JS script (I'll write about this in the future) ✅
- Enable the ability to mark posts as drafts, ensuring they remain hidden from public view while I work on them (I'll write about this in the future) ✅
- Integrate meta and OG data to generate engaging previews when sharing articles (I'll write about this in the future) ✅
- Add some analytics to the site. I ditched Google Analytics for [Simple Analytics](https://www.simpleanalytics.com/). I HIGHLY recommend it after 2 days (I'll write about this in the future) ✅

I managed to accomplish all of the above, which I was pretty chuffed with.

## Conclusion

I'm really happy with the [stack for my blog](https://github.com/stuartjnelson/northern-badger-11ty-blog?tab=readme-ov-file#tech-stack). It's loosely coupled, easy to maintain and scalable. Despite it being four years out of date, it only took about three hours to get it updated and running smoothly. It's now a blog I can very easily add content to, as well as continue to evolve the site. 11ty is still my favorite tool for spinning up a simple website.

While there are still a thousand things I'd like to improve on my blog, I'm glad I shipped it as is. In a role where I spend most of my time away from code, I often engage in discussions about 'iterative improvements.' It's satisfying to practice what I preach and dive back into coding a project that I’m personally responsible for.

Any questions/comments/bugs/feedback, please get in touch! Thanks for reading. Let me know what tech stack you'd use for creating a blog.
