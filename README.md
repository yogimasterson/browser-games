# Specifications Generic Platform Game

## General

- [X] Artifact produced is a fork of the browser-games repo.
- [X] Variables, functions, files, etc. have appropriate and meaningful names.
- [X] HTML, CSS, and JS files are well formatted with proper spacing and indentation.
- [X] There is a clear separation of game logic code from view/rendering code.
- [X] All major features are added via pull requests with a clear description and concise commit messages.
- [X] The artifact produced is properly licensed, preferably with the MIT license.

##Generic Platform Game

- [X] Game can be found at public/platform.html
- [X] Game is playable by one player
- [X] Game follows rules established in tutorial
- [X] Game page is linked from public/index.html

##Stretch

- Design and build your own platform-like game. What else can you build with the techniques you came up with in building the Generic Platform Game?

- [ ] Game has its own HTML, CSS, and JS
- [ ] Game is playable
- [ ] Game page is linked from public/index.html

# SimonClicksGame
A Simon Game for FreeCodeCamp

## User stories to fill: 

- [x] Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

- [x] User Story: I am presented with a random series of button presses.

- [x] User Story: Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.

- [x] User Story: I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.

- [x] User Story: If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.

- [x] User Story: I can see how many steps are in the current series of button presses.

- [x] User Story: If I want to restart, I can hit a button to do so, and the game will return to a single step.

- [x] User Story: I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.

- [x] User Story: I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.

# Browser Games

A collection of games to play in a web browser. See the full list of games in the [games.md](games.md) file.

## Installation and Setup

Clone the repo, install npm dependencies, and start the server:

```shell-session
$ git clone git@github.com:GuildCrafts/browser-games.git
$ cd browser-games
$ npm install

...

$ npm start
...
Starting up http-server, serving ./public
Available on:
  http://127.0.0.1:4321
  http://10.0.1.11:4321
```

Then open `http://localhost:4321/` in your browser of choice and play away!
