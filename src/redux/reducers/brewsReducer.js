import * as types from '../actions/actionTypes';
import InitialState from './initialState';

export default function brewsReducer(state = InitialState.brews, action) {
  switch (action.type) {
    case types.CREATE_BREW_SUCCESS:
      return [...state, { ...action.brew }];
    case types.LOAD_BREW_SUCCESS:
      return { ...state, brewDetail: action.brew };
    case types.LOAD_BREWS_SUCCESS:
      return action.brews;
    case types.UPDATE_BREW_SUCCESS:
      return state.map((brew) =>
        brew.id === action.brew.id ? action.brew : brew
      );
    case types.DELETE_BREW_OPTIMISTIC:
      return state.filter((brew) => brew.id !== action.brew.id);
    default:
      return state;
  }
}
