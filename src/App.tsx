import React from 'react';
import './App.css';
import InputField from './components/InputField';

// the colon is used to separate the "thing" from what the "thing" is defined as (in this case, a react component)

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
}

export default App;
