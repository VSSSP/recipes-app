import React from 'react';
import PropTypes from 'prop-types';

export default function Explore({ showButton, searchClick, searchIcon, setSearchClick }) {
  if (!showButton) {
    return null;
  }
  return (
    <button type="button" onClick={ () => setSearchClick(!searchClick) }>
      <img src={ searchIcon } alt="searchIcon" data-testid="search-top-btn" />
    </button>
  );
}

Explore.propTypes = {
  showButton: PropTypes.bool.isRequired,
  searchClick: PropTypes.bool.isRequired,
  searchIcon: PropTypes.string.isRequired,
  setSearchClick: PropTypes.func.isRequired,
};
