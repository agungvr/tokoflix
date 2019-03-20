import React from 'react'
import { Header } from "../../components/Header";
import { Description } from "./section/description";

const Container = props => {
  return (
    <div className='container'>
      <Header {...props}/>
      <Description {...props}/>
    </div>
  )
};

export default Container;
