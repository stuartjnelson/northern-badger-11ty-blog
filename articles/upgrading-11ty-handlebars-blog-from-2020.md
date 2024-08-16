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

I wanted to get back into blogging using my 11ty blog. The problem is it's not setup on my laptop. When its running it will be as simple as creating a new Markdown file, merging in the GitHub PR & Netlfiy takes care of the rest.

I also wanted to build in the open. Taking the repo from being private to public as well as sharing my "roadmap" for what I wanted to complete.

## My laptop won't run VsCode as its too old...

My personal laptop is a 15" 2017 MacBook Pro. Its still a great laptop but I've been lazy keeping the operating system updated. When I closed down the repo it turned out I could no longer run VSCode... I didn't really want to through upgrading it as that would mean backups/time/possible things going wrong. I was trying to do this as simply as possible.

I noticed that there was a new feature (I mean it was [released in 2021](https://azure.microsoft.com/en-gb/updates/general-availability-github-codespaces/#:~:text=Published%20date%3A%20August%2011%2C%202021,Studio%20Code%2C%20or%20using%20SSH.) I just didn't know...) to run the repo in a [GitHub Codespace](https://github.com/features/codespaces). GitHub's virtual dev environment where you can work on and run a repo in the cloud. IT'S AMZAING. One of those times where a tool really is as easy as it claims.

## Updating dependencies that are 4 years out of date

I immediately ran into some annoying dependencies issues... I was worried how hard it would be to update 11ty as I was over four years out of date. To my suprise, it was no effort. Shout out to the 11ty community.
