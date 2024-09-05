import React from "react";
import { campcar } from "../../../caravan/mock/motor";
import { GridCarWrapper, GridContainer } from "./style";
import star from "../../../../../assets/star.svg";
import { Link } from "react-router-dom";

const Grid = () => {
  const data = campcar.maindata;
  console.log(data);
  return (
    <GridCarWrapper>
      {data.map((value, index) => {
        return (
          <Link to={"/cart"}>
            <GridContainer key={index}>
              <img
                className="car-i-wrapper"
                src={value.car.photo}
                alt="shopcar-img"
              />
              <p className="name-of-the-car">{value.car.name}</p>
              <div className="brandname">
                <p>{value.car.company}</p>
                <div className="star-wrapper">
                  <img src={star} alt="star-img" />
                  <p>{value.car.rate}</p>
                </div>
              </div>
              <h2>{value.car.cost} $</h2>
              <div className="shop-btn">
                <button>Order</button>
                <button>Compare</button>
              </div>
            </GridContainer>
          </Link>
        );
      })}
    </GridCarWrapper>
  );
};

export default Grid;
