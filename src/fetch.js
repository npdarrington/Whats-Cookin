//fetching 3 times, then promise.all resolves redundancies -- storing fetched data as obj properties(allData)
//return in allData?

// instead: start with Promise.all, two thens, and a catch


function fetchData() {
  let ingredientsData = fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/ingredients/ingredientsData')
    .then(response => response.json())
    .then(data => {
      return data.ingredientsData;
    })
    .catch(err => console.log(err.message))

  let recipeData = fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData')
    .then(response => response.json())
    .then(data => {
      return data.recipeData;
    })
    .catch(err => console.log(err.message))

  let userData = fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData')
    .then(response => response.json())
    .then(data => {
      return data.wcUsersData
    })
    .catch(err => console.log(err.message))

  return Promise.all([ingredientsData, recipeData, userData])
    .then(data => {
      let allData = {};
      allData.ingredientsData = data[0];
      allData.recipeData = data[1];
      allData.userData = data[2];
      return allData
    });
}
export default fetchData;
