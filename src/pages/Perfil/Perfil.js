import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import getUser from '../../services/helpers/getUser';

export default function Perfil() {
  const { setPageName, setShowButton } = useContext(MyContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    setPageName('Perfil');
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
      <p data-testid="profile-email">{user ? user.email : 'Nenhum usuário encontrado'}</p>
      <Link to="/receitas-feitas">
        <button
          data-testid="profile-done-btn"
          type="button"
        >
          Receitas Feitas
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button
          data-testid="profile-favorite-btn"
          type="button"
        >
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/">
        <button
          data-testid="profile-logout-btn"
          type="button"
          onClick={ handleClick }
        >
          Sair
        </button>
      </Link>
      <Footer />
    </div>
  );
}
