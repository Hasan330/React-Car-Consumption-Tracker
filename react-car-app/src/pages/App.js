import React, { Component } from 'react';
import logo                 from '../logo.svg';
import OwnerList                from '../containers/owner-list';

import '../App.css';



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
          <OwnerList />
      </div>
    );
  }
}

export default App;