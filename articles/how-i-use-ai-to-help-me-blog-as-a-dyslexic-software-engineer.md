---
layout: layout-post.hbs
title: >-
  How I use AI to help me blog as a dyslexic software engineer
excerpt: >-
  When chatting with an engineer friend recently, he asked how I approach blogging. This inspired me to document my process and share it, inviting others to discuss how they’re blogging in 2024. As someone with dyslexia, AI has been a tremendous help, easing the stress of writing and streamlining my workflow.
date: "2024-09-09T08:32:00.994Z"
featuredImg: /assets/img/how-i-use-ai-to-help-me-blog-as-a-dyslexic-software-engineer--featured-img.webp
meta:
  ogImg: /assets/img/how-i-use-ai-to-help-me-blog-as-a-dyslexic-software-engineer--og-img.jpg
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

## My high level processes - ❓
1. Add idea to my ["roadmap"](https://github.com/stuartjnelson/northern-badger-11ty-blog?tab=readme-ov-file#roadmap) when I come up with it
2. To start writing the post, I duplicate my [markdown post template](https://github.com/stuartjnelson/northern-badger-11ty-blog/blob/main/articles/__TEMPLATE.md)
3. Come up with the actual title - sometimes use AI here 🤖
4. Draft the section titles so I have a document outline
5. Create images using ChatGPT/DALL-E
6. Use ChatGPT to optimise/resize/format images
7. Write my first draft
8. Use ChatGPT to proof my work, section by section
9. Write the excerpt and any additional meta data
10. Final checks including checking OG data using [OGraph Previewer browser extension](https://chromewebstore.google.com/detail/ograph-previewer/ggcfeakcnodgcmmllfdbmngekljbhiim)
11. Merge in the PR and Netlify takes care of getting the post into production
12. Schedule to share on LinkedIn


## AI for content ideation - ❓
I'm coming up with the ideas myself for the articles but I use ChatGPT to improve them. For instacne my draft title for this post was _As a Dyslexic software engineer how I use AI to help me blog_ and I asked ChatGPT to improve this title. It return _How I use AI to help me blog as a dyslexic software engineer_. Sometimes, like on this occasion I use exactly what ChatGPT gives me. Often I'll take what it returns to me and tweak it to better fit what I'm after.

I know my ide is a bit clunky and I could manually improve it but thats not a strenth of mine. I'm an ideas person. Written English is a challenge.


## AI for proof reading - ❓
When the first draft is done I'll ask ChatGPT to proof read each section of my article with the following prompt; `Improve, check grammar, spelling (UK english) and flow of the text. Return as markdown`. I then in VSCode review the diff to see the changes. I will make nessacery manual adjsutments so the text makes sense. I find ChatGPT can make mistakes when it comes to the wider context, which I guess coudl be a downside to me going section by section. I feel the advantages are its less effort for me to understand the changes and I can really focus on proof reading due to taking it on as lots of small tasks. 


## AI for image creation -❓
Probably my favourite part. I'm paying for ChatGPT so I get credits for image creation. [Under the hood ChatGPT uses DALL-E](https://help.openai.com/en/articles/8932459-dall-e-in-chatgpt) for image creation. I ask it `I want an illustration for a blog post I'm writing "<post title>". Can it be landscape`. 

![ChatGPT interface showing a promt to create an image for this blog](/assets/img/how-i-use-ai-to-help-me-blog-as-a-dyslexic-software-engineer__image-creation--inline-img.webp)

It can take quite a few back and forths to get the illustraion I want, especially if its trying to put text into the image. Once I'm happy with the image I get a couple of smallers sizes created. One for OG Image and one for my posts "featured image". I always commit these and the original image into my repo just inacse I need to generate some other sizes in the future.

There are 11ty tools that can create other image formats as part of the build. I'll likely use them in the future but for now its very little effort for ChatGPT to help me do this.


## Conclusion -❓
This is my approach and im refining it all the time. I could probably improve it by using a VSCode extension for ChatGPT. I should really create my standard prompts as [Alfred Text Expanders](https://www.alfredapp.com/help/features/snippets/) which would be a nice little reduction in manual tasks.

<IS AI GOOD FOR THE WORLD???>


If you have any comments/feedback/questions on this article please get in touch! I'd love to how you use AI to help you carry out tasks.