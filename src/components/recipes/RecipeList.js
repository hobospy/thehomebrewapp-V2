import PropTypes from 'prop-types';
import React from 'react';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './RecipeList.css';

function RecipeList({ history, onDeleteClick, recipes }) {
  const handleRowClick = (id) => {
    history.push('/recipe/' + id);
  };

  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <table
            className='table'
            key={recipe.id}
            onClick={() => handleRowClick(recipe.id)}
          >
            <tbody className='tableHighlightRowLink'>
              <tr>
                <td style={{ borderWidth: '0px' }}>{recipe.name}</td>
                <td style={{ borderWidth: '0px', width: '300px' }}>
                  {recipe.type}
                </td>
                <td
                  style={{
                    borderWidth: '0px',
                    width: '125px',
                    verticalAlign: 'middle',
                    textAlign: 'right',
                  }}
                  rowSpan={2}
                >
                  <button
                    className='danger-button'
                    onClick={(event) => onDeleteClick(event, recipe)}
                  >
                    <DeleteOutlineIcon className='danger-button-icon' />
                  </button>
                </td>
              </tr>
              <tr>
                <td style={{ borderWidth: '0px' }} colSpan={2}>
                  {recipe.description}
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

RecipeList.propTypes = {
  history: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired,
};

export default RecipeList;
