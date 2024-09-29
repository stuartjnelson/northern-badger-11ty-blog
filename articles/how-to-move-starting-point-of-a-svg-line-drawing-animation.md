---
layout: layout-post.hbs
title: How to move starting point of a SVG line drawing animation
excerpt: >-
  Does your SVG line drawing animation start in the wrong place? I’ll show you
  here how to move the animations start point.
hideExcerptInTemplate: true  
date: '2018-01-16T18:16:02.434Z'
tags: posts
categories: []
keywords: []
---

Animating an SVG line drawing is super nice and really easy. Chris Coyer has a great [article](https://css-tricks.com/svg-line-animation-works/) on how to do this. What do you do if your SVG line starts drawing from the wrong place? DO NOT FEAR! I have a simple solution.

A Codepen example where I have moved the animation starting point for my triangle

## The Problem — Drawing starts from the wrong place

In this Codepen example I have a weird looking triangle I drew. The triangle at first starts drawing from the bottom left of the triangle but I want it to start from the top of the triangle. This happens because an SVG will start drawing from the initial point, mine in this example was the bottom.

## The Solution — “Moving” where the drawings starting point

To effectively “move” the starting point for the animation we need to cut the line in the place where we want to the animation to start from.

*   Open your SVG in your graphic editor of choice, here I’m using Adobe Illustrator. I switch to Outline view in illustrator (`cmd + Y` or `ctl + Y`). So I can make a more accurate incision without distraction of a weird looking line.

![Select outline view to add and remove new points from your SVG](/assets/img/1__NHqaZnYGy46fA1O5buvjvA.png)
Select outline view to add and remove new points from your SVG

*   We are going to add 3 new points to our line and then delete the middle point. I use the Pen tool’s “Add anchor point tool” (`P` then `+`) and insert three points around where I want the animation to start. I find this easiest if you zoom in as far as I can (8500%) as you want this gap to be as small as possible.

![](/assets/img/1__Y__B__SpqD0zZSRU5aH__AyQQ.png)
![On left select the “Add anchor point tool”. On right the 3 new points I added to my triangle and select the middle point](/assets/img/1__8MZkjh3h7rENLR4fkPhUVA.jpeg){.img--border}
* On left select the “Add anchor point tool”. On right the 3 new points I added to my triangle and select the middle point

*   Swapping to the Direct selection tool (`A`) to select the middle point and delete it.

![](/assets/img/1__EcLChxXfwy25dS0MUlnnjg.jpeg){.img--border}
![The triangle in outline and normal view with the middle of my three points deleted.](/assets/img/1__hVtho8NLDicxS8Jpjlu1uQ.png)
* The triangle in outline and normal view with the middle of my three points deleted.

*   Now your SVG line will have a visible gap that we don’t want. To fix this just select either your 1st or 3rd point and drag it so that it covers the gap. You don’t want to the join.

![](/assets/img/1____vQ__LrG5__fwwuJrz8pSYSQ.png)
![The triangle in outline and normal view with the line now dragged out so that there is no visible gap.](/assets/img/1__iescGS9TaBp5PPJBuIamvg.png)
* The triangle in outline and normal view with the line now dragged out so that there is no visible gap.

*   Export your SVG and enjoy the animation you wanted!

It’s that easy. Questions, comments, examples of your awesome animations? Please get in touch. Thanks for reading!