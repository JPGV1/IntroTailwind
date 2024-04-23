import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import img1 from '../../../assets/basketball.jpg'
import img2 from '../../../assets/volleyball.jpg'
import img3 from '../../../assets/football.jpg'
export default function Slider() {
  return (
    <>
      <TECarousel ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={img1}
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={img2}
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={img3}
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}