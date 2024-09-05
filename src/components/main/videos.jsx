import React from "react";
import play from "../../assets/play_btn.svg";
import cart1 from "../../assets/Videos1.svg";
import cart2 from "../../assets/Videos2.svg";
import cart3 from "../../assets/Videos3.svg";
import cart4 from "../../assets/Videos4.svg";
import cart5 from "../../assets/Videos5.svg";
import cart6 from "../../assets/Videos6.svg";
import cart7 from "../../assets/Videos7.svg";
import cart8 from "../../assets/Videos8.svg";
import {
  BGimg,
  PlayBtn,
  VideosCart,
  VideosCartWrap,
  VideosCon,
  VideosWrap,
} from "./style";

const VideosComponent = () => {
  return (
    <VideosWrap>
      <VideosCon>
        <b>Videos</b>
        <div></div>
      </VideosCon>
      <VideosCartWrap>
        <VideosCart>
          <BGimg>
            <img src={cart1} alt="cart1" />
          </BGimg>
          <PlayBtn>
            <img src={play} alt="play_btn" />
          </PlayBtn>
        </VideosCart>
        <VideosCart>
          <BGimg>
            <img src={cart2} alt="cart2" />
          </BGimg>
          <PlayBtn>
            <img src={play} alt="play_btn" />
          </PlayBtn>
        </VideosCart>
        <VideosCart>
          <BGimg>
            <img src={cart3} alt="cart3" />
          </BGimg>
          <PlayBtn>
            <img src={play} alt="play_btn" />
          </PlayBtn>
        </VideosCart>
        <VideosCart>
          <BGimg>
            <img src={cart4} alt="cart4" />
          </BGimg>
          <PlayBtn>
            <img src={play} alt="play_btn" />
          </PlayBtn>
        </VideosCart>
        <VideosCart>
          <BGimg>
            <img src={cart5} alt="cart5" />
          </BGimg>
          <PlayBtn>
            <img src={play} alt="play_btn" />
          </PlayBtn>
        </VideosCart>
        <VideosCart>
          <BGimg>
            <img src={cart6} alt="cart6" />
          </BGimg>
          <PlayBtn>
            <img src={play} alt="play_btn" />
          </PlayBtn>
        </VideosCart>
        <VideosCart>
          <BGimg>
            <img src={cart7} alt="cart7" />
          </BGimg>
          <PlayBtn>
            <img src={play} alt="play_btn" />
          </PlayBtn>
        </VideosCart>
        <VideosCart>
          <BGimg>
            <img src={cart8} alt="cart8" />
          </BGimg>
          <PlayBtn>
            <img src={play} alt="play_btn" />
          </PlayBtn>
        </VideosCart>
      </VideosCartWrap>
    </VideosWrap>
  );
};

export default VideosComponent;
