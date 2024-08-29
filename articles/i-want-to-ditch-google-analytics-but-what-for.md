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


## The Contenders
I still believe Google Analytics is a great tool, but for a simple site where I have no need for advanced features or other related Google tools, it feels excessive. There are countless analytics tools available besides Google Analytics. I chose three to assess because I think three provides a good balance of options. Here’s my analysis of those tools.




### Netlify Analytics
When you host a site on Netlify you're also able to use their analytics tools, [Netlify Analytics](https://www.netlify.com/platform/core/analytics/). This is a server side analytics tool which respects your users privacy and doesn't affect the performance of your site. To start using Netlify Analytics it's just a click of a button in the Netlify dashboard however it does cost £9/month. The [data is only retained for 30 days](https://answers.netlify.com/t/historical-analytics-data-more-than-30-days/26466/30) but you can apparently export it using an Netlify API.

**Pros** ✅
* Very easy to setup
* Great for privacy and performance 

**Cons** ❌
* Costs £9/month
* Only have 30 days of data


### Ackee Analytics 
A free, self hosted open source platform, [Ackee](https://ackee.electerious.com/) was a recommendation I came across on a [Readit thread about Google Analytics alternatives](https://www.reddit.com/r/webdev/comments/qety61/what_is_a_good_lightweight_free_alternative_to/). I've never used a self hosted analytics tool before so I was intrigued. Like Netlify Analytics, the data is captured server side. By default you only get pages views and time on page with Ackee. If you want to capture more such as device type or region you need to include Ackee Detailed Tracking which does involve dropping a cookie. They have a really nice [docs page explaining how to setup more detailed data capture](https://docs.ackee.electerious.com/#/docs/Anonymization#personal-data) in a privacy focused way. You can manually add a `source` query parameter to any URL (eg. `example.com?source=LinkedIn`) so you know where your traffic has come from.

**Pros** ✅
* Free
* Full control over the analytics web app

**Cons** ❌
* A little bit of effort to get setup
* Dashboard not as slick as other providers


### Simple Analytics
Like the other two tools, a server side analytics data capturing platform. They offer a free tier for personal projects which has some limitations including data being stored for only 30 days. Its a cookieless tool that focuses on privacy. Their free plan gives you access to the platform but with data only being stored for 30-60 days as well as your dashboard being public. Getting setup was as simple as adding the tracking script to my blogs `<footer>`. I am a fan of how well put together the product feels, from logging in using password-less authentication to their being "AI" built in to make it easy to answer specific analytics questions. If this blog made some money I'd defiantly pay to access a higher level of the tool.

**Pros** ✅
* Easy setup
* Excellent dashboard

**Cons** ❌
* Only 30 days data retention 



## Conclusion
Netlify Analytics was a no for me due to the cost and lack of data retention. I didn't realise when I started I'd care about this limitation but I actually do. Since it's a very low traffic site I'm interested to see over time what works and what doesn't. 

Ackee Analytics since I didn't have an existing platform running a MongoDB database was a little fiddly to setup but fine in the end. It means I can access the data for as long as I need. 

Simple Analytics is my favourite. Easy setup, great dashboard with the AI tool and just feels like a great product. However in the free plan I only get 30 days of data.

I'm going to use both Simple and Ackee Analytics for a few months and see which I prefer. I could just export the data out of Simple Analytics into a Google sheet... Time will tell which I go for. I'll do a follow-up post in the future. 

Here is a comparison table for you that I used when assessing the tools. 

| Tool                | User Privacy | Ease of Setup | Cost  | Data Retention | Analytics Dashboard | Mean Average |
|---------------------|--------------|---------------|-------|----------------|---------------------|--------------|
| Netlify Analytics   | 5/5          | 5/5           | 2/5   | 2/5            | 3/5                 | 3.4          |
| Ackee Analytics     | 5/5          | 2/5           | 5/5   | 5/5            | 3/5                 | 4.0          |
| Simple Analytics    | 5/5          | 5/5           | 5/5   | 2/5            | 4/5                 | 4.2          |

If you have any comments/feedback/questions on this article please get in touch! I'd love to know what your using for analytics on your personal projects.
