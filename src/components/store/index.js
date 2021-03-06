import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";
const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name:counter,
    initialState,
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        }
    }
})
const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1, showCounter: true };
  }
  if (action.type === "DECREMENT") {
    return { counter: state.counter - 1, showCounter: true };
  }
  if (action.type === "TOGGLE") {
    return { counter: state.counter, showCounter: !state.showCounter };
  }
  return state;
};

const store = configureStore({
    counter:counterSlice
});

export default store;
