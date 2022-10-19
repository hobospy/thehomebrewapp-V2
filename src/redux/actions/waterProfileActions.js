import { apiCallError, beginApiCall } from './apiStatusActions';
import * as types from './actionTypes';
import * as waterProfileApi from '../../api/waterProfileApi';

export function loadWaterProfileSuccess(waterProfile) {
  return { type: types.LOAD_WATER_PROFILE_SUCCESS, waterProfile };
}

export function loadWaterProfilesSuccess(waterProfiles) {
  return { type: types.LOAD_WATER_PROFILES_SUCCESS, waterProfiles };
}

export function deleteWaterProfileOptimistic(waterProfile) {
  return { type: types.DELETE_WATER_PROFILE_OPTIMISTIC, waterProfile };
}

export function loadWaterProfile(waterProfileId) {
  return function (dispatch) {
    dispatch(beginApiCall());

    return waterProfileApi
      .getWaterProfile(waterProfileId)
      .then((waterProfile) => {
        dispatch(loadWaterProfileSuccess(waterProfile));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadWaterProfiles() {
  return function (dispatch) {
    dispatch(beginApiCall());

    return waterProfileApi
      .getWaterProfiles()
      .then((waterProfiles) => {
        dispatch(loadWaterProfilesSuccess(waterProfiles));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteWaterProfile(waterProfile) {
  return function (dispatch) {
    dispatch(deleteWaterProfileOptimistic(waterProfile));
    return waterProfile.deleteWaterProfile(waterProfile.id);
  };
}
