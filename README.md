# 🎮 Catch the Falling Objects

A browser-based arcade game built with **HTML, CSS, and JavaScript**. The player controls a basket and catches falling objects to increase their score while managing a limited number of lives.

The game features real-time movement, collision detection, score tracking, a life system, increasing difficulty, and a restart mechanism.

## ✨ Features

* 🎯 **Object Catching** — Catch falling objects to increase your score.
* 🕹️ **Keyboard Controls** — Move the basket using the `←` and `→` arrow keys.
* 🖱️ **Mouse Controls** — Move the basket by moving the mouse inside the game area.
* ⭐ **Score System** — Each successfully caught object increases the score.
* ❤️ **Life System** — Start with 3 lives; missing an object costs one life.
* 💥 **Collision Detection** — Detects when falling objects reach the basket.
* 📈 **Dynamic Difficulty** — Falling objects gradually become faster as the game progresses.
* 🔄 **Restart Functionality** — Restart the game after Game Over.
* ⚡ **Real-Time Game Loop** — Uses `requestAnimationFrame()` for continuous game updates.

## 🛠️ Technologies

| Technology     | Purpose                                                            |
| -------------- | ------------------------------------------------------------------ |
| **HTML5**      | Game structure and UI                                              |
| **CSS3**       | Styling and game layout                                            |
| **JavaScript** | Game logic, controls, collision detection, scoring, and difficulty |

## 🎮 How to Play

1. Open the game in your browser.
2. Use the **Left (`←`)** and **Right (`→`)** arrow keys to move the basket.
3. Alternatively, use your **mouse** to control the basket.
4. Catch the falling objects to increase your score.
5. Missing an object reduces your remaining lives.
6. The game ends when all 3 lives are lost.
7. Click **Restart** to start a new game.

## 📂 Project Structure

```text
catch-the-falling-objects/
│
├── index.html      # Game interface and structure
├── game.js         # Game logic and functionality
└── README.md       # Project documentation
```

## ⚙️ Game Logic

The game uses JavaScript to manage:

* Player movement and boundary restrictions
* Random object generation
* Falling object animation
* Basket-object collision detection
* Score and life updates
* Game state management
* Increasing object speed
* Game Over and restart functionality

The game continuously updates object positions through a `requestAnimationFrame()` loop, while new objects are generated at regular intervals.

## 🚀 Getting Started

### Run Locally

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/catch-the-falling-objects.git
```

Navigate to the project directory:

```bash
cd catch-the-falling-objects
```

Then open `index.html` in your browser.

### GitHub Pages

The project can also be deployed using **GitHub Pages**, allowing the game to be played directly from a web browser without installing anything.

## 🎯 Project Purpose

This project was created to practice and demonstrate fundamental **front-end web development and JavaScript programming concepts**, including DOM manipulation, event handling, animation loops, collision detection, arrays, functions, and game-state management.

