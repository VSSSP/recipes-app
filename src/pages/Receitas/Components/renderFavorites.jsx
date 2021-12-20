import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import shareIcon from '../../../images/shareIcon.svg'
import FavButton2 from './FavButton2';

const copy = require('clipboard-copy');

function RenderFavorites(props) {
  const {recipe, index, click, setClick} = props;
  const [copied, setCopied] = useState(false)

  const handleCopy = (type, id) => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setCopied(true);
  };

  return (
    <div key={ index } className="favCard">
      <Link to={ `/${recipe.type}s/${recipe.id}` } className="imgDiv">
        <img
          src={ recipe.image }
          alt={ recipe.title }
          data-testid={ `${index}-horizontal-image` }
          width="150px"
        />
      </Link>
      <div className="favText">
        <div>
          <p data-testid={ `${index}-horizontal-top-text` } className="hori">
            {recipe.type === 'comida' ? `${recipe.area} - ` : ''}
            {recipe.type === 'bebida' ? `${recipe.alcoholicOrNot} - ` : ''}
            {recipe.category}
          </p>
          <Link to={ `/${recipe.type}s/${recipe.id}` } className="recipeName">
            <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
          </Link>
        </div>
        <div className="butons">
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            onClick={ () => handleCopy(recipe.type, recipe.id) }
            className='shareBtn'
          >
            <img src={ shareIcon } alt="" />
          </button>
          {copied && 'Link copiado!'}
          <FavButton2
            detail={ recipe }
            type={ recipe.type }
            setClick={ setClick }
            click={ click }
            index={ index }
          />
        </div>
      </div>
    </div>
  )
}
export default RenderFavorites
