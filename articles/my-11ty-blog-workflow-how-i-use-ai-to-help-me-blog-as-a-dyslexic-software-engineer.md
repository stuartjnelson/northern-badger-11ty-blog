---
layout: layout-post.hbs
title: >-
  My 11ty blog workflow - How I use AI to help me blog as a dyslexic software engineer
excerpt: >-
  TBC
date: "2024-09-09T08:32:00.994Z"
featuredImg: /assets/img/my-11ty-blog-workflow-how-i-use-ai-to-help-me-blog-as-a-dyslexic-software-engineer--featured-img.webp
meta:
  ogImg: /assets/img/my-11ty-blog-workflow-how-i-use-ai-to-help-me-blog-as-a-dyslexic-software-engineer--og-img.jpg
draft: true
tags:
  - posts
  - dyslexia
  - blogging
  - ai
  - 11ty
categories: []
keywords: []
---

![]({{featuredImg}})

{{excerpt}}


## AI for improving my blog post title
I'm responsible for coming up with title ideas for my articles, but I use ChatGPT to help refine them. For example, my initial draft for a recent post was _"As a Dyslexic Software Engineer, How I Use AI to Help Me Blog"_. I asked ChatGPT to improve it, and it returned _"How I Use AI to Help Me Blog as a Dyslexic Software Engineer"_. In this case, I used the exact suggestion. Other times, I tweak the suggestions slightly to better align with what I want.

While I recognise that my initial ideas can be a bit clunky, and I could improve them manually, that’s not my strength. I'm more of an ideas person, and written English can be a challenge for me.



## AI for proof reading
Once the first draft is complete, I ask ChatGPT to proofread each section of my article using the following prompt: 

`Improve, check grammar, spelling (UK English), and flow of the text. Return as markdown.`

I then review the diff in VSCode to see the changes. I make any necessary manual adjustments to ensure the text makes sense. I’ve noticed that ChatGPT can sometimes miss the wider context, which I assume is a drawback of handling the article section by section. However, I feel the advantages outweigh this. It’s less effort for me to understand the changes, and by breaking it down into smaller tasks, I can really focus on proofreading.



## AI for image creation -❓
Probably my favourite part. I'm paying for ChatGPT so I get credits for image creation. [Under the hood ChatGPT uses DALL-E](https://help.openai.com/en/articles/8932459-dall-e-in-chatgpt) for image creation. I ask it `I want an illustration for a blog post I'm writing "<post title>". Can it be landscape`.  I've found if I don't specifically ask for it to be landscape the default aspect ratio is 1:1.

It can take quite a few back and forths to get the illustraion I want, especially if its trying to put text into the image. Once I'm happy with the image I get a couple of smallers sizes created. One for OG Image and one for my posts "featured image". I always commit these and the original image into my repo just inacse I need to generate some other sizes in the future.

My prompt for creating optimised images in the correct format and size for my posts;
> now I need to download this image as three different files. 1  as an optimized jpg og image, 2 as a optimized webp thats 780px wide and the 3rd as this high res version. Each file name should be the kebab case using the post title. The OG image and 780px wide featured files should have a modifier on the end of the file name; for the `--og-img` and `--featured-img`

There are 11ty tools that can create other image formats as part of the build. I'll likely use them in the future but for now its very little effort for ChatGPT to help me do this.



## Conclusion -❓
This is my approach and im refining it all the time. I could probably improve it by using a VSCode extension for ChatGPT. I should really create my standard prompts as [Alfred Text Expanders](https://www.alfredapp.com/help/features/snippets/) which would be a nice little reduction in re-writing/copying my most common prompts.

Is AI good for content creation? For my it helps reduce the effort it takes as someone who is dyslexic. I can see however how it could be see to devalue creative writing. Its here to stay and as wise friend always tells me "this is the dumbest it's every going to be". I go from feeling like its taking my job in the next fives years to feeling like AI is great and will help us do much more.


If you have any comments/feedback/questions on this article please get in touch! I'd love to how you use AI to help you carry out tasks.