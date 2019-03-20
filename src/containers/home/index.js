import React, { lazy } from 'react'
import { withRouter } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { getMovieListRequest } from "../../redux/movie/list/actions";

const Container = lazy(() => import('./container'));

const withConnect = connect(
  state => ({
    movieList: state.movieList,
    user: state.user
  }),
  dispatch => ({
    getMovieListRequest: (page) => dispatch(getMovieListRequest(page))
  })
);

const withLifecycle = lifecycle({
  componentDidMount() {
    const { search } = this.props.history.location;
    let page = search !== '' ? search.split('?page=')[1] : 1;
    this.props.getMovieListRequest(page);
  }
});

const Home = props => (<Container {...props}/>);

export default compose(
  withRouter, withConnect, withLifecycle
)(Home);

