import React from 'react';
import ReactDOM from 'react-dom';
import InfiniteCarousel from 'react-leaf-carousel';
import styles from './MyCarousel.module.css';

export const MyCarousel = () => {
  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ]}
      dots={false}
      arrows={true}
      swipe={false}
      autoCycl={true}
      showSides={false}
      
      
      
      slidesToShow={4}
      scrollOnDevice={true}
    >
      <div>
        <img
          alt=""
          src="./1.png"
        />
      </div>
      <div>
        <img
          alt=""
          src="./2.png"
        />
      </div>
      <div>
        <img
          alt=""
          src="./3.png"
        />
      </div>
      <div>
        <img
          alt=""
          src="./4.png"
        />
      </div>
      <div>
        <img
          alt=""
          src="./2.png"
        />
      </div>
    </InfiniteCarousel>

  );
}
