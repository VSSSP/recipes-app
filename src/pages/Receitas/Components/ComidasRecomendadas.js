import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../../Context/index';
import { getMealName } from '../../../services/API';

export default function Recomendadas() {
  const MIN_LENGTH = 6;
  const { food, setFood } = useContext(MyContext);

  useEffect(() => {
    async function fetchMeals() {
      const mealsInfo = await getMealName('');
      setFood(mealsInfo.meals);
    }
    fetchMeals();
  }, [setFood]);

  return food.map(({ strMeal, strMealThumb, idMeal }, index) => {
    if (index < MIN_LENGTH) {
      return (
        <Link to={ `/comidas/${idMeal}` }>
          <div
            key={ idMeal }
            data-testid={ `${index}-recomendation-card` }
            className="recipeCards"
          >
            <p data-testid={ `${index}-recomendation-title` }>{ strMeal }</p>
            <img
              data-testid={ `${index}-card-img` }
              src={ strMealThumb }
              alt={ strMeal }
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
