import React from 'react';
import { WidgetMovie } from "../../../components/WidgetMovie";
import { compose } from "recompose";
import { withEither, withMaybe } from "../../../app/helpers/renderingHandler";
import { IsLoading } from "../../../components/isLoading";

const waitFetching = compose(
  withEither(props => props.movieRecommendation.isLoading, IsLoading),
  withMaybe(props => props.movieRecommendation.data !== null)
);

export const Recommendation = waitFetching((props) => {
  const { results } = props.movieRecommendation.data;
  return (
    <div className="ml-5 mb-5">
      <h2>Recomendation</h2>
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
