import React from "react";

const Error = props => {
  return (
    <div className='font-weight-bold alert alert-danger text-center mt-4'>
      <span>{props.error}</span>
    </div>
  );
};

export default Error;
