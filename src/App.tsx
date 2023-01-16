import React from 'react';
import {Responsive} from 'react-mod';
import './App.css';

function App() {
  return (
    <div className="App">
      <Responsive.Mobile>only appears on mobile</Responsive.Mobile>
      <Responsive.Desktop>only appears on desktop</Responsive.Desktop>
    </div>
  );
}

export default App;
