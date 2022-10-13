import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  name: 'yaren',
  password: '123',
  isAdmin: false
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setToLocalStorage: state => {
      const authUser = { ...state };

      if (authUser.name === 'yaren') {
        authUser.isAdmin = true;
      }

      localStorage.setItem('auth', JSON.stringify(authUser));
    },
    getFromLocalStorage: state => {
      const authObject = JSON.parse(localStorage.getItem('auth'));
      state = { ...authObject };
    }
  }
});

export const { increment, decrement, incrementByAmount, setToLocalStorage } =
  counterSlice.actions;
export default counterSlice.reducer;
