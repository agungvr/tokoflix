import { combineReducers } from 'redux';
import { getMovieListReducer } from "./movie/list/reducer";
import { getMovieDetailsReducer } from "./movie/details/reducer";
import { getMovieCastReducer } from "./movie/cast/reducer";
import { getMovieSimiliarReducer } from "./movie/similiar/reducer";
import { getMovieRecommendationReducer } from "./movie/recommendation/reducer";
import { userReducer } from "./user/reducer";

export default combineReducers({
  movieList: getMovieListReducer,
  movieDetails: getMovieDetailsReducer,
  movieCast: getMovieCastReducer,
  movieSimiliar: getMovieSimiliarReducer,
  movieRecommendation: getMovieRecommendationReducer,
  user: userReducer
});
