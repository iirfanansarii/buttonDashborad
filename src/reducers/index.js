// root reducers accept two argument state and action
/* export default (state = { name: 'Irfan' }, action) => {
   return state;
 }; */
 
import authReducers from './auth.reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducers,
});

export default rootReducer;


 