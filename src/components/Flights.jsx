import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/actions';

export const Flights = () => {
  const dispatch = useDispatch();

  function handleClick() {
    localStorage.removeItem('myLog');
    localStorage.removeItem('myPas');
    dispatch(logOut());
  }
  
  return <div>
    Flights
    <div onClick={handleClick}>Выйти</div>
    </div>;
}

