const promiseMiddleware = (store) => (next) => (action) => {
  if (action.promise) {
    console.log("promise :", action.type);
    action.promise
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log("response :", response);
        store.dispatch({ type: action.type, payload: response });
      })
      .catch((error) => store.dispatch({ type: action.type, error: error }));
    next(action);
  } else next(action);
};

export default promiseMiddleware;
