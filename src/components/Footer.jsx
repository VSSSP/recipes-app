import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div data-testid="footer" className="footer">
      <div className="footerIcon">
        <Link to="/comidas">
          <img src={ mealIcon } alt="" data-testid="food-bottom-btn" />
        </Link>
      </div>
      <div className="footerIcon">
        <Link to="/explorar">
          <img src={ exploreIcon } alt="" data-testid="explore-bottom-btn" />
        </Link>
      </div>
      <div className="footerIcon">
        <Link to="/bebidas">
          <img src={ drinkIcon } alt="" data-testid="drinks-bottom-btn" />
        </Link>
      </div>
    </div>
  );
}
