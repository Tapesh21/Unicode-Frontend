import React, { useState } from 'react'
import HomeProductCard from '../ProductSection/HomeProductCard';
import AliceCarousel from 'react-alice-carousel';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const HomeSectionCarosel = ({data,section}) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const responsive = {
    0: {
      items: 1,
      itemsFit: "contain",
    },
    568: {
      items: 3,
      itemsFit: "contain",
    },
    1024: {
      items: 5.5,
      itemsFit: "contain",
    },
  };

  const items = data && Array.isArray(data) ? data.slice(0, 10).map((item) => (
    <HomeProductCard product={item} />
  )) : [];
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 ">
       <h2 className="text-2xl font-extrabold text-gray-900 py-5">{section}</h2>
      <div className="relative border p-5">
      <AliceCarousel
        items={items}
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        activeIndex={activeIndex}
        onSlideChanged={syncActiveIndex}
      />
       {activeIndex !== items.length-5 && <Button   variant="contained"
            className="z-50 bg-[]"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor:"white"
            }}
            
            aria-label="next" >
      <KeyboardArrowLeftIcon
      className=""
      sx={{ transform: "rotate(90deg)", color:"black" }}/>
      </Button>}

      {activeIndex !==0 && <Button   variant="contained"
            className="z-50 bg-[]"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor:"white"
            }}
            aria-label="next" >
      <KeyboardArrowLeftIcon
      className=""
      sx={{ transform: "rotate(-90deg)", color:"black" }}/>
      </Button>}
      </div>
    </div>
  )
  
}

export default HomeSectionCarosel