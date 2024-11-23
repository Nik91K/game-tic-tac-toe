import React from 'react';

import './App.css';
import imageUrls from './json/imageUrls.json';

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGallery;