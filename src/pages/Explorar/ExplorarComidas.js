import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import { getRandomFood } from '../../services/API';

export default function ExplorarComidas() {
  const { setPageName, setShowButton } = useContext(MyContext);
  const [random, setRandom] = useState({});

  useEffect(() => {
    async function fetchRandomFood() {
      const randomFood = await getRandomFood();
      setRandom(randomFood.meals[0]);
    }
    fetchRandomFood();
    setPageName('Explorar Comidas');
    setShowButton(false);
  }, [setPageName, setShowButton, setRandom]);

  return (
    <div>
      <Header />
      <Link to="/explorar/comidas/ingredientes">
        <button
          data-testid="explore-by-ingredient"
          type="button"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/comidas/area">
        <button data-testid="explore-by-area" type="button">Por Local de Origem</button>
      </Link>
      <Link to={ `/comidas/${random.idMeal}` }>
        <button data-testid="explore-surprise" type="button">Me Surpreenda!</button>
      </Link>
      <Footer />
    </div>
  );
}
