import React, { useState, useEffect } from 'react';

const Slider = ({ delay }) => {
  const [images, setImages] = useState([]); // initialize images array
  const [index, setIndex] = useState(0); // initialize index

  useEffect(() => {
    const importImages = async () => {
      // Import all images from folder using Webpack require.context function
      const imageContext = require.context('assets/images/slider-img', false, /\.(jpg|png)$/);
      const images = await Promise.all(imageContext.keys().map(imageContext));
      setImages(images);
    };
    importImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          return 0; // reset index to 0 when reaching end of array
        }
        return prevIndex + 1; // increment index
      });
    }, delay);
    return () => clearInterval(interval);
  }, [images, delay]);

  return <img src={images[index]?.default} alt="Slider Image" />;
};

export default Slider;
