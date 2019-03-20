import React from 'react';
import { Loader } from "semantic-ui-react";

export const IsLoading = () => {
  return (
    <div className="w-100 v-100 d-flex justify-content-center align-items-center">
      <Loader active inline='centered'/>
    </div>
  )
};
