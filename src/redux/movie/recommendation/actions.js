import { apiAction } from "../../api/actions";
import { API_KEY } from "../../../app/constant";

export const GET_MOVIE_RECOMMENDATION_REQUEST = "GET_MOVIE_RECOMMENDATION_REQUEST";
export const GET_MOVIE_RECOMMENDATION_SUCCESS = "GET_MOVIE_RECOMMENDATION_SUCCESS";
export const GET_MOVIE_RECOMMENDATION_FAILURE = "GET_MOVIE_RECOMMENDATION_FAILURE";

export const getMovieRecommendationRequest = (id) => apiAction({
  label: GET_MOVIE_RECOMMENDATION_REQUEST,
  url: `3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`,
  onSuccess: getMovieRecommendationSuccess,
  onFailure: getMovieRecommendationFailure
});

export const getMovieRecommendationSuccess = (data) => ({
  type: GET_MOVIE_RECOMMENDATION_SUCCESS,
  payload: data
});

export const getMovieRecommendationFailure = (data) => ({
  type: GET_MOVIE_RECOMMENDATION_FAILURE,
  payload: data
});

