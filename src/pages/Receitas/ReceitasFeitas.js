import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import MyContext from '../../Context';
import { getDoneRecipes } from '../../services/helpers/doneRecipes';
import shareIcon from '../../images/shareIcon.svg';
import '../../styles/Done.css';

const copy = require('clipboard-copy');

export default function ReceitasFeitas() {
  const { setPageName, setShowButton } = useContext(MyContext);
  const [copied, setCopied] = useState(false);
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filterRecipes, setFilterRecipes] = useState([]);

  useEffect(() => {
    setPageName('Recipes Done');
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
      <div className='doneCont'>
      <div key={ index } className='doneCard'>
        <Link to={ `/${recipe.type}s/${recipe.id}` } className="imgDiv">
          <img
            src={ recipe.image }
            alt={ `Imagem de ${recipe.name}` }
            data-testid={ `${index}-horizontal-image` }
            width="150px"
          />
        </Link>
        <div className="favText">
          <p
            data-testid={ `${index}-horizontal-top-text` } className="hori"
          >
            {`${recipe.type === 'comida' ? `${recipe.area} - ` : ''} ${recipe.category}`}
            {' '}
            {`${recipe.type === 'bebida' ? recipe.alcoholicOrNot : ''}`}
          </p>
          <div className='doneNameBtn'>
          <Link to={ `/${recipe.type}s/${recipe.id}` }>
            <p data-testid={ `${index}-horizontal-name` } className="recipeName">{recipe.name}</p>
          </Link>
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            onClick={ () => handleCopy(recipe.type, recipe.id) }
            className= "shareBtn"
          >
            <img src={ shareIcon } alt="" />
          </button>
          </div>
          <p
            data-testid={ `${index}-horizontal-done-date` }
          >
            {recipe.doneDate.split('T')[0]}
          </p>
          { copied ? <p>Link copiado!</p> : null }
          <span className='racipeTag'>
            Tags:
            { recipe.tags.map((tag, i) => (
              <p key={ i } data-testid={ `${index}-${tag}-horizontal-tag` }>{tag}</p>)) }
          </span>
          { recipe.type === 'comida' ? <p>{ recipe.area }</p> : null }
        </div>
      </div>
      </div>
    )));

  return (
    <div>
      <Header />
      <nav className="recipeCategories">
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
      </nav>
      { renderRecipes() }
    </div>
  );
}
