import React from 'react';
import ReactDOM from 'react-dom';

// Creates a new component.  This component should produce some html

const App = function() {
  return <div> HI </div>;
}

// Take this component's generated HTML and put it on the page

ReactDOM.render(<App />, document.querySelector('.container'));