# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Duc-Anh Hoang

Time spent: 4 hours spent in total

Link to project: https://glitch.com/edit/#!/festive-protective-blarney

Link to the demo website: https://festive-protective-blarney.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

The pattern is randomized for every new game.

![](https://i.imgur.com/OvjCND8.gif)

Player has 3 tries and the patterns play faster as the game goes on.

![](https://i.imgur.com/rGd3hrs.gif)

Player has limited time to complete the pattern.

![](https://i.imgur.com/nWIX1Qb.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

stackoverflow.com, YouTube, and my own code from the past.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I think the most challenging part of the pre-work was creating a countdown that kept track of how much time a user had left for each turn. Since I was unfamiliar with both setInterval() and clearInterval() functions, I spent some time looking through their documentation to get a sense of how they are implemented. I also spent time looking through tutorials online to familiarize myself with different implementations of a timer in Javascript. However, when I tried to code my timer, my clearInterval() did not really work as I intended because the timer was counting down to negative values and did not reset or stop when needed. I figured that the potential bug had to do with the function not being placed in the right locations, so I decided to draw a flowchart of the entire game process to get a solid understanding of how users’ actions would affect elements on the website. From my flowchart, I could pinpoint where the timer should be reset and where the timer should be stopped, such as when users clicked stop, or when the next turn came. To facilitate the debugging process, I also tried to strategically put in console.log statements to see if clearInterval() had been placed correctly in the flow of the entire code. After a little bit of debugging and looking back at the flowchart, I finally created a countdown that worked.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Sometimes when I added a few lines of codes to the program, I ended up messing up the entire workflow of the website, and I had to go through the entire program to see where the error was. I found this process to be very time-consuming and not efficient as a coding practice. I wonder if there are ways to improve the code maintainability of our website with JavaScript. I have had some experience using ReactJS and it was definitely a better experience in terms of code maintainability. In addition, as I implemented more features, I found it hard to keep track of which elements on the website to be modified to correspond with users’ interactions with my new features. My question is that what are the effective ways to modify existing code each time you implement a new feature that will impact the elements of the page.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I would definitely make the game more interactive. I am thinking of implementing additional features such as letting the user choose how many buttons they want, the number of tries that they will have, and the level of difficulty that they want. In addition, I also want to save users’ data so I can count each users’ scores and create a leaderboard of best players’ scores to add an element of competitiveness to the game. I also want to make the audio correspond to the instruments that will be shown when a user clicked on a button.

I would also want to improve upon the UI/UX of the game. I’m thinking of using pixels art to make the game more JRPG like. A user can create their own avatar, and the avatar will move around to press on the buttons. I think this will definitely make the game more captivating to play.

In addition, I would also want to clean up the code by adding docstrings and comments for each function, and I would also want to limit the use of global variables since it’s not efficient coding.




## Interview Recording URL Link

<a href="https://www.youtube.com/watch?v=Vxap9Xf8RpQ" target="_blank"> My 5-minute Interview Recording </a>


## License

    Copyright [Duc-Anh Hoang]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.