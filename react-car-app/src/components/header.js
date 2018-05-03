import logo  from '../logo.svg'; 
import React from 'react';

const Header = () => (
	       <div>
	               <header className="App-header">
                               <img src={logo} className="App-logo" alt="logo" />
                               <h1 className="App-title">React Car App</h1>
                        </header>
                </div>
        )

export default Header;