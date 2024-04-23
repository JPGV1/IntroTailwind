import React from 'react'

export const ItemsCards = ({ img, time, description }) => {
  return (
    <div className="flex w-5/6 mt-8 mb-3">
        <div className="w-1/5 h-28 ">
            <img  className=" w-full h-24 "src={img} alt="sport-image" />
        </div>
        <div className='flex-col  w-2/3 h-26'>
        <h2 className='text-sm'>{time}</h2>
        <p className='text-xs mt-3 mb-3'> {description}</p>
        <hr className='mt-4'/>
        </div>
       

    </div>
  )
}
