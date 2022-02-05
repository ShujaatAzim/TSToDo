import React from 'react';
import './App.css';

// the colon is used to separate the "thing" from what the "thing" is defined as (in this case, a react component)

const App: React.FC = () => {
  return (
    <div className="App">
      Hello World! My name is Shu :)
    </div>
  );
}

export default App;
