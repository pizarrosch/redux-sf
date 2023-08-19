import React, {MouseEventHandler} from "react";
import {useDispatch, useSelector, useStore} from "react-redux";
import {Store} from "redux";
import {ToolkitStore} from "@reduxjs/toolkit/dist/configureStore";

type TClickProps = {
    decreaseNumber: () => void;
}

function Counter({decreaseNumber}: TClickProps) {

    // @ts-ignore
    const counter = useSelector((state) => state.count)
    const dispatch = useDispatch();

    return (
        <div>
            <span>{counter}</span>
            <button onClick={() => dispatch({type: 'ADD_NUMBER'})}>Add</button>
            <button onClick={decreaseNumber}>Subtract</button>
        </div>
    )
}

export default Counter;