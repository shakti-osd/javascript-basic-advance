/* Render Props Pattern*/

/*The render props pattern is a technique used in React, a JavaScript library for building user interfaces. It involves passing a function as a prop to a component, allowing that component to control what gets rendered in a part of the UI. The term "render prop" is short for "rendering prop."

In the render props pattern, a component receives a function as a prop, and instead of defining its own rendering logic, it calls that function with the necessary data and lets it determine what to render. This approach promotes reusability and composability, as the parent component can decide how to render its children based on its own logic.

Here's a simple example to illustrate the concept of render props in React: */

// ParentComponent.js
import React from 'react';

class ParentComponent extends React.Component {
  render() {
    const data = "Hello from ParentComponent!";
    
    // Using render prop
    return (
      <div>
        <h1>ParentComponent</h1>
        <ChildComponent render={(content) => <p>{content}</p>} />
      </div>
    );
  }
}

// ChildComponent.js
import React from 'react';

class ChildComponent extends React.Component {
  render() {
    const { render } = this.props;

    return (
      <div>
        <h2>ChildComponent</h2>
        {/* Calling the render prop function */}
        {render("Content passed from ChildComponent")}
      </div>
    );
  }
}

export default ParentComponent;
// In this example, the ChildComponent takes a render prop, which is a function. The ParentComponent defines how the content should be rendered by passing a function to ChildComponent. This way, the rendering logic is delegated to the parent component, providing flexibility and reusability.