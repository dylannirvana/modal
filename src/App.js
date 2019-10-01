import React from 'react';
import modal from './modal.mov';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <video controls autoplay src={modal}></video>
        <p>
          A spec sheet opens in a modal window on the Endless Aisle.
        </p>
       
      </header>
    </div>
  );
}

export default App;
