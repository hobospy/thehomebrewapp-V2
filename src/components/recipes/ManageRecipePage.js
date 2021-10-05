import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { newRecipe } from '../../../tools/mockData';
import * as recipeActions from '../../redux/actions/recipeActions';
import RecipeForm from './RecipeForm';
import Spinner from '../common/Spinner';
import * as waterProfileActions from '../../redux/actions/waterProfileActions';

function ManageRecipePage({
  history,
  loadRecipes,
  loadWaterProfiles,
  recipes,
  saveRecipe,
  waterProfiles,
  ...props
}) {
  const [errors, setErrors] = useState({});
  const [recipe, setRecipe] = useState({ ...props.recipe });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (recipes.length === 0) {
      loadRecipes().catch((error) => {
        alert('Loading recipes failed: ' + error);
      });
    } else {
      setRecipe({ ...props.recipe });
    }

    if (waterProfiles.length === 0) {
      loadWaterProfiles().catch((error) => {
        alert('Loading water profiles failed: ' + error);
      });
    }
  }, [props.recipe]);

  function handleChange(event) {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: name === 'waterProfileId' ? parseInt(value, 10) : value,
    }));
  }

  function formIsValid() {
    const { name, waterProfileId } = recipe;
    const errors = {};

    if (!name) errors.name = 'Name is required.';
    if (!waterProfileId) errors.waterProfileId = 'Water profile is required.';

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveRecipe(recipe)
      .then(() => {
        toast.success('Recipe saved');
        history.push('/recipes');
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return recipes.length === 0 || waterProfiles.length === 0 ? (
    <Spinner />
  ) : (
    <RecipeForm
      errors={errors}
      recipe={recipe}
      waterProfiles={waterProfiles}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageRecipePage.propTypes = {
  history: PropTypes.object.isRequired,
  loadRecipes: PropTypes.func.isRequired,
  loadWaterProfiles: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
  recipes: PropTypes.array.isRequired,
  saveRecipe: PropTypes.func.isRequired,
  waterProfiles: PropTypes.array.isRequired,
};

export function getRecipeById(recipes, id) {
  return recipes.find((recipe) => recipe.id === id) || null;
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id);
  const recipe =
    id && state.recipes.length > 0
      ? getRecipeById(state.recipes, id)
      : newRecipe;
  return {
    recipe,
    recipes: state.recipes,
    waterProfiles: state.waterProfiles,
  };
}

const mapDispatchToProps = {
  loadRecipes: recipeActions.loadRecipes,
  loadWaterProfiles: waterProfileActions.loadWaterProfiles,
  saveRecipe: recipeActions.saveRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipePage);
