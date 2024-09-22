---
layout: layout-post.hbs
title: >-
  My 11ty blog workflow - How I write and publish blog posts efficiently
excerpt: >-
  In this post, I walk through my process for writing blog posts on my 11ty site, from adding ideas to my roadmap to publishing with Netlify. I share how I use AI tools like ChatGPT and DALL-E to speed up repetitive tasks, while emphasising the importance of documenting workflows. If you're curious about streamlining your own blogging process, this might give you some new ideas.
date: "2024-09-14T16:10:00.000Z"
featuredImg: /assets/img/my-11ty-blog-workflow-how-i-write-and-publish-blog-posts-efficiently--featured-img.webp
meta:
  ogImg: /assets/img/my-11ty-blog-workflow-how-i-write-and-publish-blog-posts-efficiently--og-img.jpg
tags:
  - posts
  - blogging
  - 11ty
categories: []
keywords: []
---

![]({{featuredImg}})

{{excerpt}}

I decided to write this down after chatting to a friends who's an engineer (shout out to Vlad). He asked me how I went about turning my ideas into posts. I've written a subsequent post going into more [detail about how I use AI in my workflow](https://northernbadger.co.uk/articles/my-11ty-blog-workflow-how-i-use-ai-to-help-me-blog-as-a-dyslexic-software-engineer/).

## My high level processes
1. Add idea to my ["roadmap"](https://github.com/stuartjnelson/northern-badger-11ty-blog?tab=readme-ov-file#roadmap) when I come up with it. I feel this means when it comes to having time to write a post I can focus on writing rather than coming up with a new idea.
2. To start writing the post, I duplicate my [markdown post template](https://github.com/stuartjnelson/northern-badger-11ty-blog/blob/main/articles/__TEMPLATE.md). This helps with making my posts consistent as well as removing the need to duplicate the basic layout and [Front Matter Data](https://www.11ty.dev/docs/data-frontmatter/) properties.
3. Come up with the final title. Sometimes, I use AI 🤖 to brainstorm new ideas based on my original concept.
4. Draft the section titles so I have a document outline.
5. Create images using ChatGPT/DALL-E 🤖.
6. I then use ChatGPT 🤖 to optimise/resize/create different image formats for my needs. I have a prompt I used each time that just needs to be pasted into ChatGPT. I'll share this and more in my [follow-up post focusing on my AI usage](https://northernbadger.co.uk/articles/my-11ty-blog-workflow-how-i-use-ai-to-help-me-blog-as-a-dyslexic-software-engineer/).
7. Write the first draft, focusing on simply getting _something_ down. I find it's much easier to refine and improve once I have a starting point. I don’t worry too much about perfection on the first pass.
8. Use ChatGPT 🤖 to proof my work, section by section. This will be my final draft.
9. Write the excerpt and any additional meta data I need; publish date, remove it being a draft, add tags used to filter my blog content & any SEO data.
10. Final proof read and manual checks including reviewing OG data using [OGraph Previewer browser extension](https://chromewebstore.google.com/detail/ograph-previewer/ggcfeakcnodgcmmllfdbmngekljbhiim).
11. Once I'm happy with the post I just merge in my GitHub Merge Request and Netlify takes care of getting the post into production.
12. Schedule to share on LinkedIn.



## Conclusion
That’s essentially the process. It’s always evolving, but I find writing it down helps solidify it in my mind. I also encourage my teams to document their workflows. Once a process is on documented, it becomes easier to reflect and often spot areas for improvement. I’ve invested time in automating or simplifying repeatable tasks so I can focus more on creating content rather than managing the workflow.

If you have any comments/feedback/questions on this article please get in touch! I'd love to how go about writing posts for your blog.