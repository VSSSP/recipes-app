import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { getDrinkFilter, getDrinkName } from '../../../services/API';
import MyContext from '../../../Context';

export default function Button({ strCategory }) {
  const { setDrink, nome, setNome } = useContext(MyContext);

  const handleClick = async ({ target: { name } }) => {
    if (nome !== strCategory) {
      const data = await getDrinkFilter(name);
      setDrink(data.drinks);
      setNome(strCategory);
    } else {
      const data = await getDrinkName('');
      setDrink(data.drinks);
      setNome('');
    }
  };

  return (
    <button
      type="button"
      key={ strCategory }
      name={ strCategory }
      data-testid={ `${strCategory}-category-filter` }
      onClick={ handleClick }
    >
      {strCategory}
    </button>
  );
}

Button.propTypes = {
  strCategory: PropTypes.string.isRequired,
};
