import React, { useEffect, useState } from 'react';
import goa from "../../../public/images/goa.png";
import maldives from "../../../public/images/maldives.png";
import dubai from "../../../public/images/dubai.png";
import kerala from "../../../public/images/kerala.png";
import nepal from "../../../public/images/nepal.png";

let images = [
    {image: goa},
    {image: maldives},
    {image: dubai},
    {image: kerala},
    {image: nepal}
]

function CircularImages() {
    const [currentImage, setCurrentImage] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((prevSlide) =>
            prevSlide >= images.length - 1 ? 0 : prevSlide + 1
          );
        }, 3000);
    
        return () => clearInterval(interval);
      }, []);

  return (
    <div>
    

    {
   images?.map((obj, i)=>(
   <div className=' flex justify-evenly items-center'>
   
   <div>
    <img src={(i == 0)? obj.image : images[currentImage - 1]?.image } alt="" />
   </div>

   <div>
    <img src={images[currentImage].image} alt="" />
   </div>


   <div>
    <img src={(i < 3)? images[currentImage].image : obj?.image} alt="" />
   </div>




   </div>
   ))
    }


   

    </div>
  )
}

export default CircularImages