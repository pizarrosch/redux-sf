import React, {MouseEventHandler} from "react";
import {useDispatch, useSelector, useStore} from "react-redux";

type TClickProps = {
    decreaseNumber: () => void;
}

function Counter({decreaseNumber}: TClickProps) {

    // @ts-ignore
    const counter = useSelector((state) => state.count)
    // @ts-ignore
    const isDisabled = useSelector((state) => state.disabledPlus)
    const dispatch = useDispatch();

    function increaseNumber() {
        if (isDisabled) return;
        dispatch({type: 'ADD_NUMBER'});
    }

    return (
        <div>
            <span>{counter}</span>
            <button onClick={increaseNumber}>Add</button>
            <button onClick={decreaseNumber}>Subtract</button>
        </div>
    )
}

export default Counter;