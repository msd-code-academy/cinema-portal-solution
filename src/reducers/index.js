import login from './login';
import { combineReducers } from 'redux';

const reducers = {
  login
};

export const rootReducer = combineReducers(reducers);

export default reducers;