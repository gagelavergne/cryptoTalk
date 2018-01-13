//primary location to startup redux side
//render root component to DOM -- not alot of react
//---------------------------------------------------
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import App from './components/App';
import reducers from './reducers';


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//Allows things to appear on the screen
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
   document.querySelector('#root')
);
