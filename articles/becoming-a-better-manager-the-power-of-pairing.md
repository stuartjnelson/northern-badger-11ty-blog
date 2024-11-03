---
layout: layout-post.hbs
title: >-
  Becoming a better manager - The power of pairing
excerpt: >-
  <Some excerpt text>
date: "2024-11-03T21:32:00.000Z"
featuredImg: /assets/img/becoming-a-better-manager-the-power-of-pairing--featured-img.webp
meta:
  ogImg: /assets/img/becoming-a-better-manager-the-power-of-pairing--og-img.jpg
tags:
  - posts
  - Becoming a better manager
categories: []
keywords: []
---

## What is pair programming?
To me, pair programming is when two engineers work together on the same problem using a single computer. One person’s primary role is to write the code, while the other drives the ideas and acts as a real-time code reviewer. Here is a more detailed explanation from Datadog.

> Pair programming refers to a common practice in software development where two developers work on the same coding task simultaneously. Traditionally, pair programmers shared a single computer, with one developer acting as “the driver” who controlled the keyboard and mouse, while the other served as the “navigator,” offering suggestions. Today, teammates often work in tandem remotely with the help of collaboration tools. Whether they’re working together physically or virtually, pair programmers often find that this technique boosts productivity and results in higher-quality code, as they discuss, review, and test the code as it’s written.
> -- [Datadog](https://www.datadoghq.com/knowledge-center/pair-programming/)


## My experience of pair programming
Pair programming is something I still feel relatively new to. The first person who introduced it to me in a more structured form was Darren West, in early 2022. I’ll admit, I didn’t get it at first. I couldn’t wrap my head around how it could be more productive. I think this is a pretty common reaction for both engineers and non-technical stakeholders.

It finally clicked for me in 2023 when, as part of the design system team at [HL](https://hl.co.uk), I was re-architecting our CI pipelines. Jonny Spry, a teammate, hadn’t worked much with GitLab pipelines, and I was still getting familiar with our codebase. This created an ideal scenario for pairing: we both brought different levels of experience to the table. I had more knowledge of GitLab CI, while Jonny was more familiar with the codebase. Together, we aimed to build a high-quality CI pipeline.

The result was that I gained a better understanding of our codebase with Jonny’s support, and I was able to help Jonny become more comfortable with GitLab CI. We could have completed the work independently and then reviewed each other’s merge requests, but pairing was a different experience altogether. It’s like having a human linter, requirements reviewer, and AI ideas machine in real time. You can quickly share insights, from small things like, “You missed a full stop on line XX,” to “I haven’t seen that shortcut before—what was it?”

Pairing helps share knowledge as you work, which addresses one of the biggest threats to team productivity: single points of failure, where only one person is the go-to expert on a task. In the short term, this may not seem like an issue, but it becomes a problem when that person is on holiday, on leave, or occupied with a high-priority task. Pairing is one of the best ways to prevent this.

Lastly, I believe pairing leads to greater wins for the team. There’s a fantastic sense of accomplishment when you come together to solve a complex problem. In the short term, it might require more “resource hours,” but in the long term, the shared knowledge and collaboration lead to better outcomes for the team.


## How I like to pair program
If I have a specific problem to solve thats complicated or someone is picking up a ticket on something they aren't familiar with, pairing is the perfect solution. Here my top pairing tips;

1. Have a clear objective.
2. Rotate between navigating and driving.
3. Use [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) to timebox driving/navigating and factoring in breaks. I find without regular 5min breaks it can be easy to drift, especially when remote. I use [TomatoTimer](https://www.toptal.com/project-managers/tomato-timer) which is a free web app.
4. Where possible use [VSCode Liveshare](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)* to allow the navigator to edit the code in real time.

*It can be VERY buggy. I've found it works best when the person whos wanting to edit remotely does so in their browser rather than in their own VSCode


## Pair programming as a engineering manager
Bringing it back to the post title. I feel as a manager it's an ideal way to support your team with their progression. As I've coded less at work over the last few years I'm not as sharp as I was BUT through pairing I'm away to work one-on-one with someone and focus on giving higher level support. I might not know the exact answer but I can bring along my debugging skills and core programming experience. For instance last week I was working with one of my team on a unit test for a componet. I couldn't remeber the exact syntax I needed to allow Jest to mock the feature. I was able to go over simplyingygin the code and making it more testable so we didn't have to create a complexed mock.


## Conclusion
If you have any comments/feedback/questions on this article please get in touch! I'd love to know if you use pair programming and how you find it.

