import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise                          from 'redux-promise';


import reducers                         from './reducers';
import ListOwners        			          from './pages/ListOwners';
import ShowOwner        		            from './pages/ShowOwner';
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
   				<Route path="/owners/:id" component={ShowOwner} />
   				<Route path="/owners/"    component={ListOwners} />
   			</Switch>
    	</div>
   </BrowserRouter>
  </Provider>

 , document.getElementById('root'));


// registerServiceWorker();