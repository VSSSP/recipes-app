import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import MyContext from '../../Context';
import { getDoneRecipes } from '../../services/helpers/doneRecipes';
import shareIcon from '../../images/shareIcon.svg';

const copy = require('clipboard-copy');

export default function ReceitasFeitas() {
  const { setPageName, setShowButton } = useContext(MyContext);
  const [copied, setCopied] = useState(false);
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filterRecipes, setFilterRecipes] = useState([]);

  useEffect(() => {
    setPageName('Receitas Feitas');
    setShowButton(false);
  }, [setPageName, setShowButton]);

  const handleCopy = (type, id) => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setCopied(true);
  };

  useEffect(() => {
    const getRecipes = getDoneRecipes();
    setDoneRecipes(getRecipes);
    setFilterRecipes(getRecipes);
  }, []);

  const handleClick = ({ target: { name } }) => {
    if (name !== 'all') {
      const filteredRecipes = doneRecipes.filter((recipe) => recipe.type === name);
      setFilterRecipes(filteredRecipes);
    }
    if (name === 'all') {
      setFilterRecipes(doneRecipes);
    }
  };

  const renderRecipes = () => (
    filterRecipes.map((recipe, index) => (
      <div key={ index }>
        <Link to={ `/${recipe.type}s/${recipe.id}` }>
          <img
            src={ recipe.image }
            alt={ `Imagem de ${recipe.name}` }
            data-testid={ `${index}-horizontal-image` }
            width="150px"
          />
        </Link>
        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          {`${recipe.type === 'comida' ? `${recipe.area} - ` : ''} ${recipe.category}`}
          {' '}
          {`${recipe.type === 'bebida' ? recipe.alcoholicOrNot : ''}`}
        </p>
        <Link to={ `/${recipe.type}s/${recipe.id}` }>
          <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
        </Link>
        <p
          data-testid={ `${index}-horizontal-done-date` }
        >
          {recipe.doneDate.split('T')[0]}
        </p>
        <button
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          onClick={ () => handleCopy(recipe.type, recipe.id) }
        >
          <img src={ shareIcon } alt="" />
        </button>
        { copied ? <p>Link copiado!</p> : null }
        <span>
          Tags:
          { recipe.tags.map((tag, i) => (
            <p key={ i } data-testid={ `${index}-${tag}-horizontal-tag` }>{tag}</p>)) }
        </span>
        { recipe.type === 'comida' ? <p>{ recipe.area }</p> : null }
      </div>
    )));

  return (
    <div>
      <Header />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        name="all"
        onClick={ handleClick }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        name="comida"
        onClick={ handleClick }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        name="bebida"
        onClick={ handleClick }
      >
        Drink
      </button>
      { renderRecipes() }
    </div>
  );
}
