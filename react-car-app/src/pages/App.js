import React, { Component } from 'react';
import logo                 from '../logo.svg';
import OwnerList            from '../containers/owner-list';
import Header               from '../components/header'

import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <OwnerList />
      </div>
    );
  }
}

export default App;