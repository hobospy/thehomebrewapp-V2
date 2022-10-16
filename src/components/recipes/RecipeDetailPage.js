import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

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

  const handleDeleteRecipe = async (event, recipe) => {
    event.stopPropagation();
    toast.success('The ' + recipe.name + ' recipe was deleted');
    try {
      await this.props.actions.deleteRecipe(recipe);
    } catch (error) {
      toast.error(
        <div>
          Deletion of {recipe.name} failed with error message:
          <br /> {error.message}
        </div>,
        { autoClose: false }
      );
    }
  };

  return (
    <>
      {isLoading || recipe === null ? (
        <Spinner />
      ) : (
        <>
          <div>
            <h2 className='header-text'>Recipe</h2>
            <button
              className='btn btn-primary header-button-danger'
              onClick={(event) => handleDeleteRecipe(event, recipe)}
            >
              <DeleteIcon />
            </button>
            <button
              className='btn btn-primary header-button-standard'
              onClick={() => this.setState({ redirectToAddBrewPage: true })}
              style={{ marginRight: '5px' }}
            >
              <EditOutlinedIcon />
            </button>
          </div>
          <RecipeDetail recipe={recipe} />
        </>
      )}
    </>
  );
};

export default RecipeDetailPage;
