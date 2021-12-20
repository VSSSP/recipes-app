import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import handleDoneRecipes from './handleDoneRecipes';

export default function FinishBtn(props) {
  const { checkeds, details, type } = props;
  const enableBtn = () => {
    const checks = document.querySelectorAll('.inputCheck').length;
    if (checks === checkeds) {
      return false;
    }
    return true;
  };

  return (
    <div className="finshBtnCont">
      <Link to="/receitas-feitas">
        <button
          data-testid="finish-recipe-btn"
          type="button"
          disabled={ enableBtn() }
          className="finishBtn"
          onClick={ () => handleDoneRecipes(type, details) }
        >
          Finish Recipe
        </button>
      </Link>
    </div>
  );
}

FinishBtn.propTypes = {
  checkeds: PropTypes.number.isRequired,
  details: PropTypes.objectOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
};
