import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { getFoodFilter, getMealName } from '../../../services/API';
import MyContext from '../../../Context';

export default function Button({ strCategory }) {
  const { setFood, nome, setNome } = useContext(MyContext);

  const handleClick = async ({ target: { name } }) => {
    if (nome !== strCategory) {
      const data = await getFoodFilter(name);
      setFood(data.meals);
      setNome(strCategory);
    } else {
      const data = await getMealName('');
      setFood(data.meals);
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
      { strCategory }
    </button>
  );
}

Button.propTypes = {
  strCategory: PropTypes.string.isRequired,
};
