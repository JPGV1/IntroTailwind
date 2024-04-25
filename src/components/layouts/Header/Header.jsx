import React from 'react'
import backgroundimg from '../../../assets/headerAndFooter.jpg'

export const Header = () => {
  return (
    <header className="w-full h-32 flex flex-col justify-center items-center " style={{ backgroundImage: `url(${backgroundimg})`, backgroundSize: 'cover' }}>
         <h1 className="text-white text-5xl " >El Blog de JP-DEV</h1>
         
    </header>
  )
}
