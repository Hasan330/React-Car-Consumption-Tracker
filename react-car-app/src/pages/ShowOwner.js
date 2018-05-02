import React, { Component } from 'react';
import Header               from '../components/header'
import OwnerDetails         from '../containers/owner-details'

import '../App.css';

class ShowOwner extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <OwnerDetails />
      </div>
    );
  }
}

export default ShowOwner;