const brews = [
  {
    id: 1,
    name: 'First brew',
    recipeId: 1,
  },
  {
    id: 2,
    name: 'Second brew',
    recipeId: 1,
  },
  {
    id: 3,
    name: 'Third brew',
    recipeId: 2,
  },
];

const recipes = [
  {
    id: 1,
    name: 'Amarillo SMaSH',
    description: 'Single malt and single hop recipe using Amarillo hops',
    type: 2,
    typeDesc: 'Amber hybrid beer',
    expectedABV: 3.5,
    favourite: true,
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
  },
  {
    id: 2,
    name: 'Raspberry Porter',
    description:
      'Porter based recipe with raspberries added during the second half of fermentation',
    type: 'Porter',
    expectedABV: 5.2,
    favourite: false,
    waterProfileId: 2,
  },
  {
    id: 3,
    name: 'Bock',
    description: 'Basic Bock recipe for those cold nights',
    type: 'Bock',
    expectedABV: 6.8,
    favourite: false,
    waterProfileId: 2,
  },
];

const waterProfiles = [
  {
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
  {
    id: 2,
    name: 'Stout',
    description: 'Dark beer water profile',
  },
];

const newRecipe = {
  id: null,
  name: '',
  description: '',
  type: '',
  expectedABV: 0.0,
  favourite: false,
  waterProfile: {},
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newRecipe,
  brews,
  recipes,
  waterProfiles,
};
