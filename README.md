# Tic Tac Toe Game

This repository contains a simple browser-based Tic Tac Toe game implemented using HTML, CSS, and JavaScript. The game features an interactive interface for two players to take turns making moves, a scoreboard to track wins for both players, and an option to toggle background music.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- - [Interactive Gameplay](#interactive-gameplay)
  - [Background Music](#background-music)
  - [Scoreboard](#scoreboard)
- [Usage](#usage)
- [Game Logic](#game-logic)
- - [Player Turns](#player-turns)
  - [Winning Conditions](#winning-conditions)
  - [Restarting the Game](#restarting-the-game)

## Introduction

The Tic Tac Toe Game project offers a browser-based experience where two players can play the classic Tic Tac Toe game. The game features interactive squares for making moves, a visual representation of X and O symbols, a scoreboard for tracking player wins, and the ability to toggle background music.

## Features

### Interactive Gameplay

Players can take turns making moves by clicking on the available squares on the game board. The game enforces player turns, allowing only one player to move at a time. Players can place either an "X" or an "O" on the board.

### Background Music

The game offers background music that can be turned on and off. Clicking the sound icon toggles the music, enhancing the gaming experience.

### Scoreboard

A scoreboard is displayed on the page, showing the number of wins for both the "X" and "O" players. The scoreboard updates automatically as players win rounds.

## Usage

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser to start the game.
3. Take turns with another player, clicking on available squares to place X and O symbols.
4. The scoreboard at the top of the page displays the wins for each player.
5. Toggle the background music on and off by clicking the sound icon.

## Game Logic

### Player Turns

Players take turns making moves by clicking on the available squares. The game ensures that only one player can make a move at a time. If the "X" player makes a move, it switches to the "O" player's turn, and vice versa.

### Winning Conditions

The game checks for winning conditions after every move. If three identical symbols (X or O) align either horizontally, vertically, or diagonally, the game declares a winner and displays a line indicating the winning combination.

### Restarting the Game

After a round is completed (either a player wins or the board is filled), the game restarts after a short delay. All squares are cleared, and the player turn is reset to the "X" player.

Feel free to explore the JavaScript code to understand how the Tic Tac Toe game is implemented.
