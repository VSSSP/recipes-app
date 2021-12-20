import React, { useEffect, useState, useContext } from 'react';
import { getDrinkCategories, getDrinkName } from '../../../services/API';
import Button from './Button';
import MyContext from '../../../Context';

export default function DrinkCategories() {
  const [drinkCategories, setDrinkCategories] = useState([]);
  const { setDrink, setNome } = useContext(MyContext);
  const MIN_CATEGORIES = 0;
  const MAX_CATEGORIES = 5;

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getDrinkCategories();
      setDrinkCategories(categories.drinks.slice(MIN_CATEGORIES, MAX_CATEGORIES));
    };
    fetchCategories();
  }, [setDrinkCategories]);

  const handleClick = async () => {
    const data = await getDrinkName('');
    setDrink(data.drinks);
    setNome('');
  };

  return (
    <div className="recipeCategories">
      { drinkCategories
        .map(({ strCategory }) => (
          <Button key={ strCategory } strCategory={ strCategory } />)) }
      <button
        type="button"
        onClick={ handleClick }
        data-testid="All-category-filter"
      >
        All
      </button>
    </div>
  );
}
