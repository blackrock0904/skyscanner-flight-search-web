import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/actions';

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputs, setInputs] = useState({
    login: '',
    password: ''
  });

  useEffect(()=>{
    const log = localStorage.getItem('myLog');
    const pas = localStorage.getItem('myPas');
    if (log && pas) {
      dispatch(logIn());
      history.push('/flights');
    }
  },[])

  function handleChange({ target: { value, name } }) {
    setInputs({ ...inputs, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('myLog', inputs.login);
    localStorage.setItem('myPas', inputs.password);
    dispatch(logIn())
    history.push('/flights');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Логин
        <input name='login' type='email' onChange={handleChange} required value={inputs.login} />
      </label>
      <label>
        Пароль
        <input name='password' type='password' onChange={handleChange} required value={inputs.password} />
      </label>
      <button type='submit'>Войти</button>
    </form>
  )
}
