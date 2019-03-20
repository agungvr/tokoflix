import React, { Fragment } from "react";
import { Pagination, Grid } from "semantic-ui-react";
import { withEither, withMaybe } from "../../../app/helpers/renderingHandler";
import { compose, withHandlers } from 'recompose'
import { IsLoading } from "../../../components/isLoading";
import { IsEmpty } from "../../../components/isEmpty";
import { MovieCard } from "../../../components/CardMovie";

const waitFetching = compose(
  withEither(props => props.fetching, IsLoading),
  withMaybe(props => props.data !== null),
  withEither(props => !props.data.results.length, IsEmpty)
);

const useHandlers = compose(
  withHandlers({
    movieClick: props => value => (e) => {
      e.preventDefault();
      const slug = value.title.toLowerCase().split(' ').join('-');
      ;
      console.log(slug)
      props.history.push(`/movie/${value.id}-${slug}`)
    },
    paginationClick: props => (e, data) => {
      const { activePage } = data;
      props.history.push({
        pathname: '/home',
        search: `?page=${activePage}`
      });
      props.getMovieListRequest(activePage)
    }
  })
);

const enhance = compose(
  waitFetching,
  useHandlers
);

const GridItems = enhance(props => {
  const { results, total_pages, page } = props.data;
  const { userMovie } = props.user;
  return (
    <Fragment>
      <Grid columns={3}>
        <Grid.Row>
          {
            results.map((x, i) =>
              <Grid.Column key={i}>
                <MovieCard userMovie={userMovie} movieClick={props.movieClick(x)} item={x}/>
              </Grid.Column>
            )
          }
        </Grid.Row>
      </Grid>
      <Pagination
        onPageChange={props.paginationClick}
        defaultActivePage={page} totalPages={total_pages}/>
    </Fragment>
  )
});

export const List = props => (
  <div className='list-content'>
    <GridItems {...props}/>
  </div>
);
