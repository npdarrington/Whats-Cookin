const startingAPItoURL = 'https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911'

const getIngredientsData = () => {
  return fetch(`${startingAPItoURL}/ingredients/ingredientsData`)
    .then(response => response.json())
    .then(data => {
      return data.ingredientsData;
    })
    .catch(err => console.log(err.message))
};

const getRecipeData = () => {
  return fetch(`${startingAPItoURL}/recipes/recipeData`)
    .then(response => response.json())
    .then(data => {
      return data.recipeData;
    })
    .catch(err => console.log(err.message))
};

const getUserData = () => {
  return fetch(`${startingAPItoURL}/users/wcUsersData`)
    .then(response => response.json())
    .then(data => {
      return data.wcUsersData
    })
    .catch(err => console.log(err.message))
};

// const postUserData = (userData) => {
//   console.log(userData.id)
//   const init = {
//   "userID": userData.id,
//   "ingredientID": userData.pantry
//   "ingredientModification":
// }
//   fetch(`${startingAPItoURL}/users/wcUsersData`, {
//     method: 'POST',
//     body: JSON.stringify(init),
//     headers: {
//       'content-type': 'application/json',
//     },
//   })
//     .then(response => response.json())
//     .then(responseJson => {
//       return responseJson;
//     });


export default {
  getIngredientsData,
  getRecipeData,
  getUserData,
  // postUserData
}
