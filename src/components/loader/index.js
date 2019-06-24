import React from 'react';
import './loader.css';

const LoadingIcon = require('./loader.svg');


const Loader = () => (
  <div className="loader">
    <img src={LoadingIcon} alt="loader" />
  </div>
);

export default Loader;