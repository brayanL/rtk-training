import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// good approach
/*const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');

// Typical reducer
export const counter = createReducer(0, {
    [increment]: state => state + 1,
    [decrement]: state => state - 1,
});*/

// very good approach
export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1,
    },
});
