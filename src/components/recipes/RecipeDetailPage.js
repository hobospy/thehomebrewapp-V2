import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import RecipeDetail from './RecipeDetail';
import Spinner from '../common/Spinner';

import * as recipeActions from '../../redux/actions/recipeActions';

export const RecipeDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { recipe, isLoading } = useSelector((store) => ({
    recipe: store.recipeDetail,
    isLoading: store.apiCallsInProgress > 0,
  }));

  useEffect(() => {
    dispatch(recipeActions.loadRecipe(parseInt(id)));
  }, []);

  return (
    <>
      {isLoading || recipe === null ? (
        <Spinner />
      ) : (
        <>
          <div>
            {/* style={{ backgroundColor: 'blue', overflow: 'hidden' }}> */}
            <h2 className='header-text'>Recipe</h2>
            <button
              className='btn btn-primary header-button'
              onClick={() => this.setState({ redirectToAddBrewPage: true })}
            >
              Edit Recipe
            </button>
          </div>
          <RecipeDetail recipe={recipe} />
        </>
      )}
    </>
  );
};

export default RecipeDetailPage;
