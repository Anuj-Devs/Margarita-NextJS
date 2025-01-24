import React, { useRef } from 'react';
import CarCards from './CarCards';

const Carousel = () => {
  const containerRef = useRef(null);

  const btnPrevious = () => {
    const value = containerRef.current;
    if (value) {
      const width = value.clientWidth;
      value.scrollLeft -= width;
      console.log(width);
    }
  };

  const btnNext = () => {
    const value = containerRef.current;
    if (value) {
      const width = value.clientWidth;
      value.scrollLeft += width;
      console.log(width);
    }
  };

  return (
    <div className="pt-4 text-black cardBg pb-8 bg_custom">
      <div className="text-center heading1111 font-bold text-text2">Product Carousel</div>
      <div className="product-carousel">
        <button className="pre-btn" onClick={btnPrevious}>
          <p>&lt;</p>
        </button>
        <button className="next-btn" onClick={btnNext}>
          <p>&gt;</p>
        </button>
        <div className="product-container" ref={containerRef}>
          <CarCards id="1" />
          <CarCards id="2" />
          <CarCards id="3" />
          <CarCards id="4" />
          <CarCards id="5" />
          <CarCards id="6" />
          <CarCards id="7" />
          <CarCards id="8" />
          <CarCards id="9" />
          <CarCards id="00" />
          <CarCards id="--" />
          <CarCards id="44" />
          <CarCards id="33" />
          <CarCards id="11" />
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
