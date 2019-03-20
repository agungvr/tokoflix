import { GET_MOVIE_DETAILS_SUCCESS } from "./actions";

import { withLoadable } from "../../app/reducer";

export const initialState = {
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const getMovieDetailsReducer = withLoadable({
  isLoadingAction: 'API_START',
  successAction: 'GET_MOVIE_DETAILS_SUCCESS',
  errorAction: 'GET_MOVIE_DETAILS_FAILURE',
})(reducer);

