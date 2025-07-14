// Component: Gallery -main image gallery functionality
import React, {  useState } from 'react';
import FeaturedImage from './FeaturedImage';
import ThumbnailGrid from './ThumbnailGrid';
import images from '../data/imageData';



const Gallery = () => {

    // Track the index of the currently displayed image
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (img) => {
    const index = images.findIndex((i) => i.id === img.id);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      <FeaturedImage image={images[currentIndex]} />

      <div className="navigation-buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>

      <ThumbnailGrid images={images} onThumbnailClick={handleThumbnailClick} />
    </div>
  );
};

export default Gallery;

