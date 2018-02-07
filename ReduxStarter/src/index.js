import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// add in api key below, and uncomment below line
// const API_KEY = '';

// Creates a new component.  This component should produce some html

const App = function() {
  return (
    <div> 
      <SearchBar /> 
    </div>
  );
}

// Take this component's generated HTML and put it on the page

ReactDOM.render(<App />, document.querySelector('.container'));