import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getDrinkId } from '../../services/API';
import IngredientesCheckbox from './components/IngredientesCheckbox';
import shareIcon from '../../images/shareIcon.svg';
import FavoriteButton from '../Receitas/Components/FavoriteButton';
import { defaultInProgressRecipes } from '../../services/helpers/inProgressRecipes';

const copy = require('clipboard-copy');

export default function Drink(props) {
  const [drinkDetalhe, setDrinkDetalhe] = useState({});
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    async function fetchDetalhe() {
      const { match: { params: { id } } } = props;
      const drinkInfo = await getDrinkId(id);
      setDrinkDetalhe(drinkInfo.drinks[0]);
      defaultInProgressRecipes(id, 'drink');
    }
    fetchDetalhe();
  }, [props]);

  const handleClick = () => {
    const { match: { params: { id } } } = props;
    copy(`http://localhost:3000/bebidas/${id}`);
    setCopiado(true);
  };

  return (
    <div className="recipeCont">
      <img
        src={ drinkDetalhe.strDrinkThumb }
        width="150px"
        alt="Foto da receita pronta"
        data-testid="recipe-photo"
        className='recipeImg'
      />
      <div className='recipeHeader'>
        <h1 data-testid="recipe-title">{drinkDetalhe.strDrink}</h1>
        <p data-testid="recipe-category">{drinkDetalhe.strCategory}</p>
        <button type="button" onClick={ handleClick }
        className='shareBtn'>
          <img src={ shareIcon } alt="" data-testid="share-btn" />
        </button>
        {copiado && <p>Link copiado!</p>}
        <FavoriteButton
          detail={ drinkDetalhe }
          type="bebida"
        />
      </div>
      <div className="ingredientCont">
        <IngredientesCheckbox recipeInfo={ drinkDetalhe } />
        <p data-testid="instructions">{drinkDetalhe.strInstructions}</p>
      </div>
    </div>
  );
}

Drink.propTypes = {
  match: PropTypes.shape({ params:
    PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};
