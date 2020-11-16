import React from 'react';
import { useSelector } from 'react-redux';


export const FlightsList = () => {
  const flights = useSelector(state => state.flights);
  
  console.log(flights);
  return (
    <div>
      {flights.map(el => <div>{el.departureCity}</div>)}
    </div>
  )
}
