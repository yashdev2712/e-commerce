import React, { useState } from 'react'
import slides from '../data/ImageCarousel'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from 'react-icons/io';

const Carousel = ({children:slides}) => {
  const [current,setCurrent] = useState(0);
  
  const forward = ()=>{

  }

  const backword = ()=>{

  }

  return (
    <div className='overflow-hidden'>
    <div className='flex flex-row '>
      {slides.map((items,index)=>(
        <img src={items.src} alt={items.alt} key={index} />
      ))}
      <div className='absolute'>
      <button className=' bg-white opacity-80 hover:opacity-95'>
        <IoIosArrowBack size={50}/>
      </button>
      <button className=' bg-white opacity-80 hover:opacity-95'>
        <IoIosArrowForward size={50}/>
      </button>
      
      </div>
    </div>
    </div>
  )
}

export default Carousel
