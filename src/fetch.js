

  const getIngredientsData = fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/ingredients/ingredientsData')
    .then(response => response.json())
    .then(data => {
      return data.ingredientsData;
    })
    .catch(err => console.log(err.message))

  const getRecipeData = fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData')
    .then(response => response.json())
    .then(data => {
      return data.recipeData;
    })
    .catch(err => console.log(err.message))

  const getUserData = fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData')
    .then(response => response.json())
    .then(data => {
      return data.wcUsersData
    })
    .catch(err => console.log(err.message))
