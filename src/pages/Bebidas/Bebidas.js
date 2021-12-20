import React, { useContext, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import { getDrinkName } from '../../services/API';
import DrinkCategories from './Components/DrinkCategories';
import Drinks from './Components/Drinks';

export default function Bebidas() {
  const { setPageName, setShowButton, drink, setDrink } = useContext(MyContext);

  useEffect(() => {
    setPageName('Drinks');
    setShowButton(true);
  }, [setPageName, setShowButton]);

  useEffect(() => {
    getDrinkName('').then((response) => {
      if (drink.length === 0) {
        setDrink(response.drinks);
      }
    });
  }, [setDrink, drink]);

  return (
    <div>
      <Header />
      <DrinkCategories />
      <div className="recipeCardsDiv">
        { drink ? <Drinks drink={ drink } /> : null }
      </div>
      <Footer />
    </div>
  );
}
