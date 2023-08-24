import {createSlice, configureStore} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        // disabledPlus: false,
        // disabledMinus: false
    },
    reducers: {
        add: (state) => {
            state.count += 1;
        },
        subtract: (state) => {
            state.count -= 1;
        }
    }
})

export const {add, subtract} = counterSlice.actions;

