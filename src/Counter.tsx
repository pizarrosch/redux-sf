import React, {ReducerState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {add} from "./reducerReduxToolkit";

type TClickProps = {
    decreaseNumber: () => void;
}

function Counter({decreaseNumber}: TClickProps) {

    // @ts-ignore
    // const counter = useSelector((state) => state.count)
    // @ts-ignore
    // const isDisabledPlus = useSelector((state) => state.disabledPlus)
    // @ts-ignore
    // const isDisabledMinus = useSelector((state) => state.disabledMinus)
    const dispatch = useDispatch();

    // or with ReduxToolkit reducer:
    // @ts-ignore
    const counter = useSelector((state) => state.counter.count)

    function increaseNumber() {
        // if (isDisabledPlus) return;
        // dispatch({type: 'ADD_NUMBER'});

    //     Or with ReduxToolkit:
        dispatch(add());
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