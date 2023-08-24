import {PayloadAction} from "@reduxjs/toolkit";

type TState = {
    count: number,
    disabledPlus: boolean,
    disabledMinus: boolean
}

const initialState = {
    count: 0,
    disabledPlus: false,
    disabledMinus: false
} as const;

type TAction = {
    type: 'ADD_NUMBER' | 'SUBTRACT_NUMBER' | 'DISABLE_PLUS' | 'DISABLE_MINUS'
};

type Props = TAction | TState

export default function reducer(state: TState = initialState, action :  PayloadAction<TAction>) {
    switch (action.type) {
        case 'ADD_NUMBER':
            return {
                ...state,
                count: state.count + 1
            };
        case 'SUBTRACT_NUMBER':
            return {
                ...state,
                count: state.count - 1
            };
        case 'DISABLE_PLUS':
            return {
                ...state,
                disabledPlus: true,
                disabledMinus: false
            };
        case 'DISABLE_MINUS':
            return {
                ...state,
                disabledMinus: true,
                disabledPlus: false
            };
        default:
            return state;
    }
}

