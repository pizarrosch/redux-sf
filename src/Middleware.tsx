const Middleware = (store: any) => (next: any) => (action: any) => {
    if (store.getState().count === 5 && action.type === 'ADD_NUMBER') {
        store.dispatch({
            type: 'DISABLE_PLUS'
        })
        return next(action);
    }
    if (store.getState().count === -5 && action.type === 'SUBTRACT_NUMBER') {
        store.dispatch({
            type: 'DISABLE_MINUS'
        })
    }
    return next(action);
}

export default Middleware;