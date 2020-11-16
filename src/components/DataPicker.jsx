import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-date-picker';
import {setDate, startFeth} from '../redux/actions';

export function DataPicker() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(new Date());
  
  useEffect(()=>{
    dispatch(setDate(value));
    dispatch(startFeth())

  },[value]);
  return (
    <div>
      <DatePicker
        onChange={setValue}
        value={value}
      />
    </div>
  );
}
