import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import getUser from '../../services/helpers/getUser';
import '../../styles/Perfil.css';

export default function Perfil() {
  const { setPageName, setShowButton } = useContext(MyContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    setPageName('Profile');
    setShowButton(false);
    const getUsuario = getUser();
    setUser(getUsuario);
  }, [setPageName, setShowButton]);

  const handleClick = () => {
    localStorage.clear();
  };

  return (
    <div>
      <Header />
      <div className="perfil-cont">
        <div className="email-cont">
          <p data-testid="profile-email">{user ? user.email : 'Nenhum usuário encontrado'}</p>
        </div>
        <div className="btn-cont">
          <Link to="/receitas-feitas">
            <button
              data-testid="profile-done-btn"
              type="button"
              className='profileBtn'
            >
              Recipes Done
            </button>
          </Link>
          <Link to="/receitas-favoritas">
            <button
              data-testid="profile-favorite-btn"
              type="button"
              className='profileBtn logout'
            >
              Favorite Recipes
            </button>
          </Link>
          <Link to="/">
            <button
              data-testid="profile-logout-btn"
              type="button"
              onClick={ handleClick }
              className='profileBtn'
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
