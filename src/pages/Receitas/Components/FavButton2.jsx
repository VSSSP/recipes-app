import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clickFav2 from './clickFav2';
import { getFavoriteRecipes } from '../../../services/helpers/getFavorites';
import blackHeart from '../../../images/blackHeartIcon.svg';
import whiteHeart from '../../../images/whiteHeartIcon.svg';

export default function FavButton2({ detail, type, setClick, click, index }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getFavoriteRecipes();
    setIsFavorite(favorites.some((favorite) => favorite.id === detail.id));
  }, [detail, type, setIsFavorite]);

  return (
    <div>
      <button
        type="button"
        onClick={ () => {
          clickFav2(type, detail, setIsFavorite);
          setClick(!click);
        } }
        className='favBtn'
      >
        <img
          src={ isFavorite ? blackHeart : whiteHeart }
          alt="favorite button"
          data-testid={ `${index}-horizontal-favorite-btn` }
        />
      </button>
    </div>
  );
}

FavButton2.propTypes = {
  detail: PropTypes.shape(PropTypes.any).isRequired,
  type: PropTypes.string.isRequired,
  setClick: PropTypes.func.isRequired,
  click: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};
