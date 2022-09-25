import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './RecipeList.css';

function RecipeList({ onDeleteClick, recipes }) {
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate('../recipes/' + id, { replace: true });
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
  onDeleteClick: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired,
};

export default RecipeList;
