import * as types from '../actions/actionTypes';
import InitialState from './initialState';

export default function brewReducer(state = InitialState.brewDetail, action) {
  switch (action.type) {
    case types.LOAD_BREW_SUCCESS:
      return action.brew;
    default:
      return state;
  }
}
