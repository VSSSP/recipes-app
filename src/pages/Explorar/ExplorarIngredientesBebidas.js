import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import {
  getDrinkIngredientList,
  getDrinkIngredients,
  getDrinkName } from '../../services/API';

export default function ExplorarIngredientesBebidas() {
  const { setPageName, setShowButton, setDrink, drink } = useContext(MyContext);
  const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    setPageName('Explore Ingredients');
    setShowButton(false);
  }, [setPageName, setShowButton]);

  useEffect(() => {
    async function fetchIngredientList() {
      const listOfIngredients = await getDrinkIngredientList();
      setIngredientList(listOfIngredients.drinks);
      console.log(listOfIngredients.drinks);
    }
    fetchIngredientList();
  }, []);

  useEffect(() => {
    getDrinkName('').then((response) => {
      if (drink.length === 0) {
        setDrink(response.drinks);
      }
    });
  }, [setDrink, drink]);

  async function fetchMealsByIngredient(ingredient) {
    const drinksByIngredient = await getDrinkIngredients(ingredient);
    setDrink(drinksByIngredient.drinks);
  }

  function renderIngredientList() {
    const MIN_LENGTH = 12;
    return ingredientList.map(({ strIngredient1 }, index) => {
      if (index < MIN_LENGTH) {
        return (
          <Link
            onClick={ async () => {
              await fetchMealsByIngredient(strIngredient1);
            } }
            to="/bebidas"
            key={ strIngredient1 }
            data-testid={ `${index}-ingredient-card` }
            className="recipeCards"
          >
            <div className="imgCont">
              <img
                data-testid={ `${index}-card-img` }
                src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
                alt={ strIngredient1 }
                width="150px"
              />
            </div>
            <div className="infoCont">
              <p data-testid={ `${index}-card-name` }>{ strIngredient1 }</p>
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
        {renderIngredientList()}
      </div>
      <Footer />
    </div>
  );
}
