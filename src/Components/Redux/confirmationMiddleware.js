const confirmationMiddleware = (store) => (next) => (action) => {
  if (action.shouldConfirm) {
    if (window.confirm(`Are you sure you want to ${action.type}`)) {
      next(action);
    }
  } else next(action);
};

export default confirmationMiddleware;
