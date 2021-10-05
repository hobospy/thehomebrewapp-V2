import { apiCallError, beginApiCall } from './apiStatusActions';
import * as types from './actionTypes';
import * as brewApi from '../../api/brewApi';

export function createBrewSuccess(brew) {
  return { type: types.CREATE_BREW_SUCCESS, brew };
}

export function deleteBrewOptimistic(brew) {
  return { type: types.DELETE_BREW_OPTIMISTIC, brew };
}

export function loadBrewsSuccess(brews) {
  return { type: types.LOAD_BREWS_SUCCESS, brews };
}

export function updateBrewSuccess(brew) {
  return { type: types.UPDATE_BREW_SUCCESS, brew };
}

// async function getStuff() {
//   const item = await fetch("http://localhost:59607/api/recipes/", {mode: 'no-cors'});
// }

export function loadBrews() {
  return function (dispatch) {
    dispatch(beginApiCall());

    return brewApi
      .getBrews()
      .then((brews) => {
        dispatch(loadBrewsSuccess(brews));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveBrew(brew) {
  //return function (dispatch, getState) {
  return function (dispatch) {
    dispatch(beginApiCall());

    return brewApi
      .saveBrew(brew)
      .then((savedBrew) => {
        brew.id
          ? dispatch(updateBrewSuccess(savedBrew))
          : dispatch(createBrewSuccess(savedBrew));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteBrew(brew) {
  return function (dispatch) {
    dispatch(deleteBrewOptimistic(brew));
    return brewApi.deleteBrew(brew.id);
  };
}
