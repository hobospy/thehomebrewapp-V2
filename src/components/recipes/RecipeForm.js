import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const RecipeForm = ({
  errors = {},
  onSave,
  onChange,
  recipe,
  saving = false,
  waterProfiles,
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{recipe.id ? 'Edit' : 'Add'} Recipe</h2>
      {errors.onSave && (
        <>
          <div className='alert alert-danger' role='alert'>
            {errors.onSave}
          </div>
        </>
      )}
      <TextInput
        name='name'
        label='Name'
        value={recipe.name}
        onChange={onChange}
        error={errors.name}
      />

      <SelectInput
        name='waterProfileId'
        label='Water profile'
        value={recipe.waterProfileId || ''}
        defaultOption='Select water profile'
        options={waterProfiles.map((waterProfile) => ({
          value: waterProfile.id,
          text: waterProfile.name,
        }))}
        onChange={onChange}
        error={errors.waterProfileId}
      />

      <button type='submit' disabled={saving} className='btn btn-primary'>
        {saving ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
};

RecipeForm.propTypes = {
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
  saving: PropTypes.bool,
  waterProfiles: PropTypes.array.isRequired,
};

export default RecipeForm;
