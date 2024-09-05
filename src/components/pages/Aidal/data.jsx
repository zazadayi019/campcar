import React from "react";
import pcar from "../../../assets/Aidal-car.svg";
import in1 from "../../../assets/car-interio1.svg";
import in2 from "../../../assets/car-interio2.svg";
import in3 from "../../../assets/car-interio3.svg";
import in4 from "../../../assets/car-interio4.svg";
import in5 from "../../../assets/car-interio5.svg";
import {
  ButtonWrap,
  Container,
  InfoCon,
  InfoImg,
  InfoItem,
  Line,
  PriceCon,
  PriceLift,
  PriceRight,
  Titel,
  TitelLift,
  TitelRight,
  Top,
} from "./style";

const DataComponent = () => {
  return (
    <Container>
      <PriceCon>
        <PriceLift>
          <img src={pcar} alt="praice-image" />
        </PriceLift>
        <PriceRight>
          <Top>
            <b>Aidal</b>
            <p>50.000$</p>
          </Top>
          <Line>
            <p>aid</p>
            <div></div>
          </Line>
          <Titel>
            <TitelLift>
              <p>Company</p>
              <p>People</p>
              <p>License type</p>
            </TitelLift>
            <TitelRight>
              <p>Aidal company</p>
              <p>12</p>
              <p>License type</p>
            </TitelRight>
          </Titel>
        </PriceRight>
      </PriceCon>

      <InfoCon>
        <InfoItem>
          <b>Comfort</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh
            urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id
            in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar.
            Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis
            arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed
            proin iaculis mi.
          </p>
        </InfoItem>
        <InfoImg>
          <img src={in1} alt="car-interio1" />
        </InfoImg>
      </InfoCon>

      <InfoCon>
        <InfoImg>
          <img src={in2} alt="car-interio1" />
        </InfoImg>
        <InfoItem>
          <b>Tidying away is child’s play!</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh
            urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id
            in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar.
            Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis
            arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed
            proin iaculis mi.
          </p>
        </InfoItem>
      </InfoCon>

      <InfoCon>
        <InfoItem>
          <b>Ventilated , Lit up</b>
          <p>
            In our vans and motorhomes, all our body lighting is 100% LED: a
            guarantee of energy efficiency and durability. <br /> As for
            ventilation, we also often offer double ventilation in the bathroom
            (Skylight + window), which is very popular with our customers…{" "}
            <br /> Camper relies on legendary Seitz windows. They offer the best
            insulation and are also the easiest to use and safest because they
            can’t be removed from the outside.
          </p>
        </InfoItem>
        <InfoImg>
          <img src={in3} alt="car-interio1" />
        </InfoImg>
      </InfoCon>

      <InfoCon>
        <InfoImg>
          <img src={in4} alt="car-interio1" />
        </InfoImg>
        <InfoItem>
          <b>Easy access</b>
          <p>
            We add little touches that your joints will thank you for… All our
            motorhomes are equipped with a built-in step to facilitate entry to
            the vehicle <br /> All our vans are equipped with an electric step.
          </p>
        </InfoItem>
      </InfoCon>
      <InfoCon>
        <InfoItem>
          <b>Heating when driving</b>
          <p>
            Fuel heating is now very popular in the industry, but this was not
            always the case; Camper (once again) led the way in this area over
            15 years ago. <br /> One of the advantages it offers is that it can
            heat up your vehicle while you drive, for a more comfortable
            arrival.
          </p>
          <ButtonWrap>
            <button style={{ background: " #006dab", border: "none" }}>
              ADD TO CART
            </button>
            <button
              style={{
                background: "none",
                border: "2px solid #006DAB",
                color: "#006dab",
              }}
            >
              COMPARE
            </button>
          </ButtonWrap>
        </InfoItem>
        <InfoImg>
          <img src={in5} alt="car-interio1" />
        </InfoImg>
      </InfoCon>
    </Container>
  );
};

export default DataComponent;
