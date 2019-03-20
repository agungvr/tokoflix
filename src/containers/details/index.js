import React, { lazy } from 'react'
import { withRouter } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { getMovieDetailsRequest } from "../../redux/movie/details/actions";
import { getMovieCastRequest } from "../../redux/movie/cast/actions";
import { getMovieRecommendationRequest } from "../../redux/movie/recommendation/actions";
import { getMovieSimiliarRequest } from "../../redux/movie/similiar/actions";
import { userBuyMovie } from "../../redux/user/actions";

const Container = lazy(() => import('./container'));

const withConnect = connect(
  state => ({
    movieDetails: state.movieDetails,
    movieCast: state.movieCast,
    movieSimiliar: state.movieSimiliar,
    movieRecommendation: state.movieRecommendation,
    user: state.user
  }),
  dispatch => ({
    getMovieDetailsRequest: (id) => dispatch(getMovieDetailsRequest(id)),
    getMovieCastRequest: (id) => dispatch(getMovieCastRequest(id)),
    getMovieRecommendationRequest: (id) => dispatch(getMovieRecommendationRequest(id)),
    getMovieSimiliarRequest: (id) => dispatch(getMovieSimiliarRequest(id)),
    userBuyMovie: (data) => dispatch(userBuyMovie(data))
  })
);

const withLifecycle = lifecycle({
  componentDidMount() {
    const { id } = this.props.match.params;
    const movie_id = id.split('-')[0];
    this.props.getMovieDetailsRequest(movie_id);
    this.props.getMovieCastRequest(movie_id);
    this.props.getMovieRecommendationRequest(movie_id);
    this.props.getMovieSimiliarRequest(movie_id);
  }
});

const Detail = props => (<Container {...props}/>);

export default compose(
  withRouter, withConnect, withLifecycle
)(Detail);

