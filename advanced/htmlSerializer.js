// If you're looking to implement an HTML serializer in JavaScript, you might want to convert JavaScript objects into HTML strings. Here's a simple example of an HTML serializer:

function serializeToHTML(tag, attributes, content) {
  // Open tag
  let html = `<${tag}`;

  // Add attributes
  if (attributes) {
    for (let key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        html += ` ${key}="${attributes[key]}"`;
      }
    }
  }

  // Close start tag or add self-closing slash
  html += content ? `>${content}</${tag}>` : '/>';

  return html;
}

// Example usage:
const divAttributes = { id: 'myDiv', class: 'container' };
const divContent = 'Hello, World!';

const serializedDiv = serializeToHTML('div', divAttributes, divContent);
console.log(serializedDiv);
// Output: <div id="myDiv" class="container">Hello, World!</div>

// This serializeToHTML function takes a tag name, an object of attributes, and content as parameters. It then constructs and returns an HTML string for the specified tag with attributes and content.

// Note that this is a basic example, and for a more comprehensive HTML serializer, you might want to handle edge cases, escape content to prevent XSS attacks, and support nested elements and more complex structures.

// Keep in mind that if you are working with user-generated content, it's crucial to properly escape and sanitize the input to avoid security vulnerabilities. Using a dedicated library for HTML serialization, such as DOMPurify, is recommended in such cases.




// ClassName in JS
function classNames(...args) {
  let classes = [];

  args.forEach(arg => {
    if (typeof arg === 'string') {
      // Handle strings
      classes.push(arg.trim());
    } else if (Array.isArray(arg)) {
      // Handle arrays
      classes = classes.concat(classNames(...arg));
    } else if (typeof arg === 'object') {
      // Handle objects
      for (let key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          classes.push(key.trim());
        }
      }
    }
  });

  return classes.join(' ');
}

// Example usage:
const classNameString = classNames('button', 'active', ['large', 'primary'], { 'custom-class': true });
console.log(classNameString);
// Output: 'button active large primary custom-class'

