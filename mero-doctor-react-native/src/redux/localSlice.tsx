import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Initial state for your local slice
const initialState = {
  value: 0,
};

// Creating the local slice
const localSlice = createSlice({
  name: 'local', // Name of the slice
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});


// Export actions
export const {increment, decrement, setValue} = localSlice.actions;

// Export reducer
export default localSlice.reducer;
