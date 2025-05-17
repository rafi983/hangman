# Frontend Mentor - Hangman game solution

This is a solution to the [Hangman game challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/hangman-game-rsQiSVLGWn). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  <!-- - [Continued development](#continued-development) -->
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- [x] Learn how to play Hangman from the main menu.
- [x] Start a game and choose a category.
- [x] Play Hangman with a random word selected from that category.
- [x] See their current health decrease based on incorrect letter guesses.
- [x] Win the game if they complete the whole word.
- [x] Lose the game if they make eight wrong guesses.
- [x] Pause the game and choose to continue, pick a new category, or quit.
- [x] View the optimal layout for the interface depending on their device's screen size.
- [x] See hover and focus states for all interactive elements on the page.
- [x] Navigate the entire game only using their keyboard.

### Screenshot

![](./docs/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: https://hangman-game-fem.pages.dev

## My process

### Built with

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mantine](https://mantine.dev/) - React component library
- [Valtio](https://valtio.dev/) - Proxy state management
- [Valtio FSM](https://github.com/valtiojs/valtio-fsm) - Reactive finite state machine library
- [Motion](https://motion.dev/) (formerly Framer Motion) - For animations
- [Howler.js](https://howlerjs.com/) - For sound effects
- [CSShake](https://elrumordelaluz.github.io/csshake/) - For shake effects
- [Stately](https://stately.ai/) - For simulating the game logic in a [state machine diagram](https://stately.ai/registry/editor/acccdd3f-c8c6-403c-8ff4-39ba5621b0fb?machineId=fc5cf591-a7d1-43b3-88b3-e5e75e277fc1&mode=design)

### What I learned

This is by far the prettiest game I've developed. Here are some of the things I've learned along the way:

- how to use Motion's `AnimatePresence` to add exit animations to components
- thinking in terms of "game UX" (vs. general website UX)
- using the finite state machine pattern for the game logic
- implementing a conditional polyfill for `Set.prototype.isSubsetOf`
- ~~vibe coding~~ pair coding with ChatGPT

Regarding that last point, I'm generally against the idea of letting AI do your coding for you, but it's actually pretty helpful for generating initial ideas and building off of those.

In my case, I didn't know where to start coding the game logic, so I asked ChatGPT about the best way to organize the logic and app state for a hangman game. It gave me a general folder structure with a `useHangman` custom hook - good enough. But then I remembered reading about **state machines** and thought it might be a good fit since the game moves through explicitly defined states (`main_menu` &rarr; `category_pick` &rarr; `playing` &rarr; `game_over`). And so this back and forth with ChatGPT helped me refine my idea into something that I could easily implement in code.

![Asking ChatGPT if implementing the game logic with finite state machines is a good idea.](./docs/asking-chatgpt-about-state-machines.png)

For the list of words, I initially planned to implement an API that returns a random word based on a given category. But I decided not to do it when I realized that one could simply check the Network tab in the browser devtools to cheat. 😈

<!-- ### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.** -->

### Useful resources

- [What is a state machine?](https://statecharts.dev/what-is-a-state-machine.html)
- [Text Stroke: Stuck In The Middle With You](https://css-tricks.com/text-stroke-stuck-middle/) - This article helped me when I was struggling to implement the outside text stroke in some of the headings. I couldn't make both gradient text and text stroke work, so I just chose a white solid fill and added the stroke for emphasis using the `paint-order` trick.
- [Outline effect to text](https://stackoverflow.com/questions/4919076/outline-effect-to-text) - This StackOverflow thread has some interesting alternatives to implementing the text outline effect. Might try them for other projects if the need arises.
- [Announcing “use-sound”, a React Hook for Sound Effects](https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/) - Stumbled upon this article while searching how to add sound effects. This is where I discovered [Howler](https://howlerjs.com/).
- [3 UNIQUE Health Bar Damage Taken Effects (Unity Tutorial)](https://www.youtube.com/watch?v=cR8jP8OGbhM) - This is where I got the inspiration for the health bar animation.
- [Converting WAV to MP3 in the terminal](https://www.christopherlovell.co.uk/blog/2016/08/16/convert-wav-mp3.html) - How to use `ffmpeg` to convert WAV, in my case to MP3 and WEBM formats.
- [Loading Polyfills Only When Needed](https://philipwalton.com/articles/loading-polyfills-only-when-needed/) - I'm using `Set.prototype.isSubsetOf` to check if all letters have been guessed. Unfortunately, this is not yet supported in some older browsers, like Safari 15 in my iPhone SE. So I use a conditional polyfill to shim the feature when necessary.
- [How to Create CSS Button Shine Effect on Hover](https://codeconvey.com/css-button-shine-effect-hover/)
- [Framer Motion Visualizer](https://framer-motion-visualizer.vercel.app/) - For testing spring transitions

## Author

- Website - [Josh Javier](https://joshjavier.com/)
- Frontend Mentor - [@joshjavier](https://www.frontendmentor.io/profile/joshjavier)
- Twitter - [@joshjavierr](https://www.twitter.com/joshjavierr)
- LinkedIn - [Josh Javier](https://www.linkedin.com/in/joshjavier/)

## Acknowledgments

I got the sound effects which are all licensed under [CC0 1.0](http://creativecommons.org/publicdomain/zero/1.0/) from Freesound:

- <a href="https://freesound.org/people/Higgs01/sounds/428156/">yay.wav</a> by <a href="https://freesound.org/people/Higgs01/">Higgs01</a>
- <a href="https://freesound.org/people/BloodPixelHero/sounds/572936/">Error</a> by <a href="https://freesound.org/people/BloodPixelHero/">BloodPixelHero</a>
- <a href="https://freesound.org/people/themusicalnomad/sounds/253886/">negative_beeps.wav</a> by <a href="https://freesound.org/people/themusicalnomad/">themusicalnomad</a>
- <a href="https://freesound.org/people/unadamlar/sounds/476178/">Correct Choice</a> by <a href="https://freesound.org/people/unadamlar/">unadamlar</a>

I'd also like to give some credit to Hangaroo for inspiring the sound and animation choices I've made for this project. I used to play it a lot when I was a kid, and it's still what comes to mind when I think of a good hangman game.
