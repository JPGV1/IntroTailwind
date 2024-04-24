import React from "react";


export default function Slider({Slides}) {
  
  return (
    <div className=" w-full overflow-hidden">
      <div className="flex">
      {Slides.map((slide) =>{
        return <img className="w-full h-96" src={slide}/>
      })}
    </div>
    </div>
    
  );
}