const initialState = {
    count: 0
} as const;

type Keys = keyof typeof initialState;
type Values = typeof initialState[Keys];

type TPlusAction = {
    type: 'ADD_NUMBER',
    payload: 5,
}

type TMinusAction = {
    type: 'SUBTRACT_NUMBER',
    payload: 5,
}


export type TAction = TPlusAction | TMinusAction;

export default function reducer(state: { count: number } = initialState, action: TAction) {
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
        default:
            return state;
    }
}

