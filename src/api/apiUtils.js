export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error('Network response was not OK');
}

export function handleError(error) {
  console.error('API call failed. ' + error);
  throw error;
}

export function getRecipeTypeDescription(recipeEnumValue) {
  // TODO
  // Get the enums from the REDUX store, find the value and return the desription otherwise return Unknown
  console.log('Looking for enum value ' + recipeEnumValue);

  return 'American pale ale';
}

export function getWaterProfileFromId(waterProfileId) {
  // TODO
  // Get the water profiles from the REDUX store, find the value and return the object, else return null
  console.log('Looking for water profile value ' + waterProfileId);

  return {
    id: 1,
    name: 'Test water profile',
    ingredients: [
      { id: 1, name: 'ing 1', amount: '5g' },
      { id: 2, name: 'ing 2', amount: '3kg' },
    ],
  };
}
