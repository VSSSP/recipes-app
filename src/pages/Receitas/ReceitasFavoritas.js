import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import MyContext from '../../Context';
import { getFavoriteRecipes } from '../../services/helpers/getFavorites';
import shareIcon from '../../images/shareIcon.svg';
import FavButton2 from './Components/FavButton2';

const copy = require('clipboard-copy');

export default function ReceitasFavoritas() {
  const { setPageName, setShowButton } = useContext(MyContext);
  const [recipes, setRecipes] = useState([]);
  const [filterRecipes, setFilterRecipes] = useState([]);
  const [copied, setCopied] = useState(false);
  const [click, setClick] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setPageName('Receitas Favoritas');
    setShowButton(false);
  }, [setPageName, setShowButton]);

  useEffect(() => {
    setRecipes(getFavoriteRecipes());
    setFilterRecipes(getFavoriteRecipes());
  }, [click]);

  useEffect(() => {
    if (filter === '') {
      setFilterRecipes(getFavoriteRecipes());
    } else {
      const filteredRecipes = recipes.filter((recipe) => recipe.type === filter);
      setFilterRecipes(filteredRecipes);
    }
  }, [filter, recipes]);

  const handleCopy = (type, id) => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setCopied(true);
  };

  const renderFavorites = () => (
    filterRecipes.map((recipe, index) => (
      <div key={ index }>
        <Link to={ `/${recipe.type}s/${recipe.id}` }>
          <img
            src={ recipe.image }
            alt={ recipe.title }
            data-testid={ `${index}-horizontal-image` }
            width="300px"
          />
        </Link>
        <h3 data-testid={ `${index}-horizontal-top-text` }>
          {recipe.type === 'comida' ? `${recipe.area} - ` : ''}
          {recipe.type === 'bebida' ? `${recipe.alcoholicOrNot} - ` : ''}
          {recipe.category}
        </h3>
        <Link to={ `/${recipe.type}s/${recipe.id}` }>
          <h3 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h3>
        </Link>
        <button
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          onClick={ () => handleCopy(recipe.type, recipe.id) }
        >
          <img src={ shareIcon } alt="" />
        </button>
        {copied && 'Link copiado!'}
        <FavButton2
          detail={ recipe }
          type={ recipe.type }
          setClick={ setClick }
          click={ click }
          index={ index }
        />
      </div>
    ))
  );

  return (
    <div>
      <Header />
      <div>
        <nav>
          <button
            type="button"
            data-testid="filter-by-all-btn"
            onClick={ () => setFilter('') }
          >
            All
          </button>
          <button
            type="button"
            data-testid="filter-by-food-btn"
            onClick={ () => setFilter('comida') }
          >
            Food
          </button>
          <button
            type="button"
            data-testid="filter-by-drink-btn"
            value="bebida"
            onClick={ () => setFilter('bebida') }
          >
            Drink
          </button>
        </nav>
        {!recipes || recipes === [] ? 'Nao tem receitas favoritas' : renderFavorites()}
      </div>
    </div>
  );
}
