# Jack in the Browser Homework

## Overview

In this assignment, you will create a web application that mimics a "Jack in the Box" toy, but with a twist—instead of turning a crank, users will click a button. Your task is to track the number of button clicks and reveal a surprise through CSS styling after a certain number of clicks.

[🔎See the Example Here🔍](https://purple-sand-0cee30710.4.azurestaticapps.net/jack-in-browser/)

*You can find more details about the assignment on Blackboard, including the rubric and hints.*

## Learning Objectives (From Lesson: JavaScript Part 2 & 3)

- Understand and manipulate the Document Object Model (DOM).
- Implement event listeners to handle user interactions.
- Dynamically update HTML content with JavaScript.
- Apply conditional logic in JavaScript to change CSS styles.

## Starter Code

You have been provided with starter files that include the basic structure for the HTML (`index.html`), CSS (`style.css`), and JavaScript (`script.js`). 

Some parts of the code have been intentionally left incomplete for you to implement.

## Assignment Requirements

1. **Track Clicks**: Implement functionality to track the number of times the button is clicked.
2. **Display Click Count**: Display the current click count on the page.
3. **Conditional Surprise**: After a predetermined number of clicks, change the styling of the page or an element to reveal a "surprise" using CSS.


## Instructions

### HTML (`index.html`)

1. Add an element (e.g., `<span>`, `<div>`) to display the click count.
2. Ensure the button for clicking is correctly calling the `trackClicks()` function on click.

### CSS (`style.css`)

- The `.surprise` class has been defined for you. Feel free to explore and add more styles to enhance the surprise effect.

### JavaScript (`script.js`)

1. Modify the `trackClicks()` function to increment the click count and update the displayed click count on the page.
2. Implement a condition to check if the click count reaches the "surprise" threshold. Upon reaching the threshold, apply the `.surprise` class to the designated element.

## Hints

- Be sure to read any code comments in the starter files for guidance.
- You do not need to modify the CSS file unless you want to add extra styling for the "surprise."
- Use developer tools in your browser to debug and test your JavaScript code.

Good luck, and have fun with this assignment!

## Requirements & Rubric

### Functionality (70 Points Total)

- **Click Counter Update (20 Points):** Each button click increments and displays the updated number of clicks. Requires modifications to `script.js` and `index.html`.
- **Display Clicks Value (20 Points):** The current value of the "clicks" variable is displayed on the page, necessitating changes to `script.js` and `index.html`.
- **Conditional Surprise (30 Points):** Implement logic so that reaching a certain number of clicks applies a CSS class named "surprise", changing the page's appearance. This involves updates to `script.js`.

### Creativity and Completeness (30 Points Total)

- **Surprise Variable (10 Points):** Creation of a "Surprise" variable in `script.js` that determines the number of clicks needed to trigger the surprise.
- **Surprise Display (20 Points):** Effective use of the "surprise" CSS class to visibly alter the page, rewarding creative and engaging implementations.

### Extra Credit (10 Points)

- Implement a random number for the "surprise" threshold using `Math.random()`, demonstrating an understanding of JavaScript's random number generation.

## Submission Instructions

1. **GitHub Classroom:** Fork your copy of the starter code.
2. **Develop:** Work on your assignment in GitHub Codespaces or your local environment.
3. **Commit:** Ensure all your changes are committed according to the provided instructions.
4. **Submit:** Paste the link to your GitHub repository in Blackboard before the deadline.

## Deadline

Submit your assignment by **Monday, April 8th @ 11:59 PM**.

## Tips for Success

- **Read Code Comments:** The starter code includes comments to guide your development.
- **Console Logging:** Use `console.log()` to track your progress and debug your JavaScript code.
- **CSS Customization:** While the provided CSS meets the basic requirements, you're encouraged to experiment and enhance the page's visual appeal.
- **Commit Frequently:** Regularly commit your changes to avoid losing work and to keep track of your progress.

## Need Help?

If you run into any issues or have questions, don't hesitate to reach out via email or office hours.

---

## Handy Tags, CSS Rules, and JavaScript Snippets

### HTML Tags to Remember

| Tag        | Description                           | Example                                 |
|------------|---------------------------------------|-----------------------------------------|
| `<a>`      | Creates a hyperlink to another page.  | `<a href="https://example.com">Visit!</a>` |
| `<img>`    | Embeds an image in your webpage.      | `<img src="image.jpg" alt="A cool image">` |
| `<ul>`, `<li>` | Creates a list of items.             | `<ul><li>Item 1</li><li>Item 2</li></ul>`   |
| `<div>`    | Defines a division or section.        | `<div>Content here</div>`               |

### CSS Rules to Spice Up Your Site

| Rule              | Description                                | Example                               |
|-------------------|--------------------------------------------|---------------------------------------|
| `font-family`     | Changes the font of your text.             | `font-family: 'Arial', sans-serif;`   |
| `margin`, `padding` | Controls the space around and inside elements. | `margin: 10px; padding: 20px;`        |
| `border`          | Adds a border around elements.             | `border: 2px solid #000;`             |
| `background-color`| Sets the background color of elements.     | `background-color: #ffcc00;`          |

### JavaScript Snippets for Interactivity

- **Show an Alert**:
  - `alert('Welcome to CS 140 Web Development!');`
- **Change Text Content**:
  - Example: `document.getElementById('exampleId').textContent = 'Hello, CS 140!';`
- **Add a Click Event**:
  - Example:
    ```javascript
    document.getElementById('clickMeButton').addEventListener('click', function() {
        alert('You clicked the button!');
    });
    ```

*This document was initially drafted with the help of ChatGPT. It has been edited and customized to fit our class's needs.*
