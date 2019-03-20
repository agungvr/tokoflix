export const USER_BUY_MOVIE = "USER_BUY_MOVIE";
export const SET_USER_SALDO = "SET_USER_SALDO";
export const SET_USER_MOVIE = "SET_USER_MOVIE";

export const userBuyMovie = (data) => ({
  type: USER_BUY_MOVIE,
  payload: data
});

export const setUserSaldo = (data) => ({
  type: SET_USER_SALDO,
  payload: data
});

export const setUserMovie = (data) => ({
  type: SET_USER_MOVIE,
  payload: data
});
