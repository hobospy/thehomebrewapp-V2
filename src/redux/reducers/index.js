import { combineReducers } from 'redux';

import apiCallsInProgress from './apiStatusReducer';
import brews from './brewReducer';
import recipes from './recipeReducer';
import waterProfiles from './waterProfileReducer';

const rootReducer = combineReducers({
  apiCallsInProgress,
  brews,
  recipes,
  waterProfiles,
});

export default rootReducer;
