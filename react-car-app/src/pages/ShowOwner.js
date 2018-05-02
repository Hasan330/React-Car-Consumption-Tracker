import React, { Component } from 'react';
import Header               from '../components/header'
import OwnerShow            from '../containers/owner-show'

import '../App.css';

class ShowOwner extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <OwnerShow />
      </div>
    );
  }
}

export default ShowOwner;