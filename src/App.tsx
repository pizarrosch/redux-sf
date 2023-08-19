import React, {MouseEventHandler, useState} from "react";
import {Provider, useDispatch} from "react-redux";
import {configureStore, StoreEnhancer} from "@reduxjs/toolkit";
import Counter from "./Counter";
import reducer from "./reducer";
import {TAction} from "./reducer";
import {ToolkitStore} from "@reduxjs/toolkit/dist/configureStore";

function App() {

    const store = configureStore({reducer});

    //For learning reasons two ways of dispatching are used:
    // 1. With store.dispatch
    // 2. (In the Counter component) via useDispatch
    function decreaseNumber() {
        store.dispatch({
            type: 'SUBTRACT_NUMBER',
        });
    }

    return (
        <Provider store={store}>
            <Counter decreaseNumber={decreaseNumber}/>
        </Provider>
    )
}

export default App;