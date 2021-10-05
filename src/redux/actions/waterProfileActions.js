import { apiCallError, beginApiCall } from './apiStatusActions';
import * as types from './actionTypes';
import * as waterProfileApi from '../../api/waterProfileApi';

export function loadWaterProfilesSuccess(waterProfiles) {
  return { type: types.LOAD_WATER_PROFILES_SUCCESS, waterProfiles };
}

export function deleteWaterProfileOptimistic(waterProfile) {
  return { type: types.DELETE_WATER_PROFILE_OPTIMISTIC, waterProfile };
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
