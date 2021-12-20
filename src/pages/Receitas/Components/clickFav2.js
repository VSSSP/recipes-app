import { addRecipe, getFavoriteRecipes, removeRecipe }
  from '../../../services/helpers/getFavorites';

export default function clickFav2(type, detail, setIsFavorite) {
  const favoriteMeal = {
    id: detail.id,
    type,
    area: detail.area,
    category: detail.category,
    alcoholicOrNot: detail.alcoholicOrNot ? detail.alcoholicOrNot : '',
    name: detail.name,
    image: detail.image,
  };
  const favoriteDrink = {
    id: detail.id,
    type,
    area: detail.area,
    category: detail.category,
    alcoholicOrNot: detail.alcoholicOrNot ? detail.alcoholicOrNot : '',
    name: detail.name,
    image: detail.image,
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
