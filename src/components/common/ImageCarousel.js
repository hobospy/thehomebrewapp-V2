import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

import '../../css/imageCarousel.css';

export default function ImageCarousel({ defaultImageUrl, imageUrls }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    setCurrentIndex(isFirstImage ? imageUrls.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === imageUrls.length - 1;
    setCurrentIndex(isLastImage ? 0 : currentIndex + 1);
  };

  return (
    <div className={'carousel-style'}>
      {imageUrls !== null && imageUrls.length > 0 ? (
        <>
          <div className={'navigation-base-style-left'} onClick={goToPrevious}>
            <ArrowCircleLeftOutlinedIcon
              className={'navigation-button'}
              style={{ fontSize: 40 }}
            />
          </div>
          <img
            className={'image-panel-style'}
            src={imageUrls[currentIndex].url}
          />
          <div className={'navigation-base-style-right'} onClick={goToNext}>
            <ArrowCircleRightOutlinedIcon
              className={'navigation-button'}
              style={{ fontSize: 40 }}
            />
          </div>
        </>
      ) : (
        <img className={'image-panel-style'} src={defaultImageUrl} />
      )}
    </div>
  );
}

ImageCarousel.propTypes = {
  defaultImageUrl: PropTypes.string,
  imageUrls: PropTypes.array.isRequired,
};
