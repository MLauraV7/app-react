import React from 'react';
import { BounceLoader } from 'react-spinners';
import '../css/LoaderComponent.css'

const LoaderComponent = () => {
  return (
    <div className="loader-container">
      <BounceLoader color="#36d7b7" size={60} />
    </div>
  );
};

export default LoaderComponent;