import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ handleClick, setSearchValue, setValue }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        data-testid="search-input"
        onChange={ (e) => setValue(e.target.value) }
      />
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
          Ingrediente
        </label>
        <label htmlFor="name">
          <input
            type="radio"
            data-testid="name-search-radio"
            id="name"
            name="search"
            value="name"
            onClick={ ({ target }) => setSearchValue(target.value) }
          />
          Nome
        </label>
        <label htmlFor="first">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            id="first"
            name="search"
            value="first"
            onClick={ ({ target }) => setSearchValue(target.value) }
          />
          Primeira Letra
        </label>
      </div>
      <div>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ handleClick }
        >
          Buscar
        </button>
      </div>
    </div>
  );
}

Search.propTypes = {
  handleClick: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};
