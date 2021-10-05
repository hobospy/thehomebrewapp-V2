import * as types from '../actions/actionTypes';
import InitialState from './initialState';

export default function waterProfileReducer(
  state = InitialState.waterProfiles,
  action
) {
  switch (action.type) {
    case types.LOAD_WATER_PROFILES_SUCCESS:
      return action.waterProfiles;
    default:
      return state;
  }
}
