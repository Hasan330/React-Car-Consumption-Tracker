import React, { Component } from 'react';
import OwnerList            from '../containers/owner-list';
import Header               from '../components/header'

import '../App.css';

class ListOwners extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <OwnerList />
      </div>
    );
  }
}

export default ListOwners;