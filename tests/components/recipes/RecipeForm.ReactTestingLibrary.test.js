import React from 'react';
import { cleanup, render } from 'react-testing-library';
import RecipeForm from '../../../src/components/recipes/RecipeForm';

afterEach(cleanup);

function renderRecipeForm(args) {
  let defaultProps = {
    errors: {},
    onChange: () => {},
    onSave: () => {},
    recipe: {},
    saving: false,
    waterProfiles: [],
  };

  const props = { ...defaultProps, ...args };
  return render(<RecipeForm {...props} />);
}

it('should render Add Recipe header', () => {
  const { getByText } = renderRecipeForm();
  getByText('Add Recipe');
});

it('should label save button as "Save" when not saving', () => {
  const { getByText } = renderRecipeForm();
  getByText('Save');
});

it('should label save button as "Saving..." when saving', () => {
  const { getByText } = renderRecipeForm({ saving: true });
  getByText('Saving...');
});
