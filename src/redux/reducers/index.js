import { combineReducers } from 'redux';

import apiCallsInProgress from './apiStatusReducer';
import brewDetail from './brewReducer';
import brews from './brewsReducer';
import recipeDetail from './recipeReducer';
import recipes from './recipesReducer';
import waterProfileDetail from './waterProfileReducer';
import waterProfiles from './waterProfilesReducer';

const rootReducer = combineReducers({
  apiCallsInProgress,
  brewDetail,
  brews,
  recipeDetail,
  recipes,
  waterProfileDetail,
  waterProfiles,
});

export default rootReducer;
