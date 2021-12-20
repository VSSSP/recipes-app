import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '.';

function Provider({ children }) {
  const [pageName, setPageName] = useState('');
  const [showButton, setShowButton] = useState(true);
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const [nome, setNome] = useState('');
  const [click, setClick] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const contextValue = {
    pageName,
    setPageName,
    showButton,
    setShowButton,
    setFood,
    food,
    setDrink,
    drink,
    nome,
    setNome,
    click,
    setClick,
    isFavorite,
    setIsFavorite,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
