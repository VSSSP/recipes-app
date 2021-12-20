import { addRecipe, getFavoriteRecipes, removeRecipe }
  from '../../../services/helpers/getFavorites';

export default function handleFavoritesClick(type, detail, setIsFavorite) {
  const favoriteMeal = {
    id: detail.idMeal,
    type,
    area: detail.strArea,
    category: detail.strCategory,
    alcoholicOrNot: detail.strAlcorolic ? detail.strAlcorolic : '',
    name: detail.strMeal,
    image: detail.strMealThumb,
  };
  const favoriteDrink = {
    id: detail.idDrink,
    type,
    area: detail.strArea ? detail.strArea : '',
    category: detail.strCategory,
    alcoholicOrNot: detail.strAlcoholic ? detail.strAlcoholic : '',
    name: detail.strDrink,
    image: detail.strDrinkThumb,
  };

  const getRecipes = getFavoriteRecipes();
  const foodAlreadyFavorite = getRecipes.some((recipe) => recipe.id === favoriteMeal.id);
  const drinkAlreadyFavorite = getRecipes
    .some((recipe) => recipe.id === favoriteDrink.id);

  if (foodAlreadyFavorite) {
    removeRecipe(favoriteMeal);
    setIsFavorite(false);
  }
  if (drinkAlreadyFavorite) {
    removeRecipe(favoriteDrink);
    setIsFavorite(false);
  }

  if (!foodAlreadyFavorite && !drinkAlreadyFavorite) {
    if (type === 'comida') {
      addRecipe(favoriteMeal);
      setIsFavorite(true);
    }
    if (type === 'bebida') {
      addRecipe(favoriteDrink);
      setIsFavorite(true);
    }
  }
}
