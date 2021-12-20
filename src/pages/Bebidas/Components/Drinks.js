import React from 'react';
import { Link } from 'react-router-dom';

export default function Drinks({ drink }) {
  const MIN_LENGTH = 12;

  return drink.map(({ strDrink, strDrinkThumb, idDrink }, index) => {
    if (index < MIN_LENGTH) {
      return (
        <Link to={ `/bebidas/${idDrink}` } key={ idDrink } data-testid={ `${index}-recipe-card` } className="recipeCards">
          <div className="imgCont">
            <img
              data-testid={ `${index}-card-img` }
              src={ strDrinkThumb }
              alt={ strDrink }
              width="150px"
              className="albumImg"
            />
          </div>
          <div className="infoCont">
            <p data-testid={ `${index}-card-name` }>{ strDrink }</p>
          </div>
        </Link>
      );
    }
    return null;
  });
}
