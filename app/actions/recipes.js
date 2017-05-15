import * as types from './types';
import Api from '../lib/api';
import { get } from '../lib/fetch';

export function fetchRecipe(startDate, endDate, brands) {
  return (dispatch, getState) => {
    const params = [
      `startDate=${startDate}`,
      `endDate=${endDate}`,
      `brands=${brands}`,
    ].join('&');
    return Api.get(`http://localhost:8085/caseinformation/getcasesbydaterange?${params}`).then(resp => {
      dispatch(setSearchedRecipes({ recipes: resp }));
    }).catch((ex) => {
      console.log(ex);
    })
  }
}

export function setSearchedRecipes({ recipes }) {
  return {
    type: types.SET_SEARCHED_RECIPES,
    recipes,
  }
}
export function addRecipe() {
  return {
    type: types.ADD_RECIPE,
  }
}
