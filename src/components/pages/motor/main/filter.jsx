import React from "react";
import { FilterWrapper } from "./style";
import drob from "../../../../assets/grommet.svg";
import img123 from "../../../../assets/filter3-image.svg";
import { Link } from "react-router-dom";

const FilterComponent = () => {
  return (
    <FilterWrapper>
      <div className="costofcar">
        <b>Cost of car</b>
        <div className="filter-line"></div>
        <div className="lab-inp-con">
          <div className="lab-inp-wrapper">
            <label htmlFor="">from</label>
            <input type="text" />
          </div>
          <div className="lab-inp-wrapper">
            <label htmlFor="">to</label>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="check-box-items">
        <div className="title-wrapper">
          <b>Brand</b>
          <img src={drob} alt="" />
        </div>
        <div className="filter-line"></div>
        <div className="chek-box-con">
          <div className="chek-box-wrapper">
            <input type="checkbox" />
            <Link
              to={"/aidal"}
              style={{ textDecoration: "none", color: "#373737" }}
            >
              <label htmlFor="">Aidal</label>
            </Link>
          </div>
          <div className="chek-box-wrapper">
            <input type="checkbox" />
            <label htmlFor="">Knal</label>
          </div>
          <div className="chek-box-wrapper">
            <input type="checkbox" />
            <label htmlFor="">escape</label>
          </div>
        </div>
      </div>
      <div className="check-box-items">
        <div className="title-wrapper">
          <b>Company</b>
          <img src={drob} alt="" />
        </div>
        <div className="filter-line"></div>
        <div className="chek-box-con">
          <div className="chek-box-wrapper">
            <input type="checkbox" />
            <label htmlFor="">escape</label>
          </div>
          <div className="chek-box-wrapper">
            <input type="checkbox" />
            <label htmlFor="">Aidal</label>
          </div>
        </div>
      </div>
      <div className="check-box-items">
        <div className="title-wrapper">
          <b>License type</b>
          <img src={drob} alt="" />
        </div>
        <div className="filter-line"></div>
        <div className="chek-box-con">
          <div className="chek-box-wrapper">
            <input type="checkbox" />
            <label htmlFor="">1 year</label>
          </div>
          <div className="chek-box-wrapper">
            <input type="checkbox" />
            <label htmlFor="">2 year</label>
          </div>
          <div className="chek-box-wrapper">
            <input type="checkbox" />
            <label htmlFor="">1.5year</label>
          </div>
        </div>
      </div>
      <div className="check-box-items">
        <div className="title-wrapper">
          <b>Number of travelers</b>
          <img src={drob} alt="" />
        </div>
        <div className="filter-line"></div>
        <div className="chek-box-con">
          <div className="chek-box-wrapper">
            <input type="checkbox" />
            <label htmlFor="">2</label>
          </div>
          <div className="chek-box-wrapper">
            <input type="checkbox" />
            <label htmlFor="">3-4</label>
          </div>
          <div className="chek-box-wrapper">
            <input type="checkbox" />
            <label htmlFor="">5+</label>
          </div>
        </div>
      </div>
      <div className="check-box-items">
        <div className="title-wrapper">
          <b>Location</b>
          <img src={drob} alt="" />
        </div>
        <div className="filter-line"></div>
        <div className="chek-box-con">
          <div className="chek-box-wrapper">
            <input type="checkbox" />
            <label htmlFor="">Seoul</label>
          </div>
          <div className="chek-box-wrapper">
            <input type="checkbox" />
            <label htmlFor="">Inchon</label>
          </div>
          <div className="chek-box-wrapper">
            <input type="checkbox" />
            <label htmlFor="">Pusan</label>
          </div>
        </div>
      </div>
      <div className="btn-wrapper">
        <button style={{ background: " #FF7A00" }}>Cancel</button>
        <button style={{ background: " #006DAB" }}>Search</button>
      </div>
      <div className="filter123-image">
        <b>Compare</b>
        <div className="img123-wrapper">
          <img src={img123} alt="img123" />
          <img src={img123} alt="img123" />
          <img src={img123} alt="img123" />
        </div>
      </div>
    </FilterWrapper>
  );
};

export default FilterComponent;
