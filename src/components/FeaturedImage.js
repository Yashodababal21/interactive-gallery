// Component to display the currently featured full-size image
import React, { Component } from 'react';

const FeaturedImage = ({ image }) => {
  return (
    <div className="featured-image">
      <img src={image.full} alt="Featured" />
    </div>
  );
};

export default FeaturedImage;
