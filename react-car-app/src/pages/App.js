import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import Owner from '../containers/listOwners';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Car App</h1>
        </header>
        <p className="App-intro">
          Welcome to the react car app
        </p>
          <Owner />
      </div>
    );
  }
}

export default App;