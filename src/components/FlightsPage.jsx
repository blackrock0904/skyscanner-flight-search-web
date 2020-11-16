import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/actions';
import { SVGLogOut } from './SVGLogOut';
import styles from './FlightsPage.module.css';
import { FlightsList } from './FlightsList';
import { startFeth } from '../redux/actions';
import { MyCarousel } from '../components/MyCarousel';
import { SvgMore } from '../components/SvgMore';
import { DataPicker } from './DataPicker';

export const FlightsPage = () => {
  const flights = useSelector(state => state.flights);
  const [totalLike, setTotalLike] = useState(0);
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

  useEffect(() => {
    let t = flights?.reduce((acc,el)=>{
      if (el.isLiked) return acc+1;
      return acc;
    },0);
    setTotalLike(t);
  }, [flights]);

  return <div className={styles.container}>
    <a className={styles.logOut} onClick={handleClick}>
      <span className={styles.logOut_text}>Выйти</span>
      <SVGLogOut />
    </a>
    <div className={styles.content}>
      <h1 className={styles.header}>
        <div>Вылеты</div>
        <div><SvgMore/> </div>
        {flights?.length && <div>{flights[0].departurePort}</div>}
        <div>-</div>
        {flights?.length && <div>{flights[0].arrivePort}</div>}
        <DataPicker/>
      </h1>
      <MyCarousel slideIndex={1}/>
      <div className={styles.total}>Добавлено в избранное: {totalLike} flight</div>
      <FlightsList/>
    </div>
  </div>;
}

