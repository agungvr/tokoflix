import { apiAction } from "../../api/actions";
import { API_KEY } from "../../../app/constant";

export const GET_MOVIE_SIMILIAR_REQUEST = "GET_MOVIE_SIMILIAR_REQUEST";
export const GET_MOVIE_SIMILIAR_SUCCESS = "GET_MOVIE_SIMILIAR_SUCCESS";
export const GET_MOVIE_SIMILIAR_FAILURE = "GET_MOVIE_SIMILIAR_FAILURE";

export const getMovieSimiliarRequest = (id) => apiAction({
  label: GET_MOVIE_SIMILIAR_REQUEST,
  url: `3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`,
  onSuccess: getMovieSimiliarSuccess,
  onFailure: getMovieSimiliarFailure
});

export const getMovieSimiliarSuccess = (data) => ({
  type: GET_MOVIE_SIMILIAR_SUCCESS,
  payload: data
});

export const getMovieSimiliarFailure = (data) => ({
  type: GET_MOVIE_SIMILIAR_FAILURE,
  payload: data
});

