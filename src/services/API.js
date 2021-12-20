export const getMealIngredients = (ingrediente) => {
  const data = fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
    .then((response) => response.json());
  return data;
};

export const getMealName = (name) => {
  const data = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json());
  return data;
};

export const getMealId = (id) => {
  const data = fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json());
  return data;
};

export const getMealFirstLetter = (letter) => {
  const data = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    .then((response) => response.json());
  return data;
};

export const getDrinkIngredients = (ingrediente) => {
  const data = fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
    .then((response) => response.json());
  return data;
};

export const getDrinkName = (name) => {
  const data = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json());
  return data;
};

export const getDrinkId = (id) => {
  const data = fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json());
  return data;
};

export const getDrinkFirstLetter = (letter) => {
  const data = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    .then((response) => response.json());
  return data;
};

export const getFoodCategories = () => {
  const data = fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json());
  return data;
};

export const getDrinkCategories = () => {
  const data = fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json());
  return data;
};

export const getFoodFilter = (food) => {
  const data = fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${food}`)
    .then((response) => response.json());
  return data;
};

export const getDrinkFilter = (drink) => {
  const data = fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drink}`)
    .then((response) => response.json());
  return data;
};

export const getRandomFood = () => {
  const data = fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json());
  return data;
};

export const getRandomDrink = () => {
  const data = fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => response.json());
  return data;
};

export const getArea = () => {
  const data = fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then((response) => response.json());
  return data;
};

export const getMealIngredientList = () => {
  const data = fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then((response) => response.json());
  return data;
};

export const getMealArea = (area) => {
  const data = fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    .then((response) => response.json());
  return data;
};

export const getDrinkIngredientList = () => {
  const data = fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    .then((response) => response.json());
  return data;
};
