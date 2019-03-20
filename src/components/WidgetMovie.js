import React from 'react'
import { IMAGE_BASE_URL } from "../app/constant";

export const WidgetMovie = ({ item }) => {
  return (
    <div className="d-flex mb-2">
      <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt={item.title} height={200}/>
      <div className="d-flex flex-column ml-3">
        <h3>{item.title}</h3>
        <span className="widget-rating">Rating {item.vote_average}</span>
        <span>{item.overview.substring(0, 100)}</span>
      </div>
    </div>
  )
};
