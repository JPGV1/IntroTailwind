import React from 'react'

export const ItemsCards = ({ img, time, description }) => {
  return (
    <div className="flex">
        <div className="w-1/5 h-32 ">
            <img  className=" w-full h-28 "src={img} alt="sport-image" />
        </div>
        <div className='flex-col  w-2/3'>
        <h2>{time}</h2>
        <p> {description}</p>
        </div>

    </div>
  )
}
