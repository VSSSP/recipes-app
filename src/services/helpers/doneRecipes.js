const DONE_RECIPES = 'doneRecipes';

if (!JSON.parse(localStorage.getItem(DONE_RECIPES))) {
  localStorage.setItem(DONE_RECIPES, JSON.stringify([]));
}
const readDoneRecipes = () => JSON.parse(localStorage.getItem(DONE_RECIPES));

const saveDoneRecipes = (doneRecipes) => localStorage
  .setItem(DONE_RECIPES, JSON.stringify(doneRecipes));

export const getDoneRecipes = () => {
  const doneRecipes = readDoneRecipes();
  return doneRecipes;
};

export const addRecipe = (recipe) => {
  const doneRecipes = readDoneRecipes();
  saveDoneRecipes([...doneRecipes, recipe]);
};

export const removeRecipe = (recipe) => {
  const doneRecipes = readDoneRecipes();
  saveDoneRecipes(doneRecipes.filter((doneRecipe) => doneRecipe.id
    !== recipe.id));
};
