import React from 'react';
import { useSelector } from 'react-redux';
import { Flight } from '../components//Flight';

export const FlightsList = () => {
  const flights = useSelector(state => state.flights);
  return (
    <div>
      {flights?.map(el => <Flight flight={el}/>)}
    </div>
  )
}
