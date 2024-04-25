import React from 'react'
import background from '../../../assets/backgroundMain.jpeg'
export const Main = ({children}) => {
  return (
    <div className="w-full h-full  border-neon border-3 " style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>{children}</div>
)
}