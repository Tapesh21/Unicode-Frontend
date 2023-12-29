import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from 'react-router-dom';
import { homeCarouselData } from './HomeCarouselData';

const handleDragStart = (e) => e.preventDefault();

const HomeCarousel = () => {
    const navigate = useNavigate();
    const item = homeCarouselData.map((item) => (
      <img
        className="cursor-pointer"
        onClick={() => navigate(item.path)}
        src={item.image}
        alt=""
        onDragStart={handleDragStart}
        role="presentation"
      />
    ));

  return (
    <AliceCarousel
        mouseTracking
        items={item}
        autoPlay
      infinite
      autoPlayInterval={2000}
      disableButtonsControls
        controlsStrategy="alternate"
    />
  )
}

export default HomeCarousel