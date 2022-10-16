import PropTypes from 'prop-types';
import React from 'react';

import AddIcon from '@mui/icons-material/Add';

import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
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

  render() {
    return (
      <>
        {this.state.redirectToAddRecipePage && <Navigate to='/recipe' />}
        <>
          <h2 className='header-text'>Recipes</h2>
          <button
            className='btn btn-primary header-button-standard'
            onClick={() => this.setState({ redirectToAddRecipePage: true })}
          >
            <AddIcon />
          </button>
        </>
        {this.props.isLoading ? (
          <Spinner />
        ) : (
          <RecipeList recipes={this.props.recipes} />
        )}
      </>
    );
  }
}

RecipesPage.propTypes = {
  actions: PropTypes.object.isRequired,
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
