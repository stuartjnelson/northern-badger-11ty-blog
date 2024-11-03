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

now I need to download this image as three different files. 1  as an optimised jpg og image, 2 as a optimised webp thats 780px wide and the 3rd as this high res version. Each file name should be the kebab case post title. The OG image and 780px wide featured files shoudl have a modifier on the end of the file name; for the `--og-img` and `--featured-img`

## What is pair programming?
To me, its two engineers working together on the same problem using a single computer. One person primary role is to write the code where as the other person is driving the ideas as well as being a real time code checker. I've got a more detailed quote below from Datadog.

> Pair programming refers to a common practice in software development where two developers work on the same coding task at the same time. Traditionally, pair programmers worked behind a single computer, with one developer acting as “the driver” who controlled the keyboard and mouse, and the other developer acting as the “navigator” who offered suggestions. Today, teammates coding in tandem usually work remotely with the help of collaboration tools. But whether they are working together physically or virtually, pair programmers often find this technique allows them to be more productive and write higher-quality code because they are discussing, reviewing, and testing the code as it gets written.
> -- [https://www.datadoghq.com/knowledge-center/pair-programming/](https://www.datadoghq.com/knowledge-center/pair-programming/)


## My experience of pair programing
Its something I still feel relativly new too. The first person who introduced it to me in this more defined form was Darren West, in early 2022. I'll admit, I didn't get it at first. I couldn't get my head around how this would be more productive. I feel this is a pretty common reaction for engineers and non-technical stakeholders alike.

It clicked for me with in 2023 when as the design system team at [HL](https://hl.co.uk) I was re-architecting our CI pipelines. Jonny Spry in my team hadn't done a lot of work with GitLab pipelines and I was getting to grips with our codebase. This created an ideal scenario for pairing. We were both bringing to the table difference levels of experience. What we wanted to do was create a quality CI pipeline where I was bringing more GitLab CI knowledge and Jonny brought his knowledge of our codebase. 

The outcome was I understood ourcodebase better through Jonny's support and I was able to support Jonny becoming more familiar with GitLab CI. We could have both done the work independantly and upon submitting merge requests reviewed each others work. We were a collaborative team so if while completiing a task we'd reguallar jump on a call to help each other. However this is very different to pairing. When pairing it's like you've aquried a human linter/requirements reviewer/AI ideas machine in real time. You can pass on small things such as "on line XX you missed a full stop" to "I haven't seen that shortcut before what was it?". 

You share knowledge while working on a task. One of the biggest killers for productivity for a team is single points of failure, where one person is the go-to person for a specific task. In the short term this isn't a problem but when about when they are on holiday/go on leave/are working on another high prioity task. Pairing is one of the best ways to solve this.

Finally I belive it created better wins for you as a team. Its awesome when you've been able to come together to solve a complicated problem. 


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

