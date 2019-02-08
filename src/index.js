import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {serachRobots,requestRobots} from './reducers';
import thunkMiddleware from 'redux-thunk';
// import Card from './Card';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// import {robots} from './robots';
const rootReducer=combineReducers({serachRobots,requestRobots})
const logger=createLogger();
const store=
createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(<Provider store={store}>
	<App />
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
