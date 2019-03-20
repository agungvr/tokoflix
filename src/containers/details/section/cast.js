import React from 'react';
import { IMAGE_BASE_URL, IMAGE_BASE_URL_ALTERNATIVE } from "../../../app/constant";
import { compose } from "recompose";
import { withEither, withMaybe } from "../../../app/helpers/renderingHandler";
import { IsLoading } from "../../../components/isLoading";

const waitFetching = compose(
  withEither(props => props.cast.isLoading, IsLoading),
  withMaybe(props => props.cast.data !== null)
);

export const Cast = waitFetching(({ cast }) => {
  return (
    <div className="d-flex flex-1 flex-wrap">
      {
        cast.map((item, i) =>
          <img
            key={i}
            alt={item.name}
            src={item.profile_path !== null ? `${IMAGE_BASE_URL}${item.profile_path}` : IMAGE_BASE_URL_ALTERNATIVE}
            height={100}/>
        )
      }
    </div>
  )
});
