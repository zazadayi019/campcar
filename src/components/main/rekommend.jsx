import React from "react";
import dp from "../../assets/grommet.svg";
import car from "../../assets/multi-carousel-img.svg";
import {
  CarouselWrapp,
  CartlWrapp,
  DropWrapp,
  RekommendCon,
  RekommendWrapp,
} from "./style";

const RekommendComponent = () => {
  return (
    <RekommendWrapp>
      <RekommendCon>
        <b>Recommend</b>
        <div></div>
      </RekommendCon>
      <CarouselWrapp>
        <CartlWrapp>
          <img src={car} alt="car-img" />
          <p>Knaus</p>
          <b>Discover the range</b>
          <DropWrapp>
            <h>Choose a model</h>
            <img src={dp} alt="drop-img" />
          </DropWrapp>
        </CartlWrapp>
        <CartlWrapp>
          <img src={car} alt="car-img" />
          <p>Knaus</p>
          <b>Discover the range</b>
          <DropWrapp>
            <h>Choose a model</h>
            <img src={dp} alt="drop-img" />
          </DropWrapp>
        </CartlWrapp>
        <CartlWrapp>
          <img src={car} alt="car-img" />
          <p>Knaus</p>
          <b>Discover the range</b>
          <DropWrapp>
            <h>Choose a model</h>
            <img src={dp} alt="drop-img" />
          </DropWrapp>
        </CartlWrapp>
        <CartlWrapp>
          <img src={car} alt="car-img" />
          <p>Knaus</p>
          <b>Discover the range</b>
          <DropWrapp>
            <h>Choose a model</h>
            <img src={dp} alt="drop-img" />
          </DropWrapp>
        </CartlWrapp>
      </CarouselWrapp>
    </RekommendWrapp>
  );
};

export default RekommendComponent;
