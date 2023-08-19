import React from "react";
import {Provider} from "react-redux";
import {configureStore, StoreEnhancer} from "@reduxjs/toolkit";
import Counter from "./Counter";
import reducer from "./reducer";
import {TAction} from "./reducer";

const store = configureStore({
    reducer: reducer
});
function App() {

    // function changeNumber(e: MouseEvent) {
    //     const target = e.target as HTMLButtonElement;
    //     if (target.innerHTML === 'Add') {
    //         store.dispatch({
    //             type: 'ADD_NUMBER'
    //         })
    //     } else if (target.innerHTML === 'Subtract') {
    //         store.dispatch({
    //             type: 'SUBTRACT_NUMBER'
    //         })
    //     }
    //     store.subscribe(() => {
    //         console.log('Hello')
    //     })
    // }

    function changeNumber() {
        store.dispatch({
            type: 'ADD_NUMBER',
            payload: 5
        });
    }

    store.subscribe(() => {console.log('Hello')})

    return (
        <Provider store={store}>
            <Counter changeNumber={changeNumber}/>
        </Provider>
    )
}

export default App;