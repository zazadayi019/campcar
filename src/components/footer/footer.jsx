import React from "react";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";
import naver from "../../assets/naver.svg";
import { FooterWrapper, TitleWrapper } from "./style";

const FooterComponent = () => {
  return (
    <FooterWrapper>
      <TitleWrapper>
        <div className="logo">
          <p>Camper</p>
        </div>
        <div className="services-wrapper">
          <h3>Services</h3>
          <p>Camping</p>
          <p>Lodging</p>
          <p>Harbor</p>
          <p>Day Use</p>
        </div>
        <div className="services-wrapper">
          <h3>Menu</h3>
          <p>About</p>
          <p>Services</p>
          <p>Booking</p>
          <p>Blog</p>
        </div>
        <div className="contact-wrapper">
          <h3>Contact</h3>
          <div className="sns-wrapper">
            <img src={youtube} alt="youtube-img" />
            <img src={instagram} alt="instagram-img" />
            <img src={naver} alt="naver-img" />
          </div>
          <p>021 Korea Seul, LA</p>
          <p>camper@example.com</p>
          <p>(021) 345-6789-99</p>
        </div>
      </TitleWrapper>
    </FooterWrapper>
  );
};

export default FooterComponent;
