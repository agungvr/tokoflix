import { SET_USER_MOVIE, SET_USER_SALDO } from "./actions";

export const initialState = {
  currentSaldo: 100000,
  userMovie: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_SALDO:
      return {
        ...state,
        currentSaldo: state.currentSaldo - action.payload
      };
    case SET_USER_MOVIE:
      return {
        ...state,
        userMovie: state.userMovie.concat(action.payload)
      };
    default:
      return state;
  }
};

export const userReducer = reducer;

