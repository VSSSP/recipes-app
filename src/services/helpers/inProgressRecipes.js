const IN_PROGRESS_RECIPES = 'inProgressRecipes';

const readRecipes = () => JSON.parse(localStorage.getItem(IN_PROGRESS_RECIPES));

const saveProgress = (recipes) => localStorage
  .setItem(IN_PROGRESS_RECIPES, JSON.stringify(recipes));

export const getInProgressRecipes = () => {
  const recipes = readRecipes();
  return recipes;
};

export const defaultRecipes = () => {
  const recipes = readRecipes();
  if (!recipes) {
    localStorage.setItem(IN_PROGRESS_RECIPES, JSON
      .stringify({ cocktails: {}, meals: {} }));
  }
};

export const defaultInProgressRecipes = (id, recipeType) => {
  const recipes = readRecipes();
  if (!recipes) {
    if (recipeType === 'drink') {
      localStorage.setItem(IN_PROGRESS_RECIPES, JSON
        .stringify({ cocktails: { [id]: [] }, meals: {} }));
    } else {
      localStorage.setItem(IN_PROGRESS_RECIPES, JSON
        .stringify({ cocktails: {}, meals: { [id]: [] } }));
    }
  }
  if (recipes && recipeType === 'meals' && !recipes.meals[id]) {
    localStorage.setItem(IN_PROGRESS_RECIPES, JSON.stringify({
      ...recipes,
      meals: {
        ...recipes.meals,
        [id]: [],
      },
    }));
  }
  if (recipes && recipeType === 'drink' && !recipes.cocktails[id]) {
    localStorage.setItem(IN_PROGRESS_RECIPES, JSON.stringify({
      ...recipes,
      cocktails: {
        ...recipes.cocktails,
        [id]: [],
      },
    }));
  }
};

export const addRecipe = (recipeType, ingredient, id) => {
  const recipes = readRecipes();
  const teste = {
    ...recipes,
    [recipeType]: {
      ...recipes[recipeType],
      [id]: [...(recipes[recipeType][id] || []), ingredient],
    },
  };
  saveProgress(teste);
};

export const removeRecipe = (recipeType, ingredient, id) => {
  const recipes = readRecipes();
  const teste = recipes[recipeType][id].filter((recipe) => recipe !== ingredient);
  const newInProgressRecipes = {
    ...recipes,
    [recipeType]: {
      ...recipes[recipeType],
      [id]: teste,
    },
  };
  saveProgress(newInProgressRecipes);
};
