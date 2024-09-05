import React from "react";
import {
  CarName,
  CartWrapper,
  Details,
  ImgCon,
  Items,
  LineWrap,
  MainCon,
  Purchase,
} from "./style";
import car from "../../../assets/Cart-car.svg";

const CartComponent = () => {
  return (
    <CartWrapper>
      <LineWrap>
        <b>Cart</b>
        <p></p>
      </LineWrap>
      <MainCon>
        <ImgCon>
          <img src={car} alt="car-image" />
          <Purchase>
            <p>Purchase price</p>
            <b>52541$</b>
          </Purchase>
        </ImgCon>
        <Items>
          <CarName>
            <b>Car Name</b>
            <h3>550$</h3>
            <h5>Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              viverra amet, tortor <br /> tristique odio scelerisque aenean{" "}
              <br />
              sodales. <br /> Nunc risus dolor amet porttitor tellus
            </p>
            <button>Continue to payment</button>
          </CarName>
          <Details>
            <b>Enter Account Details</b>
            <label htmlFor="">First name</label>
            <input type="text" placeholder="First name" />
            <label htmlFor="">Last name</label>
            <input type="text" placeholder="Last name" />
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Your email" />
            <label htmlFor="">Mobile Phone Number</label>
            <input type="number" placeholder="Mobile Phone Number" />
          </Details>
          <Details>
            <b>Card</b>
            <label htmlFor="">Name on card</label>
            <input type="text" placeholder="Name on card" />
            <label htmlFor="">Card Number</label>
            <input type="text" placeholder="Card Number" />
            <label htmlFor="">Expiration Month</label>
            <input type="month" placeholder="01" />
            <label htmlFor="">Expiration Year</label>
            <input type="year" placeholder="2022" />
            <label htmlFor="">CVV</label>
            <input type="text" placeholder="CVV" />
            <label htmlFor="">Billing Zip Cod</label>
            <input type="number" placeholder="Billing Zip Cod" />
          </Details>
          <button>Place Order</button>
        </Items>
      </MainCon>
    </CartWrapper>
  );
};

export default CartComponent;
