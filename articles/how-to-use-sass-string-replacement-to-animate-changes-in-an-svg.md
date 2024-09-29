---
layout: layout-post.hbs
title: How to use Sass string replacement to animate changes in an SVG
excerpt: >-
  A step by step guide for how to use Sass to replace values in an SVG so you
  can animate it with CSS.
hideExcerptInTemplate: true
featuredImg: /assets/img/1__xDZmGL23W31oCwVl5nxogA.jpeg  
date: '2018-02-20T16:36:01.994Z'
tags: posts
categories: []
keywords: []
---

Sometimes I want to have an SVG as a URL-encoded `background-image: url(path/to/your.svg);` , often on a pseudo element ([see Taylor Hunters article about URL-encoding an SVG](https://codepen.io/tigt/post/optimizing-svgs-in-data-uris)). I love doing it this way, as it means my SVG is then inside my stylesheets and saves me an additional server request. I use Sass to run a string replacement function to edit the SVG’s code and therefore animate it. Pretty cool right?! Here’s an example of how to apply this technique to a simple SVG that has a single fill color.

Codepen example of Sass string replacement on an SVG — [https://codepen.io/stuartjnelson/full/xYOXRZ/](https://codepen.io/stuartjnelson/full/xYOXRZ/)

## What we are going to do

1.  Export & optimise the [SVG](https://hackernoon.com/tagged/svg) so it’s as small as possible
2.  Use [SVG URL-encoder](http://yoksel.github.io/url-encoder/) to encode the SVG so it can be used in your `.scss` file
3.  Use [Hugo Giraude’s](https://hugogiraudel.com/2014/01/13/sass-string-replacement-function/) string replace function to change the SVG
4.  Create a mixin to call the string replacement function and output the [CSS](https://hackernoon.com/tagged/css)

## 1. Exporting and optimising your SVG

SVGs exported from your favourite graphics editor always have a bunch of information that we won’t be needing. I personally find Adobe Illustrators SVG export the cleanest but feel free to use any editor of your choice.

I crop the Artboard to the edge of the SVG by selecting the Artboard Tool and double clicking on my SVG.

![Using the Artboard Tool to exactly crop the artboard to the graphic](/assets/img/1__CEHl6ikZih6XbOsTMf3zfw.jpeg)
Using the Artboard Tool to exactly crop the artboard to the graphic

I then want to just have a singular path as my SVG has just one fill color. I select the parent group for my SVG and convert it into a compound path using `cmd + 8` on Mac or `ctlr + 8` on Windows.

![Combining the groups/layers into a single compound path](/assets/img/1__tjOXZIf8BpLfkDr4d5lQnA.jpeg)
Combining the groups/layers into a single compound path

After exporting your SVG open it in your text editor and you should see code that looks something like this.

My SVG exported straight from Adobe Illustrator — [https://gist.github.com/stuartjnelson/dec1d06046e82fc0dc9492706c18311d](https://gist.github.com/stuartjnelson/dec1d06046e82fc0dc9492706c18311d)

### Optimising the exported SVG

This SVG isn’t as optimised as I’d like. We have a few options for optimising the SVG that are listed below.

1.  Use SVGO CLI to optimise from the command line. Check out my walkthrough on [how to setup a bash alias for SVGO CLI](https://northernbadger.co.uk/articles/optimise-svgs-using-svgo-cli-bash-function)
2.  Use Jake Archibald’s awesome in browser [SVGO GUI](https://jakearchibald.github.io/svgomg/)
3.  Manually edit the SVG using a text editor.

For a simple SVG like the one we’re using as an example I would run it SVGO GUI and then edit a few things after. I like to ensure that ViewBox is always kept when using an SVG in CSS. I have had problems in the past when the SVG gets super small and there is no `viewBox` attribute. There is an option near the bottom of SVGO GUI’s preferences list to do just this and removed the `width` and `height` attributes. See the finished SVG below!

![SVGO GUI option to keep the viewBox attribute but to remove width & height](/assets/img/1__jXnc1aYT4Xinrijub0lNzA.png)
SVGO GUI option to keep the viewBox attribute but to remove width & heightSVGO GUI optimised SVG
SVGO GUI optimised SVG that I then manually removed \`data-name\` from

## 2. Data encode the SVG so it can be used in SCSS

I don’t [base 64 encode the SVG because as Taylor Hunt points out there is no need](https://codepen.io/tigt/post/optimizing-svgs-in-data-uris) (it actually makes the SVG larger). I use Yoksel’s in browser [SVGO URL-encode](http://yoksel.github.io/url-encoder/) tool to URL-encode my SVGs. Just paste in your SVG and BOOM you get it back encoded. For step 4 you’ll just need everything inside the `url()` from the _Ready for CSS_ text.

![[Yoksel’s](http://css.yoksel.ru/) SVG URI-encode tool is free, fast and awesome](/assets/img/1__2v6vSwwNN0pchsOiD3Ss3w.png)
[Yoksel’s](http://css.yoksel.ru/) SVG URI-encode tool is free, fast and awesome

## 3. String replace function

[Hugo Giraude’s published a great article on creating a string replace function using Sass](https://hugogiraudel.com/2014/01/13/sass-string-replacement-function/). I use a simple version of his function. Please note that the string passed to the function _must_ be a string wrapped in quotation marks.

## 4. Create a function and a mixin to call the string replacement function and output CSS

I copied the encoded SVG from the encoder and put it inside a function that is responsible for replacing the fill of our SVG by calling the string replacement function. This function, `svg-color-string-modifier()` does 4 things;

1.  Checks that you have passed in an argument (you could go further to validate this but I don’t feel its necessary).
2.  It then adds quotation marks around the color argument you passed in.
3.  It then removes the hash (`#`) from the color if it has a hash in it.
4.  Finally it returns the SVG as one long string with the new fill color inserted into it.

Sass function for modifying URL-encoded SVG’s fill propertiy

I replaced the `fill="%23000000"` with `fill="%23#{$svg-color}"` on the encoded SVG. The `%23` is the ULR-encoded version of `#` symbol. The hash that you can see in the code snippet above is [sass interpolation](https://webdesign.tutsplus.com/tutorials/all-you-ever-need-to-know-about-sass-interpolation--cms-21375). Using this function we can now dynamically change the fill of our SVG!

I then create a mixin to output the `background-image` CSS.

Sass mixin to output the SVG with your desired color

Thats it. I created a working Codepen example with all the code in this article. Massive thanks to [Cliff](https://twitter.com/issunboshi) (totally awesome full stack dev) & [Taavi](http://taavetkelle.co.uk/) (wizard like UI/UX/frontend dev) for helping my improve this article. Any questions/comments/bugs/feedback please get in touch! Thanks for reading.

Codepen example of Sass string replacement on an SVG — [https://codepen.io/stuartjnelson/full/xYOXRZ/](https://codepen.io/stuartjnelson/full/xYOXRZ/)