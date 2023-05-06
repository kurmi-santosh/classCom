import { BUY_CAKE, FETCH_USERS } from "./actionCreators";

const cakeInitialState = {
  cakesCount: 10,
};

export const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        cakesCount: state.cakesCount - 1,
      };

    default:
      return state;
  }
};

const usersInitState = {
  usersList: [],
  error: null,
};

export const usersReducer = (state = usersInitState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        usersList: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
