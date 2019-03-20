import React from 'react';
import { IMAGE_BASE_URL, IMAGE_BASE_URL_ALTERNATIVE } from "../../../app/constant";
import { convertToRupiah, getPrice } from "../../../app/helpers/utils";
import { Similiar } from "./similiar";
import { Recommendation } from "./recommendation";
import { compose, withHandlers } from "recompose";
import { withEither, withMaybe } from "../../../app/helpers/renderingHandler";
import { IsLoading } from "../../../components/isLoading";
import { Cast } from "./cast";

const waitFetching = compose(
  withEither(props => props.movieDetails.isLoading, IsLoading),
  withMaybe(props => props.movieDetails.data !== null)
);

const useHandlers = withHandlers({
  buyClick: props => (data) => () => {
    const saldo = props.user.currentSaldo;
    const price = getPrice(data.vote_average);
    if (saldo > price) {
      props.userBuyMovie(data)
    } else {
      alert('Not Enough Balance')
    }
  }
});

const enhance = compose(
  waitFetching,
  useHandlers
);

export const Description = enhance((props) => {
  const { data } = props.movieDetails;
  const { cast } = props.movieCast.data;
  const { userMovie } = props.user;
  return (
    <div className="movie-details-container">
      <div className="movie-details-content">

        <div className="mb-3 d-flex flex-column">
          <h1 className="movie-title mr-4">{data.title}</h1>
          <div className="d-flex">
            {
              data.genres.map((item) =>
                <div key={item.id} className="genre-label">
                  {item.name}
                </div>
              )
            }
          </div>
        </div>

        <div className="d-flex">

          <div className="image-poster-container mr-4">
            <img alt={data.title} className={'image-poster'} src={`${IMAGE_BASE_URL}${data.poster_path}`}/>
          </div>

          <div className="movie-description-container">

            <div className="d-flex mb-4 flex-column">
              <h2 className="mb-2 mr-5">Rp. {convertToRupiah(getPrice(data.vote_average))}</h2>
              {
                userMovie.includes(data.id) ?
                  <div className="paid-movie">
                    <span>Paid</span>
                  </div>
                  :
                  <button onClick={props.buyClick(data)} className="buy-movie">
                    <span>Buy</span>
                  </button>

              }
            </div>

            <div className="d-flex flex-column mb-3">
              <span className="movie-description-label">Overview</span>
              <span className="movie-description-value">{data.overview}</span>
            </div>

            <div className="d-flex flex-column mb-3">
              <span className="movie-description-label">Runtime</span>
              <span className="movie-description-value">{data.runtime} Minutes
                </span>
            </div>

            <div className="d-flex flex-column mb-3">
              <span className="movie-description-label">Ratings</span>
              <span className="movie-description-value">{data.vote_average}</span>
            </div>

            <div className="d-flex flex-column mb-3">
              <span className="movie-description-label">Cast</span>
              <Cast cast={cast}/>
            </div>

          </div>

          <div className="sidebar-right">

            <Similiar {...props}/>
            <Recommendation {...props}/>

          </div>

        </div>
      </div>
    </div>
  )
})
