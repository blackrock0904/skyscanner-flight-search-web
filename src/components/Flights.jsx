import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/actions';
import { SVGLogOut } from './SVGLogOut';
import styles from './Flights.module.css';

export const Flights = () => {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    localStorage.removeItem('myLog');
    localStorage.removeItem('myPas');
    dispatch(logOut());
  }

  return <div className={styles.container}>
    <a className={styles.logOut} onClick={handleClick}>
      <span className={styles.logOut_text}>Выйти</span>
      <SVGLogOut />
    </a>
  </div>;
}

