import login from './login';
import movies from './movies';
import { combineReducers } from 'redux';

const reducers = {
  login,
  movies
};

export const rootReducer = combineReducers(reducers);

export default reducers;