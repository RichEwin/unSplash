import React from 'react';
import '../styling/Gallery.scss';

const Gallery = ({ searchResults }) => (
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
);

export default Gallery;
