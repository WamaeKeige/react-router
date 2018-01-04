import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class Topics extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Topics Page</h1>
      </header>
      <h1> This are a Topics </h1>
      </div>
    );
  }
}
export default Topics;
