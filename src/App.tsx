import React from "react";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import Counter from "./Counter";
import reducer from "./reducer";
import Middleware from './Middleware';

function App() {

    const store = configureStore({
        reducer: reducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(Middleware)
    });

    //For learning reasons two ways of dispatching are used:
    // 1. With store.dispatch
    // 2. (In the Counter component) via useDispatch
    function decreaseNumber() {
        if (store.getState().disabledMinus) return;
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