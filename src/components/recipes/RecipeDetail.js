import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { getWaterProfileFromId } from '../../api/apiUtils';
import BrewingStep from '../common/BrewingStep';
import ExpandableTableDouble from '../common/ExpandableTableDouble';
import ExpandableTableSingle from '../common/ExpandableTableSingle';
import TextDisplay from '../common/TextDisplay';

function RecipeDetail() {
  useEffect(() => {
    // TODO make fetch call to retrieve the recipe data
    const defaultRecipe = {
      id: 1,
      name: 'Amarillo SMaSH',
      description: 'Single malt and single hop recipe using Amarillo hops',
      type: 2,
      typeDesc: 'Amber hybrid beer',
      expectedABV: 3.5,
      favourite: false,
      steps: [
        {
          id: 1,
          description: 'Get the water up to mash in temp',
          timer: null,
          ingredients: [],
        },
        {
          id: 2,
          description: 'Mash in the grains',
          timer: {
            id: 1,
            duration: 3600,
            type: 0,
          },
          ingredients: [
            {
              id: 1,
              name: 'Amarillo',
              amount: 68,
              unit: 'g',
            },
            {
              id: 2,
              name: 'Pale malt',
              amount: 5.5,
              unit: 'kg',
            },
            {
              id: 3,
              name: 'Light crystal malt',
              amount: 150,
              unit: 'g',
            },
          ],
        },
        {
          id: 3,
          description: 'Mash out',
          timer: null,
          ingredients: [],
        },
        {
          id: 4,
          description: 'Raise temp to a rolling boil',
          timer: null,
          ingredients: [],
        },
        {
          id: 5,
          description: 'Add bittering hops',
          timer: {
            id: 2,
            duration: 600,
            type: 1,
          },
          ingredients: [],
        },
      ],
      waterProfileId: 1,
      waterProfile: {
        id: 1,
        name: 'Pale ale',
        description:
          'Water profile that accenuates the hops used within the recipe.',
        additions: [
          {
            id: 1,
            name: 'Epsom salt',
            amount: 4,
            unit: 'g',
          },
          {
            id: 2,
            name: 'Gypsum',
            amount: 4,
            unit: 'g',
          },
          {
            id: 3,
            name: 'Calcium chloride',
            amount: 6,
            unit: 'g',
          },
          {
            id: 4,
            name: 'Lactic acid',
            amount: 4,
            unit: 'ml',
          },
        ],
      },
    };

    const defaultIngredients = defaultRecipe.steps
      .map((step) => step.ingredients)
      .flat();

    setIngredients(
      defaultIngredients.map((ingredient) => ({
        label: ingredient.name,
        value: ingredient.amount + ingredient.unit,
      }))
    );

    setRecipe(defaultRecipe);
  }, []);

  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState(null);

  return (
    <>
      {recipe !== null && recipe !== undefined ? (
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
              <TextDisplay
                label='Expected ABV'
                value={recipe.expectedABV + '%'}
              />
            </div>
            <div className='IngredientsWaterProfile'>
              <ExpandableTableDouble
                items1={ingredients.map((item, index) => {
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
      ) : null}
    </>
  );
}

RecipeDetail.propTypes = {
  baseUrl: PropTypes.string.isRequired,
};

export default RecipeDetail;
