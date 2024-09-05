import React from "react";
import { WallBtn, WallWrap } from "./style";

const WallpaperComponent = () => {
  return (
    <WallWrap>
      <b>Aidal</b>
      <WallBtn>
        <button style={{ background: " #006dab", border: "none" }}>
          ADD TO CART
        </button>
        <button style={{ background: "none", border: "2px solid #FFF" }}>
          COMPARE
        </button>
      </WallBtn>
    </WallWrap>
  );
};

export default WallpaperComponent;
