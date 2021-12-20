import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import {
  getMealIngredientList,
  getMealIngredients,
  getMealName } from '../../services/API';

export default function ExplorarIngredientesComidas() {
  const { setPageName, setShowButton, setFood, food } = useContext(MyContext);
  const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    setPageName('Explore Ingredients');
    setShowButton(false);
  }, [setPageName, setShowButton]);

  useEffect(() => {
    async function fetchIngredientList() {
      const listOfIngredients = await getMealIngredientList();
      setIngredientList(listOfIngredients.meals);
      console.log(typeof listOfIngredients.meals[0].strIngredient);
    }
    fetchIngredientList();
  }, []);

  useEffect(() => {
    async function fetchMeals() {
      const mealsInfo = await getMealName('');
      if (food.length === 0) {
        setFood(mealsInfo.meals);
      }
    }
    fetchMeals();
  }, [setFood, food]);

  async function fetchMealsByIngredient(ingredient) {
    const mealsByIngredient = await getMealIngredients(ingredient);
    setFood(mealsByIngredient.meals);
  }

  function renderIngredientList() {
    const MIN_LENGTH = 12;
    return ingredientList.map(({ strIngredient, idIngredient }, index) => {
      if (index < MIN_LENGTH) {
        return (
          <Link
            onClick={ async () => {
              await fetchMealsByIngredient(strIngredient);
            } }
            to="/comidas"
            className="recipeCards"
            key={ idIngredient }
            data-testid={ `${index}-ingredient-card` }
          >
            <div className="imgCont">
              <img
                data-testid={ `${index}-card-img` }
                src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
                alt={ strIngredient }
                width="150px"
              />
            </div>
            <div className="infoCont">
              <p data-testid={ `${index}-card-name` }>{ strIngredient }</p>
            </div>
          </Link>
        );
      }
      return null;
    });
  }

  return (
    <div>
      <Header />
      <div className="recipeCardsDiv">
        { renderIngredientList() }
      </div>
      <Footer />
    </div>
  );
}
