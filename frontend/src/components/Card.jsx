import React from 'react'
import image from "../assets/image slideshow/c1.jpg"
const Card = () => {
  return (
    <>
    <div className="parent  bg-white border-warning  w-1/5 h-1/5 rounded-lg p-5">
      <div className='image-container'>
        <img src={image} alt="product-image" />
      </div>
      <div className='content text-left'>
        <h1 className='title'>
          Title
        </h1>
        <h2>$500</h2>
        <span className='overflow-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor molestiae sadhf asdhf jakdhs f askdhf adskf
        </span>

      </div>
    </div>
      
    </>
  )
}

export default Card

