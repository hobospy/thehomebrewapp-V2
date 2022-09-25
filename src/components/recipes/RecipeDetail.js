import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import PropTypes from 'prop-types';
import React from 'react';

import { getWaterProfileFromId } from '../../api/apiUtils';
import BrewingStep from '../common/BrewingStep';
import ExpandableTableDouble from '../common/ExpandableTableDouble';
import ExpandableTableSingle from '../common/ExpandableTableSingle';
import TextDisplay from '../common/TextDisplay';

function retrieveIngredients(stepsArray) {
  let ingredients = [];

  stepsArray.forEach((step) => {
    step.ingredients.forEach((ingredient) => {
      const ingredientIndex = ingredients.findIndex(
        (i) => i.label === ingredient.name
      );

      if (ingredientIndex === -1) {
        ingredients.push({
          label: ingredient.name,
          value: ingredient.amount,
          unit: ingredient.unit,
        });
      } else {
        ingredients[ingredientIndex].value += ingredient.amount;
      }
    });
  });

  return ingredients;
}

const RecipeDetail = ({ recipe }) => {
  return (
    <>
      <div className='recipeDetailContainer'>
        <div className='header title'>{recipe.name}</div>
        <div className='header favourite'>
          {recipe.favourite ? (
            <Favorite
              style={{
                color: '#FFF',
                fontSize: '24px',
                zIndex: 1,
              }}
            />
          ) : (
            <FavoriteBorder
              style={{ color: '#FFF', fontSize: '26px', zIndex: 1 }}
            />
          )}
        </div>
        <div className='Description'>
          <TextDisplay label='Description' value={recipe.description} />
        </div>
        <div className='Type'>
          <TextDisplay label='Type' value={recipe.type} />
        </div>
        <div className='ExpectedABV'>
          <TextDisplay label='Expected ABV' value={recipe.expectedABV + '%'} />
        </div>
        <div className='IngredientsWaterProfile'>
          <ExpandableTableDouble
            items1={retrieveIngredients(recipe.steps).map((item, index) => {
              return (
                <TextDisplay
                  key={index}
                  label={item.label}
                  narrowMargin={true}
                  value={item.value}
                />
              );
            })}
            items2={[]
              .concat(getWaterProfileFromId(recipe.waterProfileId))
              .map((wp, index) => {
                return <div key={index}>{wp.name}</div>;
              })}
            title1='Ingredients'
            title2='Water profile'
            titleBackground='#001a33'
            titleForeground='#fff'
          />
        </div>
        <div className='BrewingSteps'>
          <ExpandableTableSingle
            items={recipe.steps.map((step, index) => {
              return (
                <BrewingStep
                  description={step.description}
                  duration={step.duration}
                  durationIndicator={step.durationType}
                  key={index}
                  label={'Step ' + index}
                />
              );
            })}
            title='Brewing steps'
            titleBackground='#001a33'
            titleForeground='#fff'
          />
        </div>
      </div>
    </>
  );
};

RecipeDetail.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeDetail;
