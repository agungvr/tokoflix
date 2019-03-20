import React from 'react'
import { List } from "./section/list";
import { Header } from "../../components/Header";

const Container = props => {
  return (
    <div className='container'>
      <Header {...props}/>

      <div className="content">
        <List
          {...props}
          fetching={props.movieList.isLoading}
          data={props.movieList.data}
        />
      </div>

    </div>
  )
};

export default Container;
