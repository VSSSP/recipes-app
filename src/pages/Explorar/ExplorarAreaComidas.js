import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import { getArea, getMealArea, getMealName } from '../../services/API';

export default function ExplorarAreaComidas() {
  const { setPageName, setShowButton } = useContext(MyContext);
  const [area, setArea] = useState([]);
  const [food, setFood] = useState([]);
  const [filterArea, setFilterArea] = useState('All');
  const MAX_CARD = 12;

  useEffect(() => {
    setPageName('Explore Origin');
    setShowButton(true);
  }, [setPageName, setShowButton]);

  useEffect(() => {
    getArea().then((response) => {
      setArea(response.meals);
    });
  }, []);

  useEffect(() => {
    if (filterArea === 'All') {
      getMealName('').then((response) => {
        setFood(response.meals);
      });
    } else {
      getMealArea(filterArea).then((response) => {
        setFood(response.meals);
      });
    }
  }, [filterArea]);

  return (
    <div>
      <Header />
      <div className="explore-area">
        <select
          name="area"
          id="area"
          data-testid="explore-by-area-dropdown"
          onChange={ (e) => (setFilterArea(e.target.value)) }
        >
          <option value="All" data-testid="All-option">All</option>
          {area.map((areas) => (
            <option
              key={ areas.strArea }
              value={ areas.strArea }
              data-testid={ `${areas.strArea}-option` }
            >
              {areas.strArea}
            </option>
          ))}
        </select>
      </div>
      <div className="recipeCardsDiv">
        {food.map((foods, index) => {
          if (index < MAX_CARD) {
            return (
              <Link
                to={ `/comidas/${foods.idMeal}` }
                key={ foods.idMeal }
                data-testid={ `${index}-recipe-card` }
                className="recipeCards" 
              >
                <div className="imgCont">
                  <img
                    src={ foods.strMealThumb }
                    alt={ foods.strMeal }
                    data-testid={ `${index}-card-img` }
                    width="100px"
                    className="albumImg"
                  />
                </div>
                <div className="infoCont">
                  <p data-testid={ `${index}-card-name` }>{foods.strMeal}</p>
                </div>
              </Link>
            );
          } return null;
        })}
      </div>
      <Footer />
    </div>
  );
}
