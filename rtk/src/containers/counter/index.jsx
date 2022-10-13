import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  setToLocalStorage
} from './features/counter/counterSlice';

const CounterSample = () => {
  const { value } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    const random = Math.round(Math.random() * 10);
    dispatch(incrementByAmount(random));
  };

  const handleLocalStorage = () => {
    dispatch(setToLocalStorage());
  };

  return (
    <div className='App'>
      <button onClick={handleIncrement}>Increment</button>
      <p>value : {value}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrementByAmount}>Increment By Amount</button>

      <button onClick={handleLocalStorage}>Set Local Storage</button>
    </div>
  );
};

export default CounterSample;
