import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './RecipeList.css';

function RecipeList({ recipes }) {
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
                <td
                  style={{
                    borderWidth: '0px',
                    width: '300px',
                    textAlign: 'right',
                  }}
                >
                  {recipe.type}
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
  recipes: PropTypes.array.isRequired,
};

export default RecipeList;
