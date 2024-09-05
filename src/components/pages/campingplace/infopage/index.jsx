import React from "react";
import cart1 from "../../../../assets/cp_cart1.svg";
import cart2 from "../../../../assets/cp_cart2.svg";
import cart3 from "../../../../assets/cp_cart3.svg";
import loc from "../../../../assets/location_icon.svg";
import phone from "../../../../assets/phone.svg";
import clock from "../../../../assets/clock.svg";
import home from "../../../../assets/home.svg";

import {
  Description,
  InfoCarts,
  InfoClock,
  InfoCon,
  InfoConWrap,
  InfoHome,
  InfoLoc,
  Infomation,
  InfomationLift,
  InfomationRight,
  InfoPhone,
  InfoTitleCon,
  Line,
  LocationWrap,
  MapCon,
  ZoomIn,
  ZoomOut,
} from "./style";

const InfoComponent = () => {
  return (
    <InfoConWrap>
      <InfoCon>
        <InfoCarts>
          <img src={cart1} alt="cart1" />
          <img src={cart2} alt="cart2" />
          <img src={cart3} alt="cart3" />
          <img src={cart1} alt="cart4" />
          <img src={cart2} alt="cart5" />
          <img src={cart3} alt="cart6" />
        </InfoCarts>
        <InfoTitleCon>
          <h1>Camping Del Sole Village</h1>
          <LocationWrap>
            <b>Location</b>
            <p>Copy map</p>
          </LocationWrap>
          <Line></Line>
          <Infomation>
            <InfomationLift>
              <InfoLoc>
                <img src={loc} alt="location_icon" />
                <p>Korea, Seul</p>
              </InfoLoc>
              <InfoPhone>
                <img src={phone} alt="phone_icon" />
                <p>005- 862 -8569</p>
              </InfoPhone>
            </InfomationLift>
            <InfomationRight>
              <InfoClock>
                <img src={clock} alt="clock_icon" />
                <p>
                  from <span> 11:00</span> to <span>19:00</span>
                </p>
              </InfoClock>
              <InfoHome>
                <img src={home} alt="home_icon" />
                <p>logo.com</p>
              </InfoHome>
            </InfomationRight>
          </Infomation>
          <Description>
            <b>Description</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
              senectus feugiat in vitae consequat libero placerat nascetur
              ultrices. Aenean mattis sapien a donec urna, bibendum. Maecenas
              mattis phasellus nunc sed a fringilla risus. Aenean sed fusce
              pretium sit venenatis bibendum convallis commodo enim.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sapien senectus
              feugiat in vitae consequat libero placerat nascetur ultrices.
              Aenean mattis sapien a donec urna, <br /> bibendum. Maecenas
              mattis phasellus nunc sed a fringilla risus. Aenean sed fusce
              pretium sit venenatis bibendum convallis commodo enim.
            </p>
          </Description>
        </InfoTitleCon>
        <MapCon>
          <ZoomIn>
            <b>+</b>
          </ZoomIn>
          <ZoomOut>
            <b>-</b>
          </ZoomOut>
        </MapCon>
      </InfoCon>
    </InfoConWrap>
  );
};

export default InfoComponent;
