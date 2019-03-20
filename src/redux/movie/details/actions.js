import { apiAction } from "../../api/actions";
import { API_KEY } from "../../../app/constant";

export const GET_MOVIE_DETAILS_REQUEST = "GET_MOVIE_DETAILS_REQUEST";
export const GET_MOVIE_DETAILS_SUCCESS = "GET_MOVIE_DETAILS_SUCCESS";
export const GET_MOVIE_DETAILS_FAILURE = "GET_MOVIE_DETAILS_FAILURE";

export const getMovieDetailsRequest = (id) => apiAction({
  label: GET_MOVIE_DETAILS_REQUEST,
  url: `3/movie/${id}?api_key=${API_KEY}&language=en-US`,
  onSuccess: getMovieDetailsSuccess,
  onFailure: getMovieDetailsFailure
});

export const getMovieDetailsSuccess = (data) => ({
  type: GET_MOVIE_DETAILS_SUCCESS,
  payload: data
});

export const getMovieDetailsFailure = (data) => ({
  type: GET_MOVIE_DETAILS_FAILURE,
  payload: data
});

