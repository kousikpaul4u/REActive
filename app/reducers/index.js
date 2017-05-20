import { combineReducers } from 'redux';
import * as recipesReducer from './recipes';
import * as common from './common';

export default combineReducers(Object.assign({},
  recipesReducer,
  common,
))
