import React from "react";
import { Logo, MenuCon, NavCon, NavWrapper, RightCon } from "./style";
import logo from "../../assets/Logo.svg";
import grommet from "../../assets/grommet.svg";
import cart from "../../assets/cart.svg";
import user from "../../assets/user.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavCon>
      <NavWrapper>
        <Logo>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <img src={logo} alt="logo" />
          </Link>
        </Logo>

        <MenuCon>
          <Link
            to={"/motor"}
            style={{ textDecoration: "none", color: "#373737" }}
          >
            <div className="item-wrapper">
              <p>Motor</p>
              <img src={grommet} alt="grommet" />
            </div>
          </Link>
          <Link
            to={"/caravan"}
            style={{ textDecoration: "none", color: "#373737" }}
          >
            <div className="item-wrapper">
              <p>Caravan</p>
              <img src={grommet} alt="grommet" />
            </div>
          </Link>
          <Link
            to={"/tuning"}
            style={{ textDecoration: "none", color: "#373737" }}
          >
            <div className="item-wrapper">
              <p>Tuning</p>
              <img src={grommet} alt="grommet" />
            </div>
          </Link>
          <Link
            to={"/usedcar"}
            style={{ textDecoration: "none", color: "#373737" }}
          >
            <div className="item-wrapper">
              <p>Used Car</p>
              <img src={grommet} alt="grommet" />
            </div>
          </Link>
          <Link
            to={"/campingplace"}
            style={{ textDecoration: "none", color: "#373737" }}
          >
            <div className="item-wrapper">
              <p>Camping Place</p>
            </div>
          </Link>
        </MenuCon>
        <RightCon>
          <Link to={"/cart"}>
            <img src={cart} alt="cart" />
          </Link>
          <Link to={"/sign-in"}>
            <img src={user} alt="user" />
          </Link>
          <div className="item-wrapper">
            <p>En</p>
            <img src={grommet} alt="grommet" />
          </div>
        </RightCon>
      </NavWrapper>
    </NavCon>
  );
};

export default Navbar;
