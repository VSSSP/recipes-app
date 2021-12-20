import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import '../../styles/Explorar.css'

export default function Explorar() {
  const { setPageName, setShowButton } = useContext(MyContext);

  useEffect(() => {
    setPageName('Explore');
    setShowButton(false);
  }, [setPageName, setShowButton]);

  return (
    <div className='exploreDiv'>
      <Header />
      <div className="btn-cont">
        <Link to="/explorar/comidas">
          <button className='exploreBtn' data-testid="explore-food" type="button">Explorar Comidas</button>
        </Link>
        <Link to="/explorar/bebidas">
          <button className='exploreBtn' data-testid="explore-drinks" type="button">Explorar Bebidas</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
