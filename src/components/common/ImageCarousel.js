import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function ImageCarousel({ defaultImageUrl, imageUrls }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselStyles = {
    height: '100%',
    position: 'relative',
    width: '100%',
  };

  const imagePanelStyle = {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'scale-down',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const navigationBaseStyle = {
    color: 'pink',
    cursor: 'pointer',
    fontSize: '45px',
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    zIndex: 1,
  };

  const buttonMargin = '5px';

  const leftNavigationStyle = {
    ...navigationBaseStyle,
    left: buttonMargin,
  };

  const rightNavigationStyle = {
    ...navigationBaseStyle,
    right: buttonMargin,
  };

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    setCurrentIndex(isFirstImage ? imageUrls.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === imageUrls.length - 1;
    setCurrentIndex(isLastImage ? 0 : currentIndex + 1);
  };

  return (
    <div style={carouselStyles}>
      {imageUrls !== null && imageUrls.length > 0 ? (
        <>
          <div style={leftNavigationStyle} onClick={goToPrevious}>
            &lt;
          </div>
          <img style={imagePanelStyle} src={imageUrls[currentIndex].url} />
          <div style={rightNavigationStyle} onClick={goToNext}>
            &gt;
          </div>
        </>
      ) : (
        <img style={imagePanelStyle} src={defaultImageUrl} />
      )}
    </div>
  );
}

ImageCarousel.propTypes = {
  defaultImageUrl: PropTypes.string,
  imageUrls: PropTypes.array.isRequired,
};
