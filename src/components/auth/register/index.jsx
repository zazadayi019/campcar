import React from "react";
import x from "../../../assets/heroicons-solid_X.svg";
import {
  Checkboxx,
  Container,
  LabelInput,
  LabelInputWrap,
  Registrate,
  RegistrateWrap,
  XWrap,
} from "./style";
import { Link } from "react-router-dom";

const RegisterComponent = () => {
  return (
    <Container>
      <RegistrateWrap>
        <Registrate>
          <XWrap>
            <b>Registrate</b>
            <Link to={"/sign-in"}>
              <img src={x} alt="" />
            </Link>
          </XWrap>
          <LabelInputWrap>
            <LabelInput>
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Your email" />
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Your password" />
              <label htmlFor="">Repeat your password</label>
              <input type="password" placeholder="Your password" />
            </LabelInput>
          </LabelInputWrap>
          <Checkboxx>
            <input type="checkbox" />
            <p>Keep me logged in</p>
          </Checkboxx>
          <Link to={"/sign-in"}>
            <button>REGISTRATE</button>
          </Link>
        </Registrate>
      </RegistrateWrap>
    </Container>
  );
};

export default RegisterComponent;
