import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDoneRecipes } from '../../../services/helpers/doneRecipes';
import { defaultRecipes,
  getInProgressRecipes } from '../../../services/helpers/inProgressRecipes';
import handleClick from './handleClick';

export default function StartBtn(props) {
  const [verificar, setVerificar] = useState(false);
  const { path } = props;
  const id = window.location.pathname.split('/')[2];
  const caminho = window.location.pathname;
  const [doneRecipe, setDoneRecipe] = useState(false);

  useEffect(() => {
    defaultRecipes();
    const recipe = getInProgressRecipes();
    if (caminho.includes('comidas')) {
      return recipe.meals[id] ? setVerificar(true) : setVerificar(false);
    }

    if (caminho.includes('bebidas')) {
      return recipe.cocktails[id] ? setVerificar(true) : setVerificar(false);
    }
  }, [id, caminho]);

  useEffect(() => {
    const getDone = getDoneRecipes();
    const alreadyDone = getDone.some((recipe) => recipe.id === id);
    setDoneRecipe(alreadyDone);
  }, [id]);

  return (
    <Link to={ path }>
      <button
        className="startBtn"
        data-testid="start-recipe-btn"
        type="button"
        style={ doneRecipe ? { display: 'none' } : { display: 'block' } }
        onClick={ () => handleClick(verificar, caminho, id) }
      >
        {verificar ? 'Continue Recipe' : 'Start Recipe'}
      </button>
    </Link>
  );
}

StartBtn.propTypes = {
  path: PropTypes.string.isRequired,
};
