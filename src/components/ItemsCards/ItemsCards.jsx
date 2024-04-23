import React from 'react'

export const ItemsCards = ({ img, time, description }) => {
  return (
    <div className="flex w-5/6 mt-1">
        <div className="w-1/5 h-32 mt-1  ">
            <img  className=" w-full h-24 "src={img} alt="sport-image" />
        </div>
        <div className='flex-col  w-2/3 '>
        <h2 className=''>{time}</h2>
        <p className='text-xs mt-1'> {description}</p>
        <hr className='mt-2'/>
        </div>

    </div>
  )
}
