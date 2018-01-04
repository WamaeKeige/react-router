import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Router App</h1>
        </header>
        <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
