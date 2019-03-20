import { apiAction } from "../../api/actions";
import { API_KEY } from "../../../app/constant";

export const GET_MOVIE_CAST_REQUEST = "GET_MOVIE_CAST_REQUEST";
export const GET_MOVIE_CAST_SUCCESS = "GET_MOVIE_CAST_SUCCESS";
export const GET_MOVIE_CAST_FAILURE = "GET_MOVIE_CAST_FAILURE";

export const getMovieCastRequest = (id) => apiAction({
  label: GET_MOVIE_CAST_REQUEST,
  url: `3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  onSuccess: getMovieCastSuccess,
  onFailure: getMovieCastFailure
});

export const getMovieCastSuccess = (data) => ({
  type: GET_MOVIE_CAST_SUCCESS,
  payload: data
});

export const getMovieCastFailure = (data) => ({
  type: GET_MOVIE_CAST_FAILURE,
  payload: data
});

