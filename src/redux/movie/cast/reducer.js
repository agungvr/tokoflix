import { GET_MOVIE_CAST_SUCCESS } from "./actions";

import { withLoadable } from "../../app/reducer";

export const initialState = {
  data: {
    cast: []
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_CAST_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const getMovieCastReducer = withLoadable({
  isLoadingAction: 'API_START',
  successAction: 'GET_MOVIE_CAST_SUCCESS',
  errorAction: 'GET_MOVIE_CAST_FAILURE',
})(reducer);

