import React from 'react';
import ReactDOM from 'react-dom';
import promise                          from 'redux-promise';
import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch }  from 'react-router-dom'


import './styles/index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<App />


 , document.getElementById('root'));


registerServiceWorker();
