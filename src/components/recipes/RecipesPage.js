import PropTypes from 'prop-types';
import React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';

import RecipeList from './RecipeList';
import * as recipeActions from '../../redux/actions/recipeActions';
import Spinner from '../common/Spinner';
import * as waterProfileActions from '../../redux/actions/waterProfileActions';

class RecipesPage extends React.Component {
  state = {
    redirectToAddRecipePage: false,
  };

  componentDidMount() {
    const { actions, recipes, waterProfiles } = this.props;

    if (recipes.length === 0) {
      actions.loadRecipes().catch((error) => {
        alert('Loading recipes failed: ' + error);
      });
    }

    if (waterProfiles.length === 0) {
      actions.loadWaterProfiles().catch((error) => {
        alert('Loading water profiles failed: ' + error);
      });
    }
  }

  handleDeleteRecipe = async (event, recipe) => {
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

  render() {
    return (
      <>
        {this.state.redirectToAddRecipePage && <Redirect to='/recipe' />}
        <h2>Recipes</h2>
        {this.props.isLoading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className='btn btn-primary'
              onClick={() => this.setState({ redirectToAddRecipePage: true })}
            >
              Add Recipe
            </button>
            <RecipeList
              history={this.props.history}
              onDeleteClick={this.handleDeleteRecipe}
              recipes={this.props.recipes}
            />
          </>
        )}
      </>
    );
  }
}

RecipesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  recipes: PropTypes.array.isRequired,
  waterProfiles: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoading: state.apiCallsInProgress > 0,
    recipes: state.recipes,
    waterProfiles: state.waterProfiles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      deleteRecipe: bindActionCreators(recipeActions.deleteRecipe, dispatch),
      loadRecipes: bindActionCreators(recipeActions.loadRecipes, dispatch),
      loadWaterProfiles: bindActionCreators(
        waterProfileActions.loadWaterProfiles,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);
