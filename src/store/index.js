import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

/* 
create store accepts two argument first one is callback function [()=>] and second
argument is the middleware
*/

/* 
added applyMiddlewarea and thunk to solve async plain text issue
*/
