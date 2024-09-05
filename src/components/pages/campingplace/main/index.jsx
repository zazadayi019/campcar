import React from "react";
import { campcar } from "../mock/motor";
import { Loc, LocationWrapper } from "./style";
import { Link } from "react-router-dom";

const Location = () => {
  const data = campcar.maindata;
  console.log(data);
  return (
    <LocationWrapper>
      {data.map((value, index) => {
        return (
          <Loc key={index}>
            <Link to={"/info"}>
            <img src={value.car.photo} alt="" />
            </Link>

            <h3>{value.car.camping_site_name}</h3>

            <h2>{value.car.price_per_night} W</h2>

            <p>{value.car.location}</p>
          </Loc>
        );
      })}
    </LocationWrapper>
  );
};

export default Location;
