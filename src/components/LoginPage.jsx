import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/actions';
import styles from './LoginPage.module.css';


export const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputs, setInputs] = useState({
    login: '',
    password: ''
  });

  if (localStorage.getItem('myLog', 'myPas')) {
    dispatch(logIn());
    history.push('/flights');
  }

  function handleChange({ target: { value, name } }) {
    setInputs({ ...inputs, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('myLog', inputs.login, 'myPas', inputs.password);
    dispatch(logIn())
    history.push('/flights');
  }

  return (
    <div className={styles.container}>
      <div className={styles.mid}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.title}>Simple Flight Check</div>
          <label>
            Логин:
            <input name='login' type='email' onChange={handleChange} required value={inputs.login} />
          </label>
          <label>
            Пароль:
            <input name='password' type='password' onChange={handleChange} required value={inputs.password} />
          </label>
          <button type='submit'>Войти</button>
        </form>
      </div>
    </div>
  )
}
