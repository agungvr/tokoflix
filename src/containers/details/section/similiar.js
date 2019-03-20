import React from 'react';
import { WidgetMovie } from "../../../components/WidgetMovie";
import { compose } from "recompose";
import { withEither, withMaybe } from "../../../app/helpers/renderingHandler";
import { IsLoading } from "../../../components/isLoading";

const waitFetching = compose(
  withEither(props => props.movieSimiliar.isLoading, IsLoading),
  withMaybe(props => props.movieSimiliar.data !== null)
);

export const Similiar = waitFetching((props) => {
  const { results } = props.movieSimiliar.data;
  return (
    <div className="ml-5 mb-5">
      <h1>Similiar</h1>
      <div>
        {
          results.slice(0, 3).map((item, index) =>
            <WidgetMovie key={index} item={item}/>
          )
        }
      </div>
    </div>
  )
});
