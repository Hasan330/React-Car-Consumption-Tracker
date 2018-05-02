import React, { Component } from 'react';
import Header               from '../components/header'
import OwnerShow            from '../containers/owner-show'

import '../App.css';

class ShowOwner extends Component {
  render() {
  	console.log('Params passed to ShowOwner page are: ', this.props.match.params)
    return (
      <div className="App">
          <Header />
          <OwnerShow  {...this.props}/>
      </div>
    );
  }
}

export default ShowOwner;