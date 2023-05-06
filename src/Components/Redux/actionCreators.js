import axios from "axios";
export const BUY_CAKE = "BUY_CAKE";
export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

// Action creators can return (1) Pure functions (Plain objects)
export const buyCake = () => {
  return {
    type: BUY_CAKE,
    shouldConfirm: true,
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
    loading: true,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
    error: null,
  };
};
export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAIL,
    payload: null,
    error: error,
  };
};

// Action creators can return (2) impure functions
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());

    var usersPromise = axios.get("https://jsonplaceholder.typicode.com/users");
    // This Promise has 4 states (1)onFullFilled (2)onReject (3)Pending (4)Settled - Either fullfilled or error
    // We are waiting in Pending state and will go to next step when settled
    // onSettled - Our Thunk middleware performs the next(action)
    usersPromise
      .then((response) => {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error));
      });
  };
};

// Moving the above promise setlement to our custom middleware (promiseMiddleware)
export const fetchUserList = () => {
  return {
    type: FETCH_USERS,
    promise: fetch("https://jsonplaceholder.typicode.com/users"),
  };
};
