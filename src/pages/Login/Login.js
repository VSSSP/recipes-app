import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailValidation = () => {
    const emailCheck = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    // Validação de email retirada de:
    // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    return emailCheck.test(email);
  };

  const enableButton = () => {
    const MIN_VALUE = 7;
    if (password.length < MIN_VALUE) return true;
    if (!emailValidation()) return true;
    return false;
  };

  const handleClick = () => {
    const tokenPadrao = 1;
    const user = {
      email,
    };
    localStorage.setItem('mealsToken', tokenPadrao);
    localStorage.setItem('cocktailsToken', tokenPadrao);
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <div>
      <input
        data-testid="email-input"
        onChange={ ({ target: { value } }) => setEmail(value) }
        value={ email }
        type="email"
      />
      <input
        data-testid="password-input"
        onChange={ ({ target: { value } }) => setPassword(value) }
        value={ password }
        type="password"
      />
      <Link to="/comidas">
        <button
          data-testid="login-submit-btn"
          disabled={ enableButton() }
          type="button"
          onClick={ handleClick }
        >
          Submit
        </button>
      </Link>

    </div>
  );
}
