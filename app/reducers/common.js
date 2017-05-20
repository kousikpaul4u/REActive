import createReducer from '../lib/createReducer';
import * as types from  '../actions/types';

export const isLoader = createReducer({}, {
  [types.SET_LOADER](state, action) {
    return Object.assign({ }, state, action);;
  },
});
