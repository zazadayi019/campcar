import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      preventMovementUntilSwipeScrollTolerance={true}
      showStatus={false}
      showThumbs={false}
    >
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/027/597/374/non_2x/sunset-over-motorhome-in-a-camping-rv-silhouette-concept-free-photo.jpg"
          alt="carousel"
        />
      </div>
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/029/633/465/non_2x/family-camping-car-go-on-holiday-in-a-campervan-parked-next-to-the-river-with-the-mountains-behind-the-sunset-free-photo.jpeg"
          alt="carousel"
        />
      </div>
      <div>
        <img src="https://wallpapercave.com/wp/wp10025073.jpg" alt="carousel" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
