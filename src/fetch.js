
function fetchData() {
  let ingredientsData = fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/ingredients/ingredientsData')
    .then(response => response.json())
    .then(data => {
      return data.ingredientsData;
    })
    .catch(err => console.log(err.message))

  let recipeData = fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/ingredients/ingredientsData');
    .then(response => response.json())
    .then(data => {
      return data.recipesData;
    })
    .catch(err => console.log(err.message))

  let userData = fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData');
    .then(response => response.json())
    .then(data => {
      return data.userData
    });
    .catch(err => console.log(err.message))

  return Promise.all([ingredientsData, recipeData, userData])
  .then(data => {
    let allData = {};
    allData.ingredientsData = data[0];
    allData.recipesData = data[1];
    allData.userData = data[2];
    return allData
  });
}
export default fetchData;
