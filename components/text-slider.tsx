import React, { useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
const ImageGallery = ({options}:{options:any[]}) => {
  const [images, setImages] = useState(options);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className='flex w-full'>
      <button onClick={prevImage}>
        
        <MdNavigateBefore size={30}/>
      </button>
        <div className='text-center w-[70%] font-semibold text-2xl  py-0 bg-white  rounded-md'> 
        {images[currentIndex]}
        </div>
      <button onClick={nextImage}>
      <MdNavigateNext size={30} /> 
      </button>
    </div>
  );
};

export default ImageGallery;
