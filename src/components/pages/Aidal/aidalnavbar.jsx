import { Link } from "react-router-dom";
import { AidalNav, NavConWrapp } from "./style";

const AidalNavbar = () => {
  return (
    <NavConWrapp>
      <AidalNav>
        <Link
          to={"/reviews"}
          style={{ textDecoration: "none", color: "#373737" }}
        >
          <b>Item reviews</b>
        </Link>
        <Link to={"/qa"} style={{ textDecoration: "none", color: "#373737" }}>
          <b>Q&A</b>
        </Link>
        <b>FAQ</b>
        <b>Contact</b>
      </AidalNav>
    </NavConWrapp>
  );
};

export default AidalNavbar;
