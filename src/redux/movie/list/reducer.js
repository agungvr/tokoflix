import { GET_MOVIE_LIST_SUCCESS } from "./actions";

import { withLoadable } from "../../app/reducer";

export const initialState = {
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const getMovieListReducer = withLoadable({
  isLoadingAction: 'API_START',
  successAction: 'GET_MOVIE_LIST_SUCCESS',
  errorAction: 'GET_MOVIE_LIST_FAILURE',
})(reducer);

