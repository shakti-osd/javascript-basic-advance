/* 
https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a



The critical rendering path refers to the sequence of steps browsers take to convert HTML, CSS, and JavaScript into rendered pixels on the screen. It's crucial for optimizing the loading and rendering performance of web pages, especially for delivering content to users quickly.

The critical rendering path includes the following key steps:

HTML Parsing and DOM Construction:

The browser parses the HTML document and constructs the Document Object Model (DOM).
It identifies and processes elements and their relationships.
CSS Parsing and Style Computation:

CSS files are parsed, and the browser computes the styles for each element.
It determines how each element should be presented visually.
Layout:

The browser calculates the position and size of each element on the page.
It determines the overall layout of the page based on styles and content.
Painting:

The browser paints pixels on the screen according to the calculated layout and styles.
It renders the visual representation of the page.
JavaScript, when encountered in the HTML document, can affect the critical rendering path. The placement and execution of JavaScript can impact the time it takes for a page to become interactive and visible to the user.

When JavaScript is encountered:

Blocking Script Execution:

By default, JavaScript execution blocks HTML parsing. The browser stops parsing the HTML until the script is downloaded, executed, and any modifications to the DOM are applied.
async Attribute:

With async, the script is fetched asynchronously, allowing HTML parsing to continue without waiting for the script to download. However, the script will execute as soon as it's downloaded, potentially before the HTML parsing is complete.
defer Attribute:

With defer, the script is also fetched asynchronously, but it won't execute until the HTML parsing is complete. It ensures that the script is executed in order after the HTML document is fully parsed.
Optimizing the critical rendering path involves minimizing render-blocking resources, ensuring efficient use of CSS and JavaScript, and employing techniques like asynchronous loading (async) or deferred loading (defer) to enhance page loading performance.

In the context of the previous discussion, choosing between async and defer for script loading is one aspect of optimizing the critical rendering path, as it affects how JavaScript interacts with the HTML parsing and rendering process.

*/ 