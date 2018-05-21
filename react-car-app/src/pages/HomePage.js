import React, { Component } from 'react';
import Header               from '../components/header'

import {Link}                from 'react-router-dom';

import '../App.css';

class HomePage extends Component {

	toOwnersPage(){
		return(
			<Link className='btn btn-primary' to={`/owners/`}>
				Owners List	
			</Link>
		)	
	}

  render() {
    return (
      <div className="App">
          <Header />
          {this.toOwnersPage()}
      </div>
    );
  }
}

export default HomePage;