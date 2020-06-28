import React from 'react';
import logo from './logo.svg';
import './App.css';
import DjangoApiFetch from './components/DjangoApiFetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DjangoApiFetch/>
      </header>
    </div>
  );
}

export default App;
