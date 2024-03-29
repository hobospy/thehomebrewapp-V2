import * as types from '../actions/actionTypes';
import InitialState from './initialState';

export default function waterProfileReducer(
  state = InitialState.waterProfileDetail,
  action
) {
  switch (action.type) {
    case types.LOAD_WATER_PROFILE_SUCCESS:
      return action.waterProfile;
    default:
      return state;
  }
}
