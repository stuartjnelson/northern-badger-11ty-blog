---
layout: layout-post.hbs
title: >-
  Becoming a better manager - The power of pair programming
excerpt: >-
  In this post, I dive into the concept of pair programming and share my personal experiences with it. Pair programming involves two engineers working together on the same problem, often boosting productivity and code quality through real-time collaboration. I discuss how pairing has enhanced my understanding of team workflows, reduced single points of failure, and allowed me to support my team’s growth as an engineering manager.
date: "2024-11-03T22:12:00.000Z"
featuredImg: /assets/img/becoming-a-better-manager-the-power-of-pair-programming--featured-img.webp
meta:
  ogImg: /assets/img/becoming-a-better-manager-the-power-of-pair-programming--og-img.jpg
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

It finally clicked for me in 2023 when, as part of the design system team at [HL](https://hl.co.uk), I was re-architecting our CI pipelines. [Jonny Spry](https://www.linkedin.com/in/jonny-spry-81751a62), a teammate, hadn’t worked much with GitLab pipelines, and I was still getting familiar with our codebase. This created an ideal scenario for pairing: we both brought different levels of experience to the table. I had more knowledge of GitLab CI, while Jonny was more familiar with the codebase. Together, we aimed to build a high-quality CI pipeline.

The result was that I gained a better understanding of our codebase with Jonny’s support, and I was able to help Jonny become more comfortable with GitLab CI. We could have completed the work independently and then reviewed each other’s merge requests, but pairing was a different experience altogether. It’s like having a human linter, requirements reviewer, and AI ideas machine in real time. You can quickly share insights, from small things like, “You missed a full stop on line XX,” to “I haven’t seen that shortcut before—what was it?”

Pairing helps share knowledge as you work, which addresses one of the biggest threats to team productivity: single points of failure, where only one person is the go-to expert on a task. In the short term, this may not seem like an issue, but it becomes a problem when that person is on holiday, on leave, or occupied with a high-priority task. Pairing is one of the best ways to prevent this.

Lastly, I believe pairing leads to greater wins for the team. There’s a fantastic sense of accomplishment when you come together to solve a complex problem. In the short term, it might require more “resource hours,” but in the long term, the shared knowledge and collaboration lead to better outcomes for the team.


## How I like to pair program
When I have a specific, complex problem to solve or someone is working on a task they’re unfamiliar with, pairing is the perfect solution. Here are my top tips for effective pairing:

1. Have a clear objective.
2. Rotate between navigating and driving roles.
3. Use the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) to timebox driving/navigating sessions and include regular breaks. Without a quick 5-minute break every so often, it’s easy to lose focus, especially when working remotely. I use [TomatoTimer](https://www.toptal.com/project-managers/tomato-timer), a free web app, to keep track.
4. Where possible, use [VSCode Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)* to allow the navigator to edit code in real time.

*It can be _very_ buggy. I’ve found it works best when the person who needs to edit remotely does so through their browser rather than their own VSCode.


## Pair programming as an engineering manager
Bringing it back to the post title, I believe that as a manager, pair programming is an ideal way to support your team’s growth. Over the past few years, I’ve been coding less at work, so I’m not as sharp as I once was. However, through pairing, I can work one-on-one with team members and provide higher-level support. I might not always know the exact solution, but I can offer my debugging skills and core programming experience.

For example, last week I paired with a team member on a unit test for a component. I couldn’t recall the exact Jest syntax needed to mock a feature, but I was able to suggest ways to simplify the code and make it more testable, allowing us to avoid creating a complex mock.


## Conclusion
Pair programming is a fantastic way to collaborate. It accelerates knowledge sharing, enhances code quality, and fosters a more cohesive team environment. Initially, I found it challenging, particularly in seeing how it could save time. Part of my hesitation stemmed from the discomfort of coding in front of someone else. However, embracing an open-minded approach helped me overcome this, and the experience has proven to be highly rewarding.

If you have any comments/feedback/questions on this article please get in touch! I’d love to hear if you use pair programming and how you find it.

