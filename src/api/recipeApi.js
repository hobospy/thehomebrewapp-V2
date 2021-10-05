import { handleError, handleResponse } from './apiUtils';

const baseUrl = process.env.API_URL + 'recipes/';

// async function awaitGetRecipes() {
//   try {
//     let response = await fetch(baseUrl);

//     if (response.ok)
//     {
//       const jsonResponse = await response.json();
//       console.log(jsonResponse);
//     }
//   }
//   catch(ex)
//   {
//     console.log(ex);
//   }
// }

export function getRecipes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveRecipe(recipe) {
  return fetch(baseUrl + (recipe.id || ''), {
    method: recipe.id ? 'PUT' : 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(recipe),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteRecipe(recipeId) {
  return fetch(baseUrl + recipeId, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
}
