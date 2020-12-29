---
layout: layout-post.hbs
title: How to create a simple CSS loading spinner & make it accessible
description: >-
  A step-by-step tutorial for how to create an animated single element CSS
  loading spinner that is accessible!
date: '2018-04-24T19:31:01.112Z'
pubdate: '24/4/2018'
tags: posts
categories: []
keywords: []
---

![Photo by NeONBRAND on Unsplash](/assets/img/1__RR8oubeQOm63YN90Uth0CA.jpeg)

Back when I started web development a loading spinner used to be something that I’d use an animated `.gif` for.

![An classic loading spinner that would have been a animated .gif](img/1__QiE4__0MPslYPvx2Fit1NIQ.jpeg)
An classic loading spinner that would have been a animated .gif

Since [CSS animations are now so well supported](https://caniuse.com/#feat=css-animation) using an animated `.gif` for a loading spinner is now no longer necessary. The mighty Developer [Jon Pearse](https://jonpearse.net/), showed me how to make a CSS loading spinner so I thought I’d share his technique using a flexible SCSS mixin step by step. This spinner will work in all modern browsers as well as in IE10+. I am presuming here you have used CSS animations before for this tutorial.

## Creating the CSS spinner markup

Our spinner is going to be a simple circle spinning around it’s own centre. The spinner markup is just a single `div`. Our spinner is going to be a pseudo element, `::before` (you could use `::after` as well) of our `div`.

<div class="spinner"></div>

### CSS for static spinner

We’ll start by styling the spinner itself before animating it.

```
.spinner {
    // The height here is just for demo purposes
    height: 100vh;
    position: relative;

    &::before {
        border: solid 3px #eee;
        border-bottom-color: #EF6565;
        border-radius: 50%;
        content: "";
        height: 40px;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 40px;
    }
}
```

What we’ve done here;

*   Created an absolutely positioned circle. The circle is created by giving the element the same `width` & `height` and then adding `border-radius: 50%`.
*   Gave it a border where one of the borders is a different colour.
*   Positioned the spinner centrally on both horizontally and vertically.

### Animating the spinner

We’re going to use a CSS animation to make our circle spin around. I personally find the animation syntax tricky to remember so I used [MDN as my go-to reference guide](https://developer.mozilla.org/en-US/docs/Web/CSS/animation).

```
@keyframes spinner {
    0% {
        transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
         transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
}

.spinner {
    // The height here is just for demo purposes
    height: 100vh;
    opacity: 1;
    position: relative;
    transition: opacity linear 0.1s;

    &::before {
        animation: 2s linear infinite spinner;
        border: solid 3px #eee;
        border-bottom-color: #EF6565;
        border-radius: 50%;
        content: "";
        height: 40px;
        left: 50%;
        opacity: inherit;
        position: absolute;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        transform-origin: center;
        width: 40px;
        will-change: transform;
    }
}
```

Now we have added;

*   A simple CSS animation keyframe that rotates the spinner all the way around.
*   The animation transforms the spinner so that is rotates around over 2 seconds. The easing value of `linear` ensures that the animation is a smooth continuous rotation. You’ll notice the keyframes also include `transform: translate3d(-50%, -50%, 0)` this is because this is being used to centrally position the spinner. Since the animation overwrites the default `transform` values this is necessary. Having the rotation as the second transform value is also needed for the animation to work.
*   By using `will-change: transform;` we letting the browser know that this element will be transformed and therefore optimising the animation.
*   I’ve added `opacity` and `transition` to the containing element so that when your content has been loaded you can fade out the spinner.

A minimal Codepen demo of the CSS animated loading spinner

Now we have a nice simple CSS loading spinner! Whoop whoop. Where is the SCSS mixin I hear you say?! We’ll sort that out next.

## Creating the loading spinner SCSS mixin

The objective with this mixin is to create a flexible, easy to implement and DRY loading spinner styles. The mixin has three arguments;

*   `$activeColor`: The color for the one border that has the different color to the other three.
*   `$selector`: The pseudo element where the spinner will be applied.
*   `$time`: The duration of the animation. How long it takes for the spinner to do one full rotation.

I’ve ordered these arguments in order of what I think needs changing the most often. If you can I’d reduce the number of arguments but I would not recommend having more than three for maintainability.

```
@mixin loading-spinner($activeColor: "#EF6565", $selector: "&::before", $time: 1.5s) {
    // Animation Keyframes
    @keyframes spinner {
        0% {
            transform: translate3d(-50%, -50%, 0) rotate(0deg);
        }
        100% {
             transform: translate3d(-50%, -50%, 0) rotate(360deg);
        }
    }

    // These styles are being applied the element
    // where we include the mixin. I'd recommend for
    // maintainability to keep these as minimal as possible.
    position: relative;

    // Styles to fade out spinner when loaded
    &.-loaded {
        opacity: 0;
        transition: opacity linear 0.1s;
    }


    // Spinner
    #{$selector} {
        animation: $time linear infinite spinner;
        border: solid 3px #eee;
        border-bottom-color: #{$activeColor};
        border-radius: 50%;
        content: "";
        height: 40px;
        left: 50%;
        opacity: inherit;
        position: absolute;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        transform-origin: center;
        width: 40px;
        will-change: transform;
    }
}
```

## Making the loading spinner accessible

A loading spinner is a visual indication that something is happening on your webpage. With a few lines of JavaScript and a little extra HTML markup we can ensure that users that have visual impairments are informed that something is happening and when the task has been completed.

The mighty [Heydon Pickering wrote an article on how to create an accessible loading animation](https://www.smashingmagazine.com/2015/04/its-alive-apps-that-feed-back-accessibly/). I’m going to show you how to apply this to our CSS loading spinner.

First we need to adjust our markup.

```
<div class="loading-spinner js-loading-spinner" role="alert" aria-live="assertive">
    <p class="vh js-loading-spinner-copy">Content is loading...</p>
</div>
```

We have added;

*   New HTML attributes, `role="alert"` & `aria-live=”assertive".` These attributes are used to communicate time sensitive changes and will create an accessible alert event. Since `aria-live=”assertive"` is being used the announcement will happen immediately. These attributes are very similar, some screen readers only support one so by adding both we are providing better support.
*   Please note: The element with the `role` & `aria-live` attributes needs to exist in the DOM before the spinner is required. The change or addition of content inside that element is what triggers the screen reader notification, not the addition of those attributes on the element.
*   The `<p>` is visually hidden and contains text that will be read to visually impaired users about what is going on.
*   I’ve added the classes `.js-loading-spinner` & .`js-loading-spinner-copy`. This is a best practice I follow so that these classes are _only_ used for selecting an element with JavaScript and NOT for styling purposes

Now we need to write a little JavaScript to updated our copy when the content has loaded. When this happens it will be announced to screenreaders immediately. We will check if the class `-loaded` has been added to the loading spinner. This way we can visually fade out the spinner with the same class.

```
const spinner = document.querySelector('.js-loading-spinner');
const copy    = spinner.querySelector('.js-loading-spinner-copy');

if(el.spinner.classList.contains("-loaded")) {
    copy.innerHTML = "Content has loaded.";
}
```

It is that simple! Now you have a flexible SCSS mixin to create an animated loading spinner. With 5 lines of JavaScript, a couple of HTML attributes and some copy we’ve been able to ensure that as many users as possible will be informed about your content loading and when it is loaded.

Codepen demo of accessible, single element CSS loading spinner

Please note in the Codepen demo I have added a couple of things;

*   I’m using `.-paused` instead of `.-loaded` since my demo pauses the spinner rather then loading in content.
*   When the spinner is paused I have lowered the opacity to `0.2` but not hidden it completely just for demo purposes
*   `animation-play-state: inherit`: When I added the class `.-paused` to the parent element my spinner’s animating will be paused. I added this so that if the spinner gets annoying you can pause it.

## Thanks for reading!

Any questions/comments/bugs/feedback please get in touch! Thanks for reading. If you have any examples of spinners you’ve made after reading this article I’d love to see them!

Massive thanks to the dev guru [Jon Pearse](https://jonpearse.net/) for showing me this technique. Also to [Léonie Watson](https://tink.uk/) & [Cliff Williams](https://twitter.com/issunboshi) for taking the time to review the article!
