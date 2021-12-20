import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../../Context/index';
import { getDrinkName } from '../../../services/API';
import '../../../styles/Recipes.css';

export default function DrinksRecomendados() {
  const MIN_LENGTH = 6;
  const { drink, setDrink } = useContext(MyContext);

  useEffect(() => {
    async function fetchDrinks() {
      const drinksInfo = await getDrinkName('');
      setDrink(drinksInfo.drinks);
    }
    fetchDrinks();
  }, [setDrink]);

  return drink.map(({ strDrink, strDrinkThumb, idDrink }, index) => {
    if (index < MIN_LENGTH) {
      return (
        <Link to={ `/bebidas/${idDrink}` }>
          <div
            key={ idDrink }
            data-testid={ `${index}-recomendation-card` }
            className="recipeCards"
          >
            <p data-testid={ `${index}-recomendation-title` }>{ strDrink }</p>
            <img
              data-testid={ `${index}-card-img` }
              src={ strDrinkThumb }
              alt={ strDrink }
              width="150px"
              className="albumImg"
            />
          </div>
        </Link>
      );
    }
    return null;
  });
}
