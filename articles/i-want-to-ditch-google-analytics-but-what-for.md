---
layout: layout-post.hbs
title: >-
  I want to ditch Google Analytics but what for?
excerpt: >-
  Google Analytics remains the most popular analytics platform, but I’ve grown tired of its privacy invasions and performance issues. This post is my journey to find a simple analytics tool that respects both my needs and my users' data.
date: "2024-08-23T08:32:00.000Z"
featuredImg: /assets/img/i-want-to-ditch-google-analytics-but-what-for--featured-img.webp
meta:
  ogImg: /assets/img/i-want-to-ditch-google-analytics-but-what-for--og-img.jpg
tags:
  - posts
  - 11ty-blog-project
  - technical
categories: []
keywords: []
---

<!-- *[FE]: Front-End -->

![]({{featuredImg}})

{{excerpt}}

<some text>

## The problem
I want to add analytics to my [11ty](https://www.11ty.dev/) blog that respects my users privacy and takes less than an hour to setup with costing me anything.


## The contenders
I still think Google Analytics is a great tool but for a simple site where I've no interests in more advanced features or using other related Google tools, it feels overkill. There are many, many analytics tools out there aside from Google Analytics. I choose three to asses because I feel choosing from three is a good amount of choice. Here's my analysis of those tools.



### Netlify Analytics
When you host a site on Netlify you're also able to use their analytics tools, [Netlify Analytics](https://www.netlify.com/platform/core/analytics/). This is a server side analytics tool which respects your users privacy and doesn't affect the performance of your site. To start using Netlify Analytics it's just a click of a button in the Netlify dashboard however it does cost £9/month. The [data is only retained for 30 days](https://answers.netlify.com/t/historical-analytics-data-more-than-30-days/26466/30) but you can apparently export it using an Netlify API.

**Pros** ✅
* Very easy to setup
* Great for privacy and performance 

**Cons** ❌
* Costs £9/month
* Only have 30 days of data


### Ackee Analytics 
A free, self hosted open source platform, [Ackee](https://ackee.electerious.com/) was a recommendation I came across on a [Readit thread about Google Analytics alternatives](https://www.reddit.com/r/webdev/comments/qety61/what_is_a_good_lightweight_free_alternative_to/).

**Pros** ✅
* 

**Cons** ❌
* 


### Simple Analytics
A cookieless tool that focuses on privacy. Their free plan gives you access to the platform but with data only being stored for 30-60 days as well as your dashboard being public. 

**Pros** ✅
*

**Cons** ❌
*



## Conclusion
Netlify Analytics was a no for me due to the cost and lack of data retention. I didn't realise when I started I'd care about this limitation but I actually do. Since it's a very low traffic site I'm interested to see over time what works and what doesn't. 

Ackee Analytics since I didn't have an existing platform running a MongoDB database was a little fiddly to setup but fine in the end. It means I can access the data for as long as I need. 

Simple Analytics is my favourite. Easy setup, great dashboard with the AI tool and just feels like a great product. However in the free plan I only get 30 days of data.

I'm going to use both Simple and Ackee Analytics for a few months and see which I prefer. I could just export the data out of Simple Analytics into a Google sheet... Time will tell which I go for. I'll do a follow-up post in the future. 

Here is a comparison table for you that I used when assessing the tools. 

| Tool                | User Privacy | Ease of Setup | Cost  | Data Retention | Analytics Dashboard | Mean Average |
|---------------------|--------------|---------------|-------|----------------|---------------------|--------------|
| Netlify Analytics | 5/5          | 5/5           | 2/5   | 2/5            | 3/5                 | 3.4          |
| Ackee Analytics   | 5/5          | 2/5           | 5/5   | 5/5            | 3/5                 | 4.0          |
| Simple Analytics  | 5/5          | 5/5           | 5/5   | 2/5            | 4/5                 | 4.2          |

If you have any comments/feedback/questions on this article please get in touch! I'd love to know what your using for analytics on your personal projects.
