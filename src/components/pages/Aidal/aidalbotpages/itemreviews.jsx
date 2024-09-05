import React from "react";
import {
  AidalBottomCon,
  BottomItems,
  ImgCon,
  ItemCon,
  ItemLine,
  TlLift,
  TlRight,
} from "../style";
import { campcar } from "../../campingplace/mock/motor";

const ItemReviews = () => {
  const data = campcar.maindata;
  console.log(data);
  return (
    <AidalBottomCon>
      {data.map((value, index) => {
        return (
          <BottomItems key={index}>
            <ItemCon>
              <ImgCon>
                <img src={value.car.photo} alt="" />
                <TlLift>
                  <b>{value.car.company}</b>
                  <h4>{value.car.name}</h4>
                  <p>{value.car.total_reviews}</p>
                </TlLift>
              </ImgCon>
              <TlRight>
                <p>
                  ID: <span>{value.car.id}</span>
                </p>
                <p>
                  Data: <span>{value.car.date}</span>
                </p>
                <p>
                  Viewed: <span>{value.car.total_reviews}</span>
                </p>
              </TlRight>
            </ItemCon>
            <ItemLine>
              <div></div>
            </ItemLine>
          </BottomItems>
        );
      })}
    </AidalBottomCon>
  );
};

export default ItemReviews;
