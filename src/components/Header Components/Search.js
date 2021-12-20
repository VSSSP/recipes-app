import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Search.css';

export default function Search({ handleClick, setSearchValue, setValue }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        data-testid="search-input"
        onChange={ (e) => setValue(e.target.value) }
      />
      <div>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ handleClick }
        >
          Buscar
        </button>
      </div>
      <div>
        <label htmlFor="ing">
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            id="ing"
            name="search"
            value="ingredient"
            onClick={ ({ target }) => setSearchValue(target.value) }
          />
          {' '}
          Ingrediente
        </label>
        <label htmlFor="name" className="ing">
          <input
            type="radio"
            data-testid="name-search-radio"
            id="name"
            name="search"
            value="name"
            onClick={ ({ target }) => setSearchValue(target.value) }
          />
          {' '}
          Nome
        </label>
        <label htmlFor="first" className="ing">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            id="first"
            name="search"
            value="first"
            onClick={ ({ target }) => setSearchValue(target.value) }
          />
          {' '}
          Primeira Letra
        </label>
      </div>
    </div>
  );
}

Search.propTypes = {
  handleClick: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};
