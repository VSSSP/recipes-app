import React, { useEffect, useState, useContext } from 'react';
import { getFoodCategories, getMealName } from '../../../services/API';
import Button from './Button';
import MyContext from '../../../Context';
import '../../../styles/RecipeCategories.css';

export default function FoodCategories() {
  const [foodCategories, setFoodCategories] = useState([]);
  const { setFood, setNome } = useContext(MyContext);
  const MIN_CATEGORIES = 0;
  const MAX_CATEGORIES = 5;

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getFoodCategories();
      setFoodCategories(categories.meals.slice(MIN_CATEGORIES, MAX_CATEGORIES));
    };
    fetchCategories();
  }, [setFoodCategories]);

  const handleClick = async () => {
    const data = await getMealName('');
    setFood(data.meals);
    setNome('');
  };

  return (
    <div className="recipeCategories">
      { foodCategories.map(({ strCategory }) => (
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
