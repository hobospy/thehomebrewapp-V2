import { apiCallError, beginApiCall } from './apiStatusActions';
import * as types from './actionTypes';
import * as recipeApi from '../../api/recipeApi';

export function createRecipeSuccess(recipe) {
  return { type: types.CREATE_RECIPE_SUCCESS, recipe };
}

export function deleteRecipeOptimistic(recipe) {
  return { type: types.DELETE_RECIPE_OPTIMISTIC, recipe };
}

export function loadRecipeSuccess(recipe) {
  return { type: types.LOAD_RECIPE_SUCCESS, recipe };
}

export function loadRecipesSuccess(recipes) {
  return { type: types.LOAD_RECIPES_SUCCESS, recipes };
}

export function updateRecipeSuccess(recipe) {
  return { type: types.UPDATE_RECIPE_SUCCESS, recipe };
}

export function loadRecipe(recipeId) {
  return function (dispatch) {
    dispatch(beginApiCall());

    return recipeApi
      .getRecipe(recipeId)
      .then((recipe) => {
        dispatch(loadRecipeSuccess(recipe));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadRecipes() {
  return function (dispatch) {
    dispatch(beginApiCall());

    return recipeApi
      .getRecipes()
      .then((recipes) => {
        dispatch(loadRecipesSuccess(recipes));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveRecipe(recipe) {
  //return function (dispatch, getState) {
  return function (dispatch) {
    dispatch(beginApiCall());

    return recipeApi
      .saveRecipe(recipe)
      .then((savedRecipe) => {
        recipe.id
          ? dispatch(updateRecipeSuccess(savedRecipe))
          : dispatch(createRecipeSuccess(savedRecipe));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteRecipe(recipe) {
  return function (dispatch) {
    dispatch(deleteRecipeOptimistic(recipe));
    return recipeApi.deleteRecipe(recipe.id);
  };
}
