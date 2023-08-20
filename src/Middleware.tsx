const Middleware = (store: any) => (next: any) => (action: any) => {
    console.log(action);
    console.log(store.getState());
    return next(action);
}

export default Middleware;