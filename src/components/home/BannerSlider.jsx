import React, { useState, useEffect } from 'react';
import rectangle from "../../../public/images/rectangle.png";
import honeymoonBanner1 from "../../../public/images/honeymoon-banner1.png";

import honeymoonBanner2 from "../../../public/images/honeymoon-banner2.png";

import honeymoonBanner3 from "../../../public/images/honeymoon-banner3.png";

const banners = [
  { id: 1, text: "Banner One", bgColor: "bg-red-500", image: honeymoonBanner1 },
  { id: 2, text: "Banner Two", bgColor: "bg-blue-500", image: honeymoonBanner2 },
  { id: 3, text: "Banner Three", bgColor: "bg-green-500", image:honeymoonBanner3 },
];

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide >= banners.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden md:h-[120px] h-[40px] ">

        {banners.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 duration-[2000ms] transition-transform ease-in-out ${
            index === currentSlide ? "translate-x-0" : "-translate-x-full"
          }`}
        >

      <div className=' md:h-[120px] h-[40px] w-full bg-no-repeat bg-cover bg-center'
      style={{backgroundImage: `url(${slide.image})`}}
      >

       {/* <div
       className='bg-cover bg-center w-[50%] h-[120px]'
        style={{
          backgroundImage: `url('${rectangle}')`,
          // zIndex: index === currentSlide ? 1 : 0,
        }}
       >

       </div> */}

       {/* <div
        className='bg-contain bg-no-repeat bg-center w-[50%] h-[120px]'
        style={{
          backgroundImage: `url('${slide.image}')`,
          // zIndex: index === currentSlide ? 1 : 0,
        }}
       >
       
       </div> */}

      </div>

        </div>
      ))}


    </div>
  );
};

export default BannerSlider;
