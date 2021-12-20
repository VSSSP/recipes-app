import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import { getRandomDrink } from '../../services/API';

export default function ExplorarBebidas() {
  const { setPageName, setShowButton } = useContext(MyContext);
  const [random, setRandom] = useState({});

  useEffect(() => {
    async function fetchRandomDrink() {
      const randomDrink = await getRandomDrink();
      setRandom(randomDrink.drinks[0]);
    }
    fetchRandomDrink();
    setPageName('Explorar Bebidas');
    setShowButton(false);
  }, [setPageName, setShowButton]);

  return (
    <div>
      <Header />
      <Link to="/explorar/bebidas/ingredientes">
        <button
          data-testid="explore-by-ingredient"
          type="button"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to={ `/bebidas/${random.idDrink}` }>
        <button data-testid="explore-surprise" type="button">Me Surpreenda!</button>
      </Link>
      <Footer />
    </div>
  );
}
