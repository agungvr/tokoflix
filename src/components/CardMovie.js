import React from 'react';
import { IMAGE_BASE_URL } from "../app/constant";
import { getPrice, convertToRupiah } from "../app/helpers/utils";

export const MovieCard = ({ item, ...props }) => {
  return (
    <a href={'#'} onClick={props.movieClick} className="card-movie-container">
      <div className="card-movie-image-container">
        <img
          alt={item.title}
          className="card-movie-image"
          src={`${IMAGE_BASE_URL}${item.poster_path}`}/>
      </div>
      <div className="card-movie-content">
        <span className="card-movie-title">{item.title}</span>
        <span className="card-movie-subtitle">Release : {item.release_date}</span>
        <span className="card-movie-description">{item.overview.substr(0, 100)}...</span>
        {
          props.userMovie.includes(item.id)
          ?
            <div className="card-movie-paid">
              <span className="card-movie-price-text">Paid</span>
            </div>
            :
            <div className="card-movie-price">
              <span className="card-movie-price-text">Rp. {convertToRupiah(getPrice(item.vote_average))}</span>
            </div>
        }
      </div>
    </a>
  )
};
