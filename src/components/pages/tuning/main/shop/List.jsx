import React from "react";
import { campcar } from "../../mock/motor";
import star from "../../../../../assets/star.svg";
import { ListContainer, ListImg } from "./style";

const Listcar = () => {
  const data = campcar.maindata;
  console.log(data);
  return (
    <listCarWrapper>
      {data.map((value, index) => {
        return (
          <ListContainer key={index}>
            <ListImg>
              <img src={value.car.photo} alt="listcar" />
            </ListImg>
            <div className="lift-wrapper">
              <div className="name-price">
                <p className="name-of-the-car">{value.car.name}</p>
                <p className="price">{value.car.cost} $</p>
              </div>
              <div className="brand-star">
                <p className="brand">{value.car.company}</p>
                <div className="rate-star">
                  <img className="star" src={star} alt="star-img" />
                  <p className="rate">{value.car.rate}</p>
                </div>
              </div>
              <div className="btn-wrapper">
                <button>Order</button>
                <button>Сompare</button>
              </div>
            </div>
          </ListContainer>
        );
      })}
    </listCarWrapper>
  );
};

export default Listcar;
