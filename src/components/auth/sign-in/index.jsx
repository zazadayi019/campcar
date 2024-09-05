import React from "react";
import naver from "../../../assets/vs_naver.svg";
import google from "../../../assets/google.svg";
import kakaotalk from "../../../assets/kakao-talk.svg";
import {
  Checkboxx,
  Container,
  Google,
  Kakao,
  KeepForget,
  LabelInput,
  LabelInputWrap,
  Naverr,
  OrCon,
  OrLine,
  SignInn,
  SignInnWrap,
  SnsWrap,
} from "./style";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  return (
    <Container>
      <SignInnWrap>
        <SignInn>
          <b>Sign in</b>
          <LabelInputWrap>
            <LabelInput>
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Your email" />
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Your password" />
            </LabelInput>
          </LabelInputWrap>
          <KeepForget>
            <Checkboxx>
              <input type="checkbox" />
              <p>Keep me logged in</p>
            </Checkboxx>
            <p>Forget your password ?</p>
          </KeepForget>
          <Link to={"/motor"}>
            <button>SIGN IN</button>
          </Link>
        </SignInn>
        <OrCon>
          <OrLine>
            <div></div>
            <p>OR</p>
            <div></div>
          </OrLine>
          <SnsWrap>
            <Naverr>
              <img src={naver} alt="naver" />
            </Naverr>
            <Google>
              <img src={google} alt="google" />
            </Google>
            <Kakao>
              <img src={kakaotalk} alt="kakaotalk" />
            </Kakao>
          </SnsWrap>
          <Link to={"/register"}>
            <button>CREATE ACCOUNT</button>
          </Link>
        </OrCon>
      </SignInnWrap>
    </Container>
  );
};

export default LoginComponent;
