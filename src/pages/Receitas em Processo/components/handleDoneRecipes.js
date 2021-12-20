import { addRecipe, getDoneRecipes } from '../../../services/helpers/doneRecipes';

export default function handleDoneRecipes(type, details) {
  const doneMeal = {
    id: details.idMeal,
    type,
    area: details.strArea,
    category: details.strCategory,
    alcoholicOrNot: details.strAlcorolic ? details.strAlcorolic : '',
    name: details.strMeal,
    image: details.strMealThumb,
    doneDate: new Date(),
    tags: details.strTags ? details.strTags.slice(0, 1).split(',') : [],
  };
  const doneDrink = {
    id: details.idDrink,
    type,
    area: details.strArea,
    category: details.strCategory,
    alcoholicOrNot: details.strAlcorolic ? details.strAlcorolic : '',
    name: details.strDrink,
    image: details.strDrinkThumb,
    doneDate: new Date(),
    tags: details.strTags ? details.strTags.slice(0, 1).split(',') : [],
  };

  const getRecipes = getDoneRecipes();
  const foodAlreadyDone = getRecipes.some((recipe) => recipe.id === doneMeal.id);
  const drinkAlreadyDone = getRecipes
    .some((recipe) => recipe.id === doneDrink.id);

  if (foodAlreadyDone) {
    return;
  }
  if (drinkAlreadyDone) {
    return;
  }

  if (!foodAlreadyDone && !drinkAlreadyDone) {
    if (type === 'comida') {
      addRecipe(doneMeal);
    }
    if (type === 'bebida') {
      addRecipe(doneDrink);
    }
  }
}
