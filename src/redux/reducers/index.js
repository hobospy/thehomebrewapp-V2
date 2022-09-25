import { combineReducers } from 'redux';

import apiCallsInProgress from './apiStatusReducer';
import brewDetail from './brewReducer';
import brews from './brewsReducer';
import recipeDetail from './recipeReducer';
import recipes from './recipesReducer';
import waterProfiles from './waterProfileReducer';

const rootReducer = combineReducers({
  apiCallsInProgress,
  brewDetail,
  brews,
  recipeDetail,
  recipes,
  waterProfiles,
});

export default rootReducer;
