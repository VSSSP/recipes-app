import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import RenderFavorites from './Components/renderFavorites';
import MyContext from '../../Context';
import { getFavoriteRecipes } from '../../services/helpers/getFavorites';
import '../../styles/Favorites.css'

export default function ReceitasFavoritas() {
  const { setPageName, setShowButton } = useContext(MyContext);
  const [recipes, setRecipes] = useState([]);
  const [click, setClick] = useState(false);
  const [filterRecipes, setFilterRecipes] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setPageName('Favorite Recipes');
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

  const render = () => (
    filterRecipes.map((recipe,index) => (
      <RenderFavorites recipe={recipe} index={index} click={click} setClick={setClick} />
    ))
  );

  return (
    <div>
      <Header />
      <div>
        <nav className="recipeCategories">
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
        <div className="favCont">
        {!recipes || recipes === [] ? 'Nao tem receitas favoritas' : render()}
        </div>
      </div>
    </div>
  );
}