import React from "react";
import { MainWrapper, ShopWrapper } from "./style";
import FilterComponent from "./filter";
import DataComponent from "./data";

const MainComonent = () => {
  return (
    <MainWrapper>
      <ShopWrapper>
        <FilterComponent />
        <DataComponent />
      </ShopWrapper>
    </MainWrapper>
  );
};

export default MainComonent;
