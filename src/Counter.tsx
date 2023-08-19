import React from "react";

type Props = {
    changeNumber: (e: MouseEvent) => void;
}

function Counter({changeNumber}: Props) {
    return (
        <div>
            <span>0</span>
            <button onClick={() => changeNumber}>Add</button>
            <button onClick={() => changeNumber}>Subtract</button>
        </div>
    )
}

export default Counter;