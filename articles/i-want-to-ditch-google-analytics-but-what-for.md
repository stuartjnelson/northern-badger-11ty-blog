---
layout: layout-post.hbs
title: >-
  I want to ditch Google Analytics but what for?
excerpt: >-
  Google Analytics remains the most popular analytics platform, but I’ve grown tired of its privacy invasions and performance issues. This post is my journey to find a simple analytics tool that respects both my needs and my users' data.
date: "2024-08-29T14:00:00.000Z"
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
When you host a site on Netlify, you have the option to use their analytics tool, [Netlify Analytics](https://www.netlify.com/platform/core/analytics/). This is a server-side analytics tool that respects your users' privacy and does not impact your site's performance. Activating Netlify Analytics is as simple as clicking a button in the Netlify dashboard, but it does come with a cost of £9 per month. The [data is only retained for 30 days](https://answers.netlify.com/t/historical-analytics-data-more-than-30-days/26466/30), though it can be exported using the Netlify API.


**Pros** ✅
* Very easy to setup
* Great for privacy and performance 

**Cons** ❌
* Costs £9/month
* Only 30 days data retention


### Ackee Analytics
One free, self-hosted, open-source platform I discovered is [Ackee](https://ackee.electerious.com/), which was recommended in a [Reddit thread about Google Analytics alternatives](https://www.reddit.com/r/webdev/comments/qety61/what_is_a_good_lightweight_free_alternative_to/). Having never used a self-hosted analytics tool before, I was intrigued. Like Netlify Analytics, Ackee captures data server-side. By default, Ackee only provides page views and time on page. If you want to capture more detailed information, such as device type or region, you need to enable Ackee Detailed Tracking, which does involve setting a cookie. They offer a well-documented [page explaining how to set up more detailed data capture](https://docs.ackee.electerious.com/#/docs/Anonymization#personal-data) in a privacy-focused manner. Additionally, you can manually add a `source` query parameter to any URL (e.g. `example.com?source=LinkedIn`) to track where your traffic is coming from.

**Pros** ✅
* Free
* Full control over the analytics web app

**Cons** ❌
* A little bit of effort to get setup
* Dashboard not as slick as other providers


### Simple Analytics
Like the other two tools, Simple Analytics is a server-side data capturing platform. They offer a free tier for personal projects, which comes with some limitations, including data being stored for only 30 days. It's a cookieless tool that prioritises privacy. The free plan provides access to the platform, but data is only stored for 30-60 days, and your dashboard is public. Setting it up was as simple as adding the tracking script to my blog’s `<footer>`. I'm impressed with how well the product is put together, from logging in with passwordless authentication to the inclusion of "AI" that makes it easy to answer specific analytics questions. If this blog generated revenue, I’d definitely consider paying for a higher tier of the tool.


**Pros** ✅
* Easy setup
* Excellent dashboard

**Cons** ❌
* Only 30 days data retention



## Conclusion

Netlify Analytics was a no for me due to the cost and limited data retention. I didn’t initially think I’d care about this limitation, but it turns out I do. Since my site receives very low traffic, I’m interested in tracking what works and what doesn’t over time.

Ackee Analytics, while a bit fiddly to set up since I didn’t have an existing MongoDB database, ultimately worked out fine. The advantage here is that I can access the data for as long as I need.

Simple Analytics is my favourite. It offers an easy setup, a great dashboard with the AI tool, and overall just feels like a well-crafted product. However, with the free plan, I only get 30 days of data retention.

I’m going to use both Simple and Ackee Analytics for a few months to see which one I prefer. I could always export the data from Simple Analytics into a Google Sheet... Time will tell which I settle on. I’ll do a follow-up post in the future.

Here is a comparison table that I used when assessing the tools.


| Tool                | User Privacy | Ease of Setup | Cost  | Data Retention | Analytics Dashboard | Mean Average |
|---------------------|--------------|---------------|-------|----------------|---------------------|--------------|
| Netlify Analytics   | 5/5          | 5/5           | 2/5   | 2/5            | 3/5                 | 3.4          |
| Ackee Analytics     | 5/5          | 2/5           | 5/5   | 5/5            | 3/5                 | 4.0          |
| Simple Analytics    | 5/5          | 5/5           | 5/5   | 2/5            | 4/5                 | 4.2          |

If you have any comments/feedback/questions on this article please get in touch! I'd love to know what your using for analytics on your personal projects.
