import * as types from './types';
import Api from '../lib/api';
import { get } from '../lib/fetch';

export function isLoader(loaderStatus) {
  return {
    type: types.SET_LOADER,
    loaderStatus,
  }
}
