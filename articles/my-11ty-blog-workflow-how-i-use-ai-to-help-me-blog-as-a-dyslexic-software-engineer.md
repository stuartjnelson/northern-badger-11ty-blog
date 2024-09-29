---
layout: layout-post.hbs
title: >-
  My 11ty blog workflow - How I use AI to help me blog as a dyslexic software engineer
excerpt: >-
  As someone with dyslexia, I’ve found that AI, particularly ChatGPT, plays a crucial role in my content creation process. From refining my blog post titles and proofreading drafts to generating illustrations with DALL-E, AI significantly reduces both the effort and stress involved in writing for me. Though it’s not without its limitations, like missing broader context in sections, the benefits far outweigh the drawbacks. AI has already become an invaluable tool that allows me to focus on creativity while handling the technical details.
date: "2024-09-22T16:16:00.994Z"
featuredImg: /assets/img/my-11ty-blog-workflow-how-i-use-ai-to-help-me-blog-as-a-dyslexic-software-engineer--featured-img.webp
meta:
  ogImg: /assets/img/my-11ty-blog-workflow-how-i-use-ai-to-help-me-blog-as-a-dyslexic-software-engineer--og-img.jpg
tags:
  - posts
  - dyslexia
  - blogging
  - ai
  - 11ty
categories: []
keywords: []
---

## AI for improving my blog post title
I'm responsible for coming up with title ideas for my articles, but I use ChatGPT to help refine them. For example, my initial draft for a recent post was _"As a Dyslexic Software Engineer, How I Use AI to Help Me Blog"_. I asked ChatGPT to improve it, and it returned _"How I Use AI to Help Me Blog as a Dyslexic Software Engineer"_. In this case, I used the exact suggestion. Other times, I tweak the suggestions slightly to better align with what I want.

While I recognise that my initial ideas can be a bit clunky, and I could improve them manually, that’s not my strength. I'm more of an ideas person, and written English can be a challenge for me.



## AI for proof reading
Once the first draft is complete, I ask ChatGPT to proofread each section of my article using the following prompt: 

`Improve, check grammar, spelling (UK English), and flow of the text. Return as markdown.`

I then review the diff in VSCode to see the changes. I make any necessary manual adjustments to ensure the text makes sense. I’ve noticed that ChatGPT can sometimes miss the wider context, which I assume is a drawback of handling the article section by section. However, I feel the advantages outweigh this. It’s less effort for me to understand the changes, and by breaking it down into smaller tasks, I can really focus on proofreading.



## AI for image creation
This is probably my favourite part. As a paid ChatGPT user, I get credits for image creation. [Under the hood, ChatGPT uses DALL-E](https://help.openai.com/en/articles/8932459-dall-e-in-chatgpt) for generating images. I typically ask it: 

`I want an illustration for a blog post I'm writing "<post title>". Can it be landscape?`

I've found that if I don't specifically request a landscape format, the default aspect ratio is 1:1.

It often takes a few iterations to get the illustration just right, especially when it tries to include text in the image. Once I’m happy with the result, I generate a couple of smaller sizes: one for the OG image and another for the post's "featured image". I always commit these, along with the original image, to my repository in case I need to generate other sizes in the future.

Here’s the prompt I use to create optimised images in the correct format and size for my posts:

> Now I need to download this image as three different files: 1) an optimised JPG OG image, 2) an optimised WebP image that's 780px wide, and 3) the high-resolution version. Each file name should use kebab-case based on the post title. The OG image and 780px-wide featured image should have a modifier at the end of the file name: `--og-img` for the OG image and `--featured-img` for the featured image.

There are 11ty tools that can create various image formats as part of the build process, and I’ll likely use them in the future. For now, though, it's very little effort to let ChatGPT help me with this.


## Conclusion
This is my current approach, and I’m constantly refining it. I could probably improve it by using a VSCode extension for ChatGPT. I should also create my standard prompts as [Alfred Text Expanders](https://www.alfredapp.com/help/features/snippets/), which would save me from re-writing or copying my most frequently used prompts.

Is AI good for content creation? For me, it significantly reduces the effort, especially as someone with dyslexia. However, I can understand how some might feel it devalues creative writing. AI is here to stay, though, and as a wise friend of mine always says, "This is the dumbest it's ever going to be." (should out to Richard Barnes)

My perspective fluctuates—from worrying that AI might replace my job in the next five years, to feeling like it’s a fantastic tool that will help us accomplish much more so we can focus on other tasks.

If you have any comments/feedback/questions on this article please get in touch! I'd love to how you use AI to help you help you generate content.