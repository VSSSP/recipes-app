import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import '../../styles/Login.css';
import loginGif from "../../images/loginGif.gif";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
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
    history.push('/comidas');
  };
  return (
    <div className="loginDiv">
      <div className="d-flex flex-column justify-content-center login-cont">
        <div
          className="d-flex flex-column align-items-center
          m-auto p-4 border rounded px-5
          shadow-lg bg-body rounded
          login-a"
        >
          <div className="loginHeader">
            <h1 className="text-center">APPetizing</h1>
            <img src={loginGif} alt=""/>
          </div>
          <form onSubmit={ handleClick }>
            <div className="form-floating">
              <input
                data-testid="email-input"
                onChange={ ({ target: { value } }) => setEmail(value) }
                value={ email }
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                data-testid="password-input"
                onChange={ ({ target: { value } }) => setPassword(value) }
                value={ password }
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <Link to="/comidas">
              <button
                data-testid="login-submit-btn"
                disabled={ enableButton() }
                type="submit"
                onClick={ handleClick }
                className="w-100 btn btn-md btn-danger"
              >
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
