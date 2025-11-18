<div align="center">
    <h1>Fizz Buzz CLI - JavaScript</h1>
</div>

## 💡 Description

An interactive Command Line Interface (CLI) application that implements the classic Fizz Buzz algorithm. This project demonstrates a modular JavaScript structure, asynchronous operations, and robust user input validation.

## 🚀 Features

* **Interactive Menu System**: A main menu loop that allows users to choose between checking a single number, printing a sequence, or exiting.
* **Two Modes of Operation**:
    1.  **Check a Number**: Instantly checks if a specific number results in "Fizz", "Buzz", or "FizzBuzz".
    2.  **Print List**: Generates a sequence from 1 to *n* with a visual delay effect.
* **Robust Input Validation**:
    * Prevents empty inputs or inputs with leading/trailing spaces.
    * Ensures menu selection is strictly available in options.
    * Validates that numerical inputs are positive or more than zero integers.
* **Navigation Commands**: Specific keywords (`back` and `exit`) are available in all prompts to return to the previous menu or quit the application immediately.
* **Modular Architecture**: Code is split into logic, validations, errors, and utilities for better maintainability.

## 📋 Prerequisites

To run this application, you need a JavaScript runtime that supports the global `prompt()` function and ES Modules, such as **Bun.js**.

* [Bun](https://bun.sh/) (Recommended)

## 🛠️ Installation & Usage

1.  **Clone the repository**
    ```bash
    git clone https://github.com/aziz-prasetyo/fizz-buzz-javascript.git
    cd fizz-buzz-javascript
    ```

2.  **Run the application**
    ```bash
    bun main.js
    ```

## 📂 Project Structure

```text
.
├── main.js                 # Entry point, menu logic, and game loop
└── lib/
    ├── errors.js           # Error handling and printing utilities
    ├── utils.js            # Helper functions (e.g., sleep/delay)
    └── validations.js      # Regex-based input validation logic
```

## ⁉️ Having Issues?

If you run into any problems during setup or have questions, please feel free to [open an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue) on this GitHub repository. I'll do my best to help you out.

---

<div align="center">
    <p>Muhammad Aziz Prasetyo @ 2025</p>
</div>
