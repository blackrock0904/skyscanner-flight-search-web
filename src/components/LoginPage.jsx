import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/actions';
import { Error } from './Error';
import styles from './LoginPage.module.css';


export const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputs, setInputs] = useState({
    login: '',
    password: '',
    loginIsValid: true,
    passwordIsValid: true
  });

  if (localStorage.getItem('myLog', 'myPas')) {
    dispatch(logIn());
    history.push('/flights');
  }

  function handleChange({ target: { value, name } }) {
    setInputs({ ...inputs, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const log = !!inputs.login.match(/[\w]{3,}@[a-zA-Z]{2,}.[a-zA-Z]{2}/);
    const pas = !!inputs.password.match(/[^а-яА-ЯёЁ]{8,}/);
    await setInputs({ ...inputs, loginIsValid: log, passwordIsValid: pas });
    if (log && pas) {
      localStorage.setItem('myLog', inputs.login, 'myPas', inputs.password);
      dispatch(logIn());
      history.push('/flights');
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.mid}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.title}>Simple Flight Check</div>
          <label>
            Логин:
            <input className={!inputs.loginIsValid && styles.red || null} name='login' onChange={handleChange} value={inputs.login} />
            {!inputs.loginIsValid && <Error message={'Почта вида XXX@XX.XX'} />}
          </label>
          <label>
            Пароль:
            <input className={!inputs.passwordIsValid && styles.red || null} name='password' onChange={handleChange} value={inputs.password} />
            {!inputs.passwordIsValid && <Error message={'Минимум 8 символов, без кирилицы'} />}
          </label>
          <button type='submit'>Войти</button>
        </form>
      </div>
    </div>
  )
}
