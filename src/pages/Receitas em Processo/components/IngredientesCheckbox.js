import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FinishBtn from './FinishBtn';
import { defaultInProgressRecipes,
  getInProgressRecipes } from '../../../services/helpers/inProgressRecipes';
import IngredientsCheckboxes
  from './IngredientsCheckboxes';

export default function IngredientesCheckbox({ recipeInfo }) {
  const keys = Object.keys(recipeInfo).filter((i) => i.includes('Ingredient'));
  const ingredientes = keys.filter((key) => recipeInfo[key] !== null
    && recipeInfo[key] !== '');
  const [checkeds, setCheckeds] = useState(1);
  const [ingredientesChecked, setIngredientesChecked] = useState([]);
  const id = window.location.pathname.split('/')[2];
  const [type, setType] = useState('');

  useEffect(() => {
    if (window.location.pathname.includes('comidas')) {
      defaultInProgressRecipes(id, 'meals');
      const recipesInProgress = getInProgressRecipes();
      const arrayOfingredients = recipesInProgress.meals[id];
      setIngredientesChecked(arrayOfingredients);
      setType('comida');
    }
    if (window.location.pathname.includes('bebidas')) {
      defaultInProgressRecipes(id, 'drink');
      const recipesInProgress = getInProgressRecipes();
      const arrayOfingredients = recipesInProgress.cocktails[id];
      setIngredientesChecked(arrayOfingredients);
      setType('bebida');
    }
  }, [id]);

  return (
    <div className="ingredientCheckCont">
    <div className="ingredientCheck">
      <h2>Ingredients</h2>
      { recipeInfo.strAlcoholic
        ? <p data-testid="recipe-category">{recipeInfo.strAlcoholic}</p>
        : null }
      <ul>
        { ingredientes.map((key, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-step` }>
            <label htmlFor={ recipeInfo[key] } className="labelCheck">
              <IngredientsCheckboxes
                setIngredientesChecked={ setIngredientesChecked }
                setCheckeds={ setCheckeds }
                ingredientesChecked={ ingredientesChecked }
                recipeInfo={ recipeInfo }
                name={ recipeInfo[key] }
              />
              {' '}
              {recipeInfo[key]}
              {' - '}
              {recipeInfo[`strMeasure${index + 1}`]}

            </label>
            <br />
          </li>
        )) }
      </ul>
      </div>
      <FinishBtn checkeds={ checkeds } type={ type } details={ recipeInfo } />
    </div>
  );
}

IngredientesCheckbox.propTypes = {
  recipeInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};
