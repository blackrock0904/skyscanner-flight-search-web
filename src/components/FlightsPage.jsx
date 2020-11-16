import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/actions';
import { SVGLogOut } from './SVGLogOut';
import styles from './Flights.module.css';
import { FlightsList } from './FlightsList';
import { startFeth } from '../redux/actions';

export const FlightsPage = () => {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    localStorage.removeItem('myLog');
    localStorage.removeItem('myPas');
    dispatch(logOut());
  }

  useEffect(() => {
    dispatch(startFeth())
  }, [dispatch]);
  
  return <div className={styles.container}>
    <a className={styles.logOut} onClick={handleClick}>
      <span className={styles.logOut_text}>Выйти</span>
      <SVGLogOut />
      <FlightsList/>
    </a>
  </div>;
}

