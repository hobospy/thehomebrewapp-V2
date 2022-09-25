import * as types from '../actions/actionTypes';
import InitialState from './initialState';

export default function recipeReducer(
  state = InitialState.recipeDetail,
  action
) {
  switch (action.type) {
    case types.LOAD_RECIPE_SUCCESS:
      return action.recipe;
    default:
      return state;
  }
}
