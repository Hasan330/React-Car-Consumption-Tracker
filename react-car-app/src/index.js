import React                            from 'react';
import ReactDOM                         from 'react-dom';
import promise                          from 'redux-promise';
import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ListOwners        			          from './pages/ListOwners';
import ShowOwner                        from './pages/ShowOwner';
import AddOwner                         from './pages/AddOwner';
import HomePage        		              from './pages/HomePage';

import reducers                         from './reducers';
// import registerServiceWorker            from './registerServiceWorker';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	 <Provider store={createStoreWithMiddleware(reducers)}>
  	<BrowserRouter>
    	<div>
    		<Switch>
          <Route path="/owners/new"      component={AddOwner} />
   				<Route path="/owners/get/:id"  component={ShowOwner} />
          <Route path="/owners/"         component={ListOwners} />
   				<Route path="/"                component={HomePage} />
   			</Switch>
    	</div>
   </BrowserRouter>
  </Provider>

 , document.getElementById('root'));


// registerServiceWorker();