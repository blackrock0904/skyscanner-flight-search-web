import React from 'react';
import { useDispatch } from 'react-redux';
import { SvgAirPlane } from './SvgAirPlane';
import { SvgArrow } from './SvgArrow';
import { SvgHeart } from './SvgHeart';
import styles from './Flight.module.css';
import { likeFlight } from '../redux/actions';

export const Flight = ({ flight }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <SvgAirPlane />
        <div className={styles.metaContainer}>
          <div className={styles.meta}>
            <div className={styles.bigText}>{`${flight.departureCity} ( ${flight.departurePort})`}</div>
            <div><SvgArrow /></div>
            <div className={styles.bigText}>{`${flight.arriveCity} ( ${flight.arrivePort})`}</div>
          </div>
          <div className={styles.meta}>
            <div className={styles.mediumText}>{`${flight.departureDate}`}</div>
            <div style={{ padding: '0 20px' }} className={styles.mediumText}>{'—'}</div>
            <div className={styles.mediumText}>{`${flight.departureTime}`}</div>
          </div>
          <div className={styles.mediumText}>{`${flight.company}`}</div>
        </div>
        <div className={styles.flexEnd}>
          <SvgHeart  
            isLiked={flight.isLiked}
            onClick={() => dispatch(likeFlight(flight))}
            />
          <div>
            <span className={styles.smallText}>Price:</span>
            {`${flight.price} ₽`} 
          </div>
        </div>
      </div>
    </div>

  );
}
