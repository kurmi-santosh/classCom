// Middleware is a curried function
// It's similar to (store, next, action), But redux required it to be curried function
// Because some times it's partially applied...When next action is not there...
const customLogMiddleware = (store) => (next) => (action) => {
  console.log("dispatching...", action.type);
  next(action);
};

export default customLogMiddleware;
