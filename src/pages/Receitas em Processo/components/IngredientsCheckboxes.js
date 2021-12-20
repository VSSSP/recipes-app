import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addRecipe,
  removeRecipe, getInProgressRecipes } from '../../../services/helpers/inProgressRecipes';
import handleComponents from './handleComponents';

export default function IngredientsCheckboxes(props) {
  const { setIngredientesChecked,
    setCheckeds, ingredientesChecked, recipeInfo, name } = props;

  const [click, setClick] = useState(false);

  useEffect(() => {
    if (ingredientesChecked) {
      const checkedIngredients = ingredientesChecked
        .some((ingredient) => ingredient === name);
      setClick(checkedIngredients);
    }
  }, [ingredientesChecked, name]);

  const handleChange = () => {
    setCheckeds(document.querySelectorAll('.inputCheck:checked').length); // resolver aqui
    handleComponents(ingredientesChecked, name, setIngredientesChecked, setClick);
    const recipes = getInProgressRecipes();
    if (window.location.pathname.includes('comidas')) {
      const alreadyInProgress = recipes.meals[recipeInfo.idMeal]
        .some((recipe) => recipe === name);
      if (alreadyInProgress) {
        removeRecipe('meals', name, recipeInfo.idMeal);
      } else {
        addRecipe('meals', name, recipeInfo.idMeal);
      }
    } else {
      const alreadyInProgress = recipes.cocktails[recipeInfo.idDrink]
        .some((recipe) => recipe === name);
      if (alreadyInProgress) {
        removeRecipe('cocktails', name, recipeInfo.idDrink);
      } else {
        addRecipe('cocktails', name, recipeInfo.idDrink);
      }
    }
  };

  return (
    <input
      type="checkbox"
      name={ name }
      className="inputCheck"
      onChange={ handleChange }
      id={ name }
      checked={ click }
    />
  );
}

IngredientsCheckboxes.propTypes = {
  setIngredientesChecked: PropTypes.func.isRequired,
  setCheckeds: PropTypes.func.isRequired,
  ingredientesChecked: PropTypes.arrayOf(PropTypes.string).isRequired,
  recipeInfo: PropTypes.shape(PropTypes.any).isRequired,
  name: PropTypes.string.isRequired,
};
