import React from 'react';
import PropTypes from 'prop-types';

export default function Explore({ showButton, searchClick, searchIcon, setSearchClick }) {
  if (!showButton) {
    return null;
  }
  return (
    <div className="explore">
      <div
        onClick={ () => setSearchClick(!searchClick) }
        role="button"
        tabIndex="0"
        onKeyPress={ () => setSearchClick(!searchClick) }
        className="explore"
      >
        <img src={ searchIcon } alt="searchIcon" data-testid="search-top-btn" className="im"/>
      </div>
    </div>
  );
}

Explore.propTypes = {
  showButton: PropTypes.bool.isRequired,
  searchClick: PropTypes.bool.isRequired,
  searchIcon: PropTypes.string.isRequired,
  setSearchClick: PropTypes.func.isRequired,
};
