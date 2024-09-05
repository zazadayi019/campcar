import React from "react";
import cart1 from "../../assets/Blogs1.svg";
import cart2 from "../../assets/Blogs2.svg";
import cart3 from "../../assets/Blogs3.svg";
import cart4 from "../../assets/Blogs4.svg";
import cart5 from "../../assets/Blogs5.svg";
import cart6 from "../../assets/Blogs6.svg";
import {
  BlogsCart,
  BlogsCon,
  BlogsItems,
  BlogsTitle,
  BlogsWrap,
} from "./style";

const BlogsComponent = () => {
  return (
    <BlogsWrap>
      <BlogsCon>
        <b>Blogs</b>
        <div></div>
      </BlogsCon>
      <BlogsItems>
        <BlogsTitle>
          <b>Camper</b>
          <h3>@camper_1</h3>
          <p>
            Camping truly is for everyone, from your oldest family member to
            little campers just trekking out for the first time. Whether your
            plan is to relax, explore or reconnect, CAMPER campgrounds are a
            great place to create memories with those you love.
          </p>
        </BlogsTitle>
        <BlogsCart>
          <img src={cart1} alt="cart1" />
          <img src={cart2} alt="cart2" />
          <img src={cart3} alt="cart3" />
          <img src={cart4} alt="cart4" />
          <img src={cart5} alt="cart5" />
          <img src={cart6} alt="cart6" />
        </BlogsCart>
      </BlogsItems>
    </BlogsWrap>
  );
};

export default BlogsComponent;
