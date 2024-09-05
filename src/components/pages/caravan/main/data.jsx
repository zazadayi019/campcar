import React, { useState } from "react";
import {
  DataFilterCon,
  DataFilterLift,
  DataFilterRight,
  DataLine,
  DataWrapper,
} from "./style";
import drob from "../../../../assets/grommet.svg";
import grid from "../../../../assets/grid.svg";
import list from "../../../../assets/list.svg";
import Grid from "./shop/Grid";
import Listcar from "./shop/List";
import { campcar } from "../mock/motor";

const DataComponent = () => {
  // const [pages, setpages] = useState(false);
  const [pages, setpages] = useState(false);
  const data = campcar.maindata;
  console.log(data);
  return (
    <DataWrapper>
      <DataFilterCon>
        <DataFilterLift>
          <div className="filter-lift">
            <p>Item</p>
            <b>{data.length}</b>
          </div>
        </DataFilterLift>
        <DataFilterRight>
          <div className="input-wrapper">
            <label htmlFor="">Sort by</label>
            <input type="text" placeholder="Select" />
            <img className="drob" src={drob} alt="drob" />
          </div>

          <div className="right-wrapper">
            <input type="text" placeholder="60" />
            <img className="drob" src={drob} alt="drob" />
          </div>

          <div className="grid-list">
            <button className="grid" onClick={() => setpages(false)}>
              <img className="grid-list-img" src={grid} alt="grid-img" />
            </button>
            <button className="list" onClick={() => setpages(true)}>
              <img className="grid-list-img" src={list} alt="list-img" />
            </button>
          </div>
        </DataFilterRight>
      </DataFilterCon>
      <DataLine></DataLine>
      {pages ? <Listcar /> : <Grid />}
    </DataWrapper>
  );
};

export default DataComponent;
