import { apiAction } from "../../api/actions";
import { API_KEY } from "../../../app/constant";

export const GET_MOVIE_LIST_REQUEST = "GET_MOVIE_LIST_REQUEST";
export const GET_MOVIE_LIST_SUCCESS = "GET_MOVIE_LIST_SUCCESS";
export const GET_MOVIE_LIST_FAILURE = "GET_MOVIE_LIST_FAILURE";

export const getMovieListRequest = (page) => apiAction({
  label: GET_MOVIE_LIST_REQUEST,
  url: `/3/movie/now_playing?language=en-US&page=${page}&api_key=${API_KEY}`,
  onSuccess: getMovieListSuccess,
  onFailure: getMovieListFailure
});

export const getMovieListSuccess = (data) => ({
  type: GET_MOVIE_LIST_SUCCESS,
  payload: data
});

export const getMovieListFailure = (data) => ({
  type: GET_MOVIE_LIST_FAILURE,
  payload: data
});

