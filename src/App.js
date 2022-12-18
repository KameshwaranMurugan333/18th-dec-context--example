import React from 'react';
import './App.css';
import { FancyBorder } from './FancyBorder';
import StateUsage from './StateUsage';

function App() {

  return (
    <div className="App">
      <FancyBorder color="red">
        <p>I Need Fancy Border</p>
      </FancyBorder>
    </div>
  );
}

export default App;
