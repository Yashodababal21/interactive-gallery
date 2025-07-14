//  Component to display thumbnail images in a grid and handle click selection

import React from 'react';


const ThumbnailGrid = ({ images, onThumbnailClick }) => {
  return (
    <div className="thumbnail-grid">
      {images.map((img) => (
        <img
          key={img.id}
          src={img.thumbnail}
          alt={`Thumbnail ${img.id}`}
          className="thumbnail"
          onClick={() => onThumbnailClick(img)}
        />
      ))}
    </div>
  );
};

export default ThumbnailGrid;
