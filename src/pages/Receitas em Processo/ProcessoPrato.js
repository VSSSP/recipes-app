import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMealId } from '../../services/API';
import IngredientesCheckbox from './components/IngredientesCheckbox';
import shareIcon from '../../images/shareIcon.svg';
import FavoriteButton from '../Receitas/Components/FavoriteButton';
import { defaultInProgressRecipes } from '../../services/helpers/inProgressRecipes';

const copy = require('clipboard-copy');

export default function Prato(props) {
  const [comidaDetalhe, setComidaDetalhe] = useState({});
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    async function fetchDetalhe() {
      const { match: { params: { id } } } = props;
      const comidaInfo = await getMealId(id);
      setComidaDetalhe(comidaInfo.meals[0]);
      defaultInProgressRecipes(id, 'meals');
    }
    fetchDetalhe();
  }, [props]);

  const handleClick = () => {
    const { match: { params: { id } } } = props;
    copy(`http://localhost:3000/comidas/${id}`);
    setCopiado(true);
  };

  return (
    <div className="recipeCont">
      <img
        src={ comidaDetalhe.strMealThumb }
        width="150px"
        alt="Foto da receita pronta"
        data-testid="recipe-photo"
        className='recipeImg'
      />
      <div className='recipeHeader'>
        <h1 data-testid="recipe-title">{comidaDetalhe.strMeal}</h1>
        <p data-testid="recipe-category">{comidaDetalhe.strCategory}</p>
      
        <button type="button" onClick={ handleClick }
        className='shareBtn'>
          <img src={ shareIcon } alt="" data-testid="share-btn" />
        </button>
        {copiado && <p>Link copiado!</p>} 
        <FavoriteButton
          detail={ comidaDetalhe }
          type="comida"
        />
      </div>
      <div className="ingredientCont">
        <IngredientesCheckbox recipeInfo={ comidaDetalhe } />
        <h2>Instructions</h2>
        <p data-testid="instructions">{comidaDetalhe.strInstructions}</p>
      </div>
    </div>
  );
}

Prato.propTypes = {
  match: PropTypes.shape({ params:
    PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};
