import React from 'react';
import '../styling/Gallery.scss';

const Gallery = ({ searchResults }) => (
  <div>
    <div className="gallery">
      { searchResults.map((img) => (
        <img
          className="img"
          key={img.id}
          src={img.urls.regular}
          alt=""
        />
      ))}
    </div>
  </div>
);

export default Gallery;
